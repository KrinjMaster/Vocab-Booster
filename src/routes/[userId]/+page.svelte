<script lang="ts">
  import { onMount } from 'svelte'
  import { useUser } from '$lib/store/user'
  import { setCollections } from '$lib/store/collections'
  import CollectionList from '$lib/UI/UserCollections/CollectionList.svelte'
  import { logout } from '$lib/store/auth'
  import { notifier } from '@beyonk/svelte-notifications'
  import { goto } from '$app/navigation'
  import type { WordsCollection } from '$src/types/Collection/index.js'

  export let data

  onMount(() => {
    setCollections(data.words as WordsCollection[])
  })

  const handleLogOut = () => {
    logout()
    notifier.info('Logged off your account!', 5000)
    goto('/login')
  }
</script>

<section class="flex flex-col pt-14 px-2 gap-5">
  <div class="flex gap-5 items-center pt-1">
    <img src={data.user.avatar} alt="user-avatar" class="w-24 rounded-full" />
    <h1 class="text-4xl font-extrabold">{data.user.name}</h1>
    {#if data.user.id === $useUser?.id}
      <button class="btn btn-error" on:click={handleLogOut}>Log out</button>
    {:else}
      <button class="btn btn-disabled">Log out</button>
    {/if}
  </div>
  {#if $useUser}
    <CollectionList userId={data.user.id} />
  {:else}
    <span class="loading loading-spinner w-48 m-auto"></span>
  {/if}
</section>
