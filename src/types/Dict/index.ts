export interface Dictionary {
  words: DictionaryResponse[][]
  complition: string[]
}

export interface DictionaryResponse {
  title?: string
  status?: 404
  body?: {
    message: string
  }
  word: string
  phonetic: string
  phonetics: {
    text: string
    audio: string
  }[]
  origin: string
  meanings: {
    partOfSpeech: string
    definitions: [
      {
        definition: string
        example: string
        synonyms: string[]
        antonyms: string[]
      },
    ]
  }[]
}

export interface ResponseError {
  title: string
  message: string
  resolution: string
}
