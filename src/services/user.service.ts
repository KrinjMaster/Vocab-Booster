import { pb } from './api'

class UserService {
  async getUser(userId: string) {
    return await pb.collection('users').getOne(userId, {
      expand: 'wordsCollections',
    })
  }
}

export const userService = new UserService()
