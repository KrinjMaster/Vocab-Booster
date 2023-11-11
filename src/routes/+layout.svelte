<script>
  import { onMount } from 'svelte'
  import '../app.css'
  import Header from '../components/UI/Header/Header.svelte'
  import { goto } from '$app/navigation'
  import { useUser } from '../store/user'
  import { setUserOnMount } from '../store/auth'
  import { NotificationDisplay } from '@beyonk/svelte-notifications'

  onMount(() => {
    setUserOnMount()

    if ($useUser === null) {
      goto('/login')
    }
  })
</script>

<NotificationDisplay />
<Header />
<slot />
