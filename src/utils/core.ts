import { ui, defaultLang } from "@/i18n/ui";

/**
 * Safely clones an object using native structuredClone.
 * Falls back to returning the original reference if the object is non-serializable (e.g., contains functions).
 */
function safeClone<T>(obj: T): T {
  if (obj === undefined) return obj;
  try {
    return structuredClone(obj);
  } catch (e) {
    return obj;
  }
}

/**
 * Provides O(1) synchronous dictionary lookups for the UI.
 */
export const useTranslations = (lang: keyof typeof ui = defaultLang) => {
  return function t<K extends keyof (typeof ui)[typeof defaultLang]>(key: K) {
    return ui[lang][key] || ui[defaultLang][key];
  };
};

/**
 * Strictly formats URLs for a single-page architecture.
 * Bypasses formatting for hash links (#), mailto:, and tel:.
 */
export const formatUrl = (url: string | undefined): string => {
  if (!url) return "/";
  if (
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    url.startsWith("#")
  ) {
    return url;
  }
  try {
    const isAbsolute = url.startsWith("http://") || url.startsWith("https://");
    if (isAbsolute) return new URL(url).href;
    return url; // Return relative paths as-is
  } catch (error) {
    return url;
  }
};

/**
 * Deep merges a source object into a target object using native APIs.
 */
export function overrideObjects<T>(target: T, source: any): T {
  if (!target) return source;
  if (!source) return target;
  const result = safeClone(target) as any;
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      result[key] &&
      typeof result[key] === "object" &&
      !Array.isArray(result[key])
    ) {
      // Recursively merge nested objects
      result[key] = overrideObjects(result[key], source[key]);
    } else {
      // Overwrite or add the value (safely cloned to prevent reference leaking)
      result[key] = safeClone(source[key]);
    }
  }
  return result as T;
}

/**
 * Recursively sorts an array of objects by their `weight` property.
 */
type WeightedItem = {
  weight?: number | null;
  children?: WeightedItem[];
  menus?: WeightedItem[];
  [key: string]: any;
};
export function sortByWeight<T extends WeightedItem>(array: T[]): T[] {
  return array
    .slice() // Shallow copy to avoid mutating the original array reference
    .sort((a, b) => {
      const aWeight = a.weight ?? Infinity;
      const bWeight = b.weight ?? Infinity;
      return aWeight - bWeight;
    })
    .map((item) => ({
      ...item,
      ...(item.children ? { children: sortByWeight(item.children) } : {}),
      ...(item.menus ? { menus: sortByWeight(item.menus) } : {}),
    }));
}

/**
 * Recursively filters an array of objects, removing any where `enable: false`.
 */
export function filteredEnabled<
  T extends { enable?: boolean; children?: T[]; menus?: T[] },
>(menu: T[]): T[] {
  const clonedMenu = safeClone(menu);
  return clonedMenu
    .filter((item) => item.enable !== false) // Keep items where enable is true or undefined
    .map((item) => {
      if (item.children) item.children = filteredEnabled(item.children);
      if (item.menus) item.menus = filteredEnabled(item.menus);
      return item;
    });
}

/**
 * Splits a string by slashes while protecting URLs, and injects the current year.
 */
export function splitProtectedText(
  text: string,
  options?: { yearPlaceholder?: string },
): string[] {
  if (!text) return [];
  const yearPlaceholder = options?.yearPlaceholder || "{{ year }}";
  const currentYear = new Date().getFullYear().toString();
  const urlRegex = /https?:\/\/[^\s)]+/g;
  const urlPlaceholders: Record<string, string> = {};
  const protectedText = text.replace(urlRegex, (url, index) => {
    const placeholder = `__URL${index}__`;
    urlPlaceholders[placeholder] = url;
    return placeholder;
  });
  let parts = protectedText.split(/\s*\/\s*/);
  parts = parts.map((part) =>
    part.replace(/__URL\d+__/g, (match) => urlPlaceholders[match] || match),
  );
  const yearRegex = new RegExp(
    yearPlaceholder.replace(/\s+/g, "\\s*").replace(/[{}]/g, "\\$&"),
    "g",
  );
  parts = parts.map((part) => part.replace(yearRegex, currentYear));
  return parts;
}
