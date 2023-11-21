<script lang="ts">
  import { onMount } from 'svelte'
  import '../app.css'
  import Header from '$lib/UI/Header/Header.svelte'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { useUser } from '$lib/store/user'
  import { setUserOnMount } from '$lib/store/auth'
  import { NotificationDisplay } from '@beyonk/svelte-notifications'

  onMount(() => {
    setUserOnMount()
  })

  $: $page.url,
    () => {
      if ($useUser === null) {
        goto('/login')
      }
    }
</script>

<NotificationDisplay />
<Header />
<slot />
