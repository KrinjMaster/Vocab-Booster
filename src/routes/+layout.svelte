<script lang="ts">
  import { onMount } from 'svelte'
  import '../app.css'
  import Header from '$lib/UI/Header/Header.svelte'
  import { setUserOnMount } from '$lib/store/auth'
  import { NotificationDisplay } from '@beyonk/svelte-notifications'
  import { page } from '$app/stores'
  import { useUser } from '$lib/store/user'
  import { handleRedirect } from '$lib/guards'

  onMount(() => {
    setUserOnMount()

    page.subscribe((value) => handleRedirect(value, $useUser))
  })
</script>

<NotificationDisplay />
<Header />
<slot />
