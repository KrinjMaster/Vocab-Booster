import type {
  CollectionParams,
  DictionaryResponse,
  ResponseError,
} from '../types/Dict'
import { getDictUrl } from '../utils/getDictUrl'
import { pb } from './api'

class DictService {
  async getWord(word: string): Promise<DictionaryResponse[] | ResponseError> {
    const apiUrl = getDictUrl(word)
    return await fetch(apiUrl).then((response) => {
      return response.json()
    })
  }

  async addNewCollection(collection: CollectionParams): Promise<any> {
    return await pb.collection('wordsCollections').create({
      name: collection.name,
      words: collection.words,
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

export const dictService = new DictService()
