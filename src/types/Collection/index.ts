export interface Collection {
  words: DictionaryResponse[][]
  collectionName: string
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

export interface Word {
  word: string
  phonetics: {
    text: string
    audio: string
  }[]
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

export interface CollectionParams {
  name: string
  words: Word[]
}

export interface WordsCollections {
  id: string
  name: string
  words: Words[]
}
