import { writable, type Writable } from 'svelte/store'
import type { WordsCollections } from '../../types/Collection'

export const useCollections: Writable<WordsCollections[] | null> =
  writable(null)

export const setCollections = (collections: WordsCollections[]) => {
  useCollections.set(collections)
}
