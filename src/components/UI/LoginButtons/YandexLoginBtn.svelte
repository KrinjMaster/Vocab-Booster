<script lang="ts">
  import Icon from '@iconify/svelte'
  import { oauthLogin, setIsLoggedIn } from '../../../store/auth'
  import { goto } from '$app/navigation'
  import { setUser } from '../../../store/user'

  const handleLogin = async (provider: string) => {
    try {
      const user = await oauthLogin(provider)

      const expandedUser = user.meta

      setIsLoggedIn(true)
      setUser({
        id: user.record.id,
        username: user.record.username,
        email: expandedUser?.email,
        name: expandedUser?.name,
        avatar: expandedUser?.avatarUrl,
      })

      goto('/')
    } catch (err) {
      console.log(err)
    }
  }
</script>

<button
  class="btn btn-lg btn-primary btn-outline w-full rounded-full normal-case"
  on:click={() => handleLogin('yandex')}
>
  <Icon icon="brandico:yandex-rect" width={32} inline={true} />
  Continue via Yandex
</button>
