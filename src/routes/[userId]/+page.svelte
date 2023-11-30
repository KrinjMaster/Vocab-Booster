<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import { useUser } from '$lib/store/user'
  import { setCollections } from '$lib/store/collections'
  import CollectionList from '$lib/UI/UserCollections/CollectionList.svelte'
  import { logout } from '$lib/store/auth'
  import { notifier } from '@beyonk/svelte-notifications'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import type { WordsCollection } from '$src/types/Collection/index.js'

  export let data

  let isUserProfile: boolean

  onMount(() => {
    setCollections(data.words as WordsCollection[])
  })

  const handleLogOut = () => {
    logout()
    notifier.info('Logged off your account!', 5000)
    goto('/login')
  }

  const setPageContext = () => {
    if ($useUser) {
      if (data.user.id !== $useUser?.id) {
        setContext('pageInfo', {
          isUserProfile,
        })
        isUserProfile = false
      } else {
        setContext('pageInfo', {
          isUserProfile,
        })
        isUserProfile = true
      }
    }
  }

  $: $page.url.href, setPageContext()
  $: $useUser, setPageContext()
</script>

<section class="flex flex-col pt-14 px-2 gap-5">
  <div class="flex gap-5 items-center pt-1">
    <img src={data.user.avatar} alt="user-avatar" class="w-24 rounded-full" />
    <h1 class="text-4xl font-extrabold">{data.user.name}</h1>
    {#if isUserProfile}
      <button class="btn btn-error" on:click={handleLogOut}>Log out</button>
    {/if}
  </div>
  <CollectionList />
</section>
