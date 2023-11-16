import { userService } from '../../services/user.service'
import type { WordsCollectionsResponse } from '../../types/Collection'

export async function load({ params }: { params: { userId: string } }) {
  const result = await userService.getUser(params.userId)
  return {
    words: result.expand?.wordsCollections.map(
      (collection: WordsCollectionsResponse) => {
        return {
          id: collection.id,
          name: collection.name,
          words: collection.words,
        }
      }
    ),
  }
}
