<script lang="ts">
  import { onMount } from 'svelte'
  import { useUser } from '$lib/store/user'
  import { setCollections } from '$lib/store/collections'
  import CollectionList from '$lib/UI/UserCollections/CollectionList.svelte'

  export let data

  onMount(() => {
    setCollections(data.words)
  })
</script>

<section class="flex flex-col pt-14 px-2 gap-5">
  <div class="flex gap-5 items-center pt-1">
    <img src={$useUser?.avatar} alt="user-avatar" class="w-24 rounded-full" />
    <h1 class="text-4xl font-extrabold">{$useUser?.name}</h1>
  </div>
  <CollectionList />
</section>
