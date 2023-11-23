import { goto } from '$app/navigation'
import { notifier } from '@beyonk/svelte-notifications'
import type { User } from '$src/types/User'
import type { Page } from '@sveltejs/kit'

export const handleRedirect = (value: Page, user: User | null) => {
  if (user === null) {
    goto('/login')
  }

  if (value.url.pathname === '/collection') {
    if (user !== null) {
      goto('/')

      notifier.danger(
        'You need to specify which collection you want to see!',
        5000
      )
    }
  }
}
