<script lang="ts">
  import { goto } from '$app/navigation'
  import WordCard from '$lib/UI/UserCollections/CollectionCards/WordCard/WordCard.svelte'
  import { useUser } from '$lib/store/user/index.js'
  import { notifier } from '@beyonk/svelte-notifications'
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'

  export let data

  let cardIndex = 0

  onMount(() => {
    if (data.expand === null) {
      goto('/')
      notifier.danger('❌ Collection not found!', 5000)
    }
  })

  const changeWord = (index: number) => {
    cardIndex = index
  }

  const handleGotoProfile = () => {
    goto(`/${$useUser?.id}`)
  }
</script>

<section class="flex flex-col h-screen w-screen pt-14 px-2 pb-2">
  <div class="navbar flex gap-2.5 items-center bg-transparent font-bold">
    <button
      class="btn btn-primary btn-outline rounded-full -rotate-90 w-16 h-16"
      on:click={handleGotoProfile}
    >
      <Icon icon="uil:arrow-up" width="30" />
    </button>
    <h1 class="font-bold text-7xl">{data.name}</h1>
  </div>
  <div class="w-full h-full grid grid-cols-4">
    <div class="span-1 p-2 flex flex-col gap-1.5">
      {#each data.words as word, index (index)}
        <button
          on:click={() => changeWord(index)}
          class="btn btn-ghost border-2 border-secondary flex flex-col p-2.5 w-full h-16"
        >
          <div class="flex gap-1.5">
            <h1 class="font-bold text-3xl">{word[0].word}</h1>
          </div>
        </button>
      {/each}
    </div>
    <div class="w-full col-start-2 col-end-5 p-2">
      {#key cardIndex}
        <WordCard word={data.words[cardIndex]} />
      {/key}
    </div>
  </div>
</section>
