import type {
  CollectionParams,
  DictionaryResponse,
  ResponseError,
} from '$src/types/Collection'
import { getDictUrl } from '$lib/utils/getDictUrl'
import { pb } from '$lib/api/pb'
import type { RecordModel } from 'pocketbase'
import type { CollectionResponse } from '$src/types/Collection'

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
  ): Promise<RecordModel> {
    return await pb.collection('users').update(userId, {
      'wordsCollections+': collectionId,
    })
  }

  async getCollectionById(collectionId: string): Promise<CollectionResponse> {
    return await pb.collection('wordsCollections').getOne(collectionId, {
      expand: 'author',
    })
  }

  async deleteCollection(collectionId: string): Promise<boolean> {
    return await pb.collection('wordsCollections').delete(collectionId)
  }
}

export const collectionService = new CollectionService()
