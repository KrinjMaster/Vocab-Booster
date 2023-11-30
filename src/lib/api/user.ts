import { pb } from '$lib/api/pb'
import type { User } from '$src/types/User'

class UserService {
  async getUser(userId: string): Promise<User> {
    return await pb.collection('users').getOne(userId, {
      expand: 'wordsCollections',
    })
  }
}

export const userService = new UserService()
