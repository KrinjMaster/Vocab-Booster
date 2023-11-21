import { pb } from '$lib/api/pb'

class UserService {
  async getUser(userId: string) {
    return await pb.collection('users').getOne(userId, {
      expand: 'wordsCollections',
    })
  }
}

export const userService = new UserService()
