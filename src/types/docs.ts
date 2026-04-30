import type { CollectionEntry } from "astro:content";

/**
 * Domain-wide naming conventions
 * - "id"    → the content collection ID (filesystem-derived, e.g. "getting-started/installation")
 * - "slug"  → equivalent to "id" in the docs domain (entry IDs in pagination, etc.)
 * - "path"  → the public URL (e.g. "/docs/getting-started/installation")
 * - "param" → the [...slug] route parameter (id without the "index" special case)
 */

/** A link in the prev/next pagination footer. `slug` is the content collection ID. */
export interface DocPaginationLink {
  slug: string;
  label: string;
}

export interface DocPagination {
  prev?: DocPaginationLink;
  next?: DocPaginationLink;
}

/** The category and page IDs that form the active path through the sidebar tree. */
export interface DocActiveTrail {
  categoryId: string | null;
  pageId: string;
}

/** A single documentation page in the sidebar tree. */
export interface DocNavPageNode {
  type: "page";
  id: string;
  label: string;
  order: number;
  path: string;
}

/** A collapsible category grouping pages in the sidebar tree. */
export interface DocNavCategoryNode {
  type: "category";
  id: string;
  label: string;
  order: number;
  icon?: string;
  collapsed: boolean;
  children: DocNavPageNode[];
}

export interface DocTocNode {
  slug: string;
  text: string;
  depth: number;
  children: DocTocNode[];
}

export type DocNavNode = DocNavCategoryNode | DocNavPageNode;
export type DocsTree = DocNavNode[];
export type DocEntry = CollectionEntry<"docs">;
export type DocCategoryEntry = CollectionEntry<"docCategories">;
export type DocFrontmatter = DocEntry["data"];
