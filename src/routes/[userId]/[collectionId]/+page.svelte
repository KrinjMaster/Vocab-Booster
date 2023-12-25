<script lang="ts">
  import { goto } from '$app/navigation'
  import WordCard from '$lib/UI/UserCollections/CollectionCards/WordCard/WordCard.svelte'
  import Icon from '@iconify/svelte'
  import { createForm } from 'svelte-forms-lib'
  import { object, string } from 'yup'

  export let data

  const { form, handleChange } = createForm({
    initialValues: {
      word: '',
    },
    validationSchema: object().shape({
      word: string().required(),
    }),
    onSubmit: (values) => {},
  })

  let cardIndex = 0

  const changeWord = (index: number) => {
    cardIndex = index
  }

  const handleGotoProfile = () => {
    goto(`/${data.author}`)
  }
</script>

<section class="flex flex-col h-screen w-full pt-16 px-4 pb-2 gap-5">
  <div class="navbar flex gap-2.5 items-center bg-transparent font-bold w-full">
    <button
      class="btn btn-outline rounded-full -rotate-90 w-16 h-16"
      on:click={handleGotoProfile}
    >
      <Icon icon="uil:arrow-up" width="30" />
    </button>
    <h1 class="font-bold text-7xl">{data.name}</h1>
  </div>
  <input
    type="text"
    name="word"
    placeholder="Type words here"
    class="input input-bordered input-lg w-96 h-14"
    on:change={handleChange}
    bind:value={$form.word}
  />
  <div class="w-full h-[77%] grid grid-cols-4 gap-1.5">
    <div
      class="span-1 flex flex-col justify-start items-start align-top gap-1.5 [overflow:overlay]"
    >
      {#each data.words.filter( (word) => word[0].word.includes($form.word) ) as word, index (index)}
        <button
          on:click={() => changeWord(index)}
          class="btn btn-ghost border-2 border-secondary flex flex-col w-96 h-16"
        >
          <div class="flex gap-1.5">
            <h1 class="font-bold text-3xl">{word[0].word}</h1>
          </div>
        </button>
      {/each}
    </div>
    <div class="w-full col-start-2 col-end-5 px-2">
      {#key cardIndex}
        <WordCard word={data.words[cardIndex]} />
      {/key}
    </div>
  </div>
</section>
