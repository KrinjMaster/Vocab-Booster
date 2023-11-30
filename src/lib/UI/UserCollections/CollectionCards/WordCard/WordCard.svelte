<script lang="ts">
  import Icon from '@iconify/svelte'
  import type { Word } from '$src/types/Collection'
  import DefinitionSection from '$lib/UI/UserCollections/CollectionCards/WordCard/DefinitionSection.svelte'
  import { getAllContexts } from 'svelte'

  export let word: Word[]

  let index = 0

  const handleChangeMeaning = () => {
    if (index === word.length - 1) {
      index = 0
    } else {
      index++
    }
  }

  const playWordSound = () => {
    const sound = new Audio(word[index].phonetics[0].audio)

    sound.play()
  }
</script>

<div
  class="card w-full h-full bg-transparent border-2 border-secondary overflow-hidden p-1.5"
>
  <div class="card-body flex flex-col p-2.5">
    <div class="flex gap-1.5">
      <h1 class="text-7xl font-bold uppercase">{word[index].word}</h1>
      {#if word[index].phonetics[0] && word[index].phonetics[0].audio}
        <button
          class="btn btn-outline border-none h-20 w-20"
          on:click={playWordSound}
        >
          <Icon icon="icon-park-outline:sound-wave" width="50" />
        </button>
      {/if}
    </div>
    {#each word[index].meanings as meaning, index (index)}
      <DefinitionSection
        phonetics={word[index] ? word[index].phonetics[0].text : null}
        {meaning}
      />
    {/each}
    {#if word.length > 1}
      <button class="btn btn-ghost mt-auto" on:click={handleChangeMeaning}>
        Another meaning
      </button>
    {/if}
  </div>
</div>
