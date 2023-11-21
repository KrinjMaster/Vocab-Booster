import type { AuthModel, RecordAuthResponse } from 'pocketbase'
import { pb } from '$lib/api/pb'

class AuthService {
  async loginOAuth(provider: string): Promise<RecordAuthResponse> {
    const result = await pb.collection('users').authWithOAuth2({
      provider,
    })

    const meta = result.meta

    if (meta && meta.isNew) {
      await pb.collection('users').update(result.record.id, {
        name: meta.name,
        avatar: meta.avatarUrl,
      })
    }

    return result as RecordAuthResponse
  }

  getCurrentUser(): AuthModel {
    return pb.authStore.model
  }

  logout() {
    return pb.authStore.clear()
  }
}

export const authService = new AuthService()
