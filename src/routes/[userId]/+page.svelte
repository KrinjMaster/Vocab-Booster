<script lang="ts">
  import { onMount } from 'svelte'
  import { useUser } from '$lib/store/user'
  import { setCollections } from '$lib/store/collections'
  import CollectionList from '$lib/UI/CollectionsList/CollectionList.svelte'

  export let data

  onMount(() => {
    setCollections(data.words)
  })
</script>

<section class="flex flex-col p-5 pt-16 gap-5">
  <div class="flex gap-5 items-center">
    <img src={$useUser?.avatar} alt="user-avatar" class="w-24 rounded-full" />
    <h1 class="text-4xl font-extrabold">{$useUser?.name}</h1>
  </div>
  <CollectionList />
</section>
