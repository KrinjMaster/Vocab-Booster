<script lang="ts">
  import type { WordMeaning } from '$src/types/Collection'

  export let phonetics: string | null
  export let meaning: WordMeaning

  let definition = 0

  const handleChangeDefinition = () => {
    if (definition === meaning.definitions.length - 1) {
      definition = 0
    } else {
      definition++
    }
  }
  console.log(meaning.definitions)
</script>

<div class="divider m-0"></div>
<div class="flex gap-1.5 w-full text-3xl font-extrabold text-info items-center">
  {meaning.partOfSpeech}
  {#if phonetics}
    {phonetics}
  {/if}
  {#if meaning.definitions.length > 1}
    <button
      class="btn btn-ghost text-base-content border-none w-fit text-md"
      on:click={handleChangeDefinition}
    >
      Another definition
    </button>
  {/if}
</div>
<div class="flex flex-col gap-3.5">
  <p class="text-3xl font-light">
    {meaning.definitions[definition].definition}
  </p>
  {#if meaning.definitions[definition].example}
    <p class="text-xl text-info">
      {meaning.definitions[definition].example}
    </p>
  {/if}
  {#if meaning.definitions[definition].synonyms.toString() !== ''}
    <div class="flex gap-1.5 text-zinc-400">
      <h1 class="font-bold w-fit">Synonyms:</h1>
      <div class="flex gap-1.5">
        {#each meaning.definitions[definition].synonyms as synonym (synonym)}
          <h1>{synonym}</h1>
        {/each}
      </div>
    </div>
  {/if}
  {#if meaning.definitions[definition].antonyms.toString() !== ''}
    <div class="flex gap-1.5 text-zinc-400">
      <h1 class="font-bold w-fit">Antonyms:</h1>
      <div class="flex gap-1.5">
        {#each meaning.definitions[definition].antonyms as antonym (antonym)}
          <h1>{antonym}</h1>
        {/each}
      </div>
    </div>
  {/if}
</div>
