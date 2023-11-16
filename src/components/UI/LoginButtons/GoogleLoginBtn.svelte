<script lang="ts">
  import Icon from '@iconify/svelte'
  import { oauthLogin, setIsLoggedIn } from '../../../store/auth/'
  import { setUser } from '../../../store/user/'
  import { goto } from '$app/navigation'

  const handleLogin = async (provider: string) => {
    try {
      const user = await oauthLogin(provider)

      const expandedUser = user.meta?.rawUser

      setIsLoggedIn(true)
      setUser({
        id: user.record.id,
        username: user.record.username,
        email: expandedUser.email,
        name: expandedUser.name,
        avatar: expandedUser.picture,
      })

      goto('/')
    } catch (err) {
      console.log(err)
    }
  }
</script>

<button
  class="btn btn-lg btn-primary btn-outline w-full rounded-full normal-case"
  on:click={() => handleLogin('google')}
>
  <Icon icon="icomoon-free:google" width={32} inline={true} />
  Continue via Google
</button>
