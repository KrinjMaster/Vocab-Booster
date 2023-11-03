import { writable, type Writable } from 'svelte/store'
import { authService } from '../../services/auth.service'
import { useUser } from '../user'
import type { Auth } from '../../types/User'

export const useAuth: Writable<Auth | null> = writable({
  isLoggedIn: false,
})

export function setIsLoggedIn(value: boolean) {
  useAuth.set({ isLoggedIn: value })
}

export function oauthLogin(provider: string) {
  return authService.loginOAuth(provider)
}

export function setUserOnMount() {
  const user = authService.getCurrentUser()

  if (user) {
    useAuth.set({ isLoggedIn: true })
    useUser.set({
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
    })
  }
}

export function logout() {
  authService.logout()
  useAuth.set({ isLoggedIn: false })
  useUser.set(null)
}
