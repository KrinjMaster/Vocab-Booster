<script lang="ts">
  import Icon from '@iconify/svelte'
  import { oauthLogin, setIsLoggedIn } from '../../../store/auth'
  import { goto } from '$app/navigation'
  import { setUser } from '../../../store/user'

  const handleLogin = async (provider: string) => {
    try {
      const user = await oauthLogin(provider)

      const meta = user.meta

      setIsLoggedIn(true)
      setUser({
        id: user.record.id,
        username: meta?.username,
        email: meta?.email,
        name: meta?.name,
        avatar: meta?.avatarUrl,
      })

      console.log(user)

      goto('/')
    } catch (err) {
      console.log(err)
    }
  }
</script>

<button
  class="btn btn-lg btn-primary btn-outline w-full rounded-full normal-case"
  on:click={() => handleLogin('github')}
>
  <Icon icon="mdi:github" height={32} inline={true} />
  Continue via GitHub
</button>
