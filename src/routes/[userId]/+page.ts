import { userService } from '$lib/api/user'
import type { WordsCollection } from '$src/types/Collection'
import type { User } from '$src/types/User'

export async function load({ params }: { params: { userId: string } }) {
  const user: User = await userService.getUser(params.userId)
  return {
    words: user.expand?.wordsCollections
      ? user.expand?.wordsCollections.map((collection: WordsCollection) => {
          return {
            id: collection.id,
            name: collection.name,
            words: collection.words,
          }
        })
      : null,
    user: user,
  }
}
