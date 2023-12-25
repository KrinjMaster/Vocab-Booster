<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import { object, string } from 'yup'
  import { getNewWord } from '$lib/store/collectionCreation'
  import { notifier } from '@beyonk/svelte-notifications'

  const { form, handleChange, handleSubmit, isSubmitting, state } = createForm({
    initialValues: {
      word: '',
    },
    validationSchema: object().shape({
      word: string().required(),
    }),
    onSubmit: async (values) => {
      const result = await getNewWord(values.word)

      if (result instanceof Array) {
        notifier.success('✅ Added new word!', 3000)
        $form.word = ''
      } else {
        notifier.danger(`❌ ${result.body.message}`, 3000)
      }
    },
  })

  $: console.log($state.isSubmitting)
</script>

<form on:submit={handleSubmit} class="flex gap-2.5">
  <input
    type="text"
    name="word"
    placeholder="Type words here"
    class="input input-bordered input-lg w-full"
    on:change={handleChange}
    bind:value={$form.word}
  />
  <button
    class={`btn  btn-lg w-20 ${
      $form.word.length < 1 ? 'btn-disabled' : 'btn-primary '
    }`}
    type="submit"
  >
    {#if $isSubmitting}
      <span class="loading loading-spinner"></span>
    {:else}
      Add
    {/if}
  </button>
</form>
