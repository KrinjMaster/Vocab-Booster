import type {
  CollectionParams,
  DictionaryResponse,
  ResponseError,
} from '$src/types/Collection'
import { getDictUrl } from '$lib/utils/getDictUrl'
import { pb } from '$lib/api/pb'
import type { RecordModel } from 'pocketbase'

class CollectionService {
  async getWord(word: string): Promise<DictionaryResponse[] | ResponseError> {
    const apiUrl = getDictUrl(word)
    return await fetch(apiUrl).then((response) => {
      return response.json()
    })
  }

  async addNewCollection(
    collection: CollectionParams,
    userId: string
  ): Promise<RecordModel> {
    return await pb.collection('wordsCollections').create({
      name: collection.name,
      words: collection.words,
      author: userId,
    })
  }

  async updateWordsCollections(
    collectionId: string,
    userId: string
  ): Promise<any> {
    return await pb.collection('users').update(userId, {
      'wordsCollections+': collectionId,
    })
  }
}

export const collectionService = new CollectionService()
