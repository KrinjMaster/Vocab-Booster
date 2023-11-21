import { writable, type Writable } from 'svelte/store'
import type { WordsCollection } from '$src/types/Collection'

export const useCollections: Writable<WordsCollection[] | null> = writable(null)

export const setCollections = (collections: WordsCollection[]) => {
  useCollections.set(collections)
}
