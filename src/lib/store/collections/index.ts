import { writable, type Writable } from 'svelte/store'
import type { WordsCollection } from '$src/types/Collection'
import { notifier } from '@beyonk/svelte-notifications'
import { collectionService } from '$lib/api/collections'

export const useCollections: Writable<WordsCollection[] | null> = writable(null)

export const setCollections = (collections: WordsCollection[]) => {
  useCollections.set(collections)
}

export const handleDeleteCollection = (collectionId: string) => {
  try {
    collectionService.deleteCollection(collectionId)
    useCollections.update(
      (value) => value && value.filter((word) => word.id !== collectionId)
    )
    notifier.success('✅ Deleted that collection!', 5000)
  } catch (err) {
    notifier.danger('❌ Could not delete that collection!', 5000)
  }
}
