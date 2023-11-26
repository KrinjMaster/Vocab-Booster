<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import { useUser } from '$lib/store/user'
  import { notifier } from '@beyonk/svelte-notifications'
  import { goto } from '$app/navigation'

  const params = $page.params

  const handleCheckUser = () => {
    if ($useUser && params.userId !== $useUser.id) {
      goto('/')
      notifier.danger('You can not see other people profiles!', 5000)
    }
  }
  $: $useUser, handleCheckUser()
</script>

<slot />
