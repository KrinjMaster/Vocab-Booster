import type { WordsCollection } from '../Collection'

export interface Auth {
  isLoggedIn: boolean
}

export interface User {
  id: string
  username: string
  email: string
  name: string
  avatar: string
  expand?: {
    wordsCollections: WordsCollection[]
  }
}
