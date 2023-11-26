import { userService } from '$lib/api/user'
import type { WordsCollection } from '$src/types/Collection'

export async function load({ params }: { params: { userId: string } }) {
  const result = await userService.getUser(params.userId)
  return {
    words: result.expand?.wordsCollections
      ? result.expand?.wordsCollections.map((collection: WordsCollection) => {
          return {
            id: collection.id,
            name: collection.name,
            words: collection.words,
          }
        })
      : null,
  }
}
