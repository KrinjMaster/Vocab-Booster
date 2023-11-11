import type { DictionaryResponse, ResponseError } from '../types/Dict'
import { getDictUrl } from '../utils/getDictUrl'

class DictService {
  async getWord(word: string): Promise<DictionaryResponse[] | ResponseError> {
    const apiUrl = getDictUrl(word)
    return await fetch(apiUrl).then((response) => {
      return response.json()
    })
  }
}

export const dictService = new DictService()
