import {
  getCollection,
  getEntry,
  type CollectionEntry,
  type CollectionKey,
} from "astro:content";

export const fetchCollection = async <C extends CollectionKey>(
  collectionName: C,
): Promise<CollectionEntry<C>[]> => {
  const pages: CollectionEntry<C>[] = (await getCollection(
    collectionName,
    (item: CollectionEntry<C>) => {
      return !item.id.endsWith("-index");
    },
  )) as CollectionEntry<C>[];
  if (import.meta.env.PROD) {
    return pages.filter((page) => !page.data.draft);
  }
  return pages;
};

export const fetchEntry = async <C extends CollectionKey>(
  collectionName: C,
  subCollectionName: string,
): Promise<CollectionEntry<C>> => {
  const entry = await getEntry(collectionName, subCollectionName);
  if (import.meta.env.PROD && entry?.data?.draft) {
    return undefined as unknown as CollectionEntry<C>;
  }
  return entry as CollectionEntry<C>;
};
