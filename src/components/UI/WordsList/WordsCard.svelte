<script lang="ts">
  import Icon from '@iconify/svelte'
  import type { DictionaryResponse } from '../../../types/Dict'
  import { remWord } from '../../../store/dict'
  import { notifier } from '@beyonk/svelte-notifications'

  export let wordIndex: number
  export let word: DictionaryResponse[]

  let isExpanded = true
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

  const handleRemoveWord = () => {
    remWord(wordIndex)
    notifier.success('✅ Removed word!', 3000)
  }

  const handleExpandCard = () => {
    isExpanded ? (isExpanded = false) : (isExpanded = true)
  }

  console.log(word[0].meanings[0].definitions)
</script>

<div
  class={`card w-full bg-transparent border-2 border-secondary ${
    isExpanded ? 'h-fit' : 'h-20'
  } overflow-hidden p-1.5`}
>
  <div class="card-body flex flex-col p-2.5">
    <div class="flex gap-1.5">
      <h1 class="text-5xl font-bold uppercase">{word[index].word}</h1>
      {#if word[index].phonetics[0] && word[index].phonetics[0].audio}
        <button
          class="btn btn-primary btn-outline border-none"
          on:click={playWordSound}
        >
          <Icon icon="icon-park-outline:sound-wave" width="30" />
        </button>
      {/if}
      <button
        class={`btn btn-primary btn-outline border-none ${
          isExpanded ? '' : 'rotate-180'
        }`}
        on:click={handleExpandCard}
      >
        <Icon icon="uil:arrow-up" width="30" />
      </button>
      <button
        class="btn btn-square btn-sm btn-primary btn-outline ml-auto"
        on:click={handleRemoveWord}
      >
        <Icon icon="basil:cross-solid" width="30" />
      </button>
    </div>
    {#each word[index].meanings as meaning (meaning.definitions[0].definition)}
      <div class="divider m-0"></div>
      <div class="flex gap-1.5 w-full text-xl font-extrabold text-info">
        {meaning.partOfSpeech}
        {#if word[index].phonetics[0]}
          {word[index].phonetics[0].text}
        {/if}
      </div>
      <div class="flex justify-between">
        <p class="text-lg font-light">
          {meaning.definitions[0].definition}
        </p>
      </div>
    {/each}
    {#if word.length > 1}
      <button class="btn btn-ghost" on:click={handleChangeMeaning}>
        Another meaning
      </button>
    {/if}
  </div>
</div>
