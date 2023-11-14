<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import { object, string } from 'yup'
  import { addNewCollection, getNewWord, useDict } from '../../../store/dict'
  import { notifier } from '@beyonk/svelte-notifications'
  import { useUser } from '../../../store/user'

  const { form, handleChange, handleSubmit } = createForm({
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

  const handleAddWordsColleciton = () => {
    if ($useUser) {
      addNewCollection(
        {
          name: 'myCollection',
          words: $useDict.words.map((array) =>
            array.map((word) => {
              return {
                word: word.word,
                meanings: word.meanings,
                phonetics: word.phonetics,
              }
            })
          ),
        },
        $useUser.id
      )
      notifier.success('✅ Added new collection!', 2500)
    }
  }
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
  <button class="btn btn-info btn-lg" type="submit">Add</button>
</form>
