<script lang="ts">
  import Icon from '@iconify/svelte'
  import { createForm } from 'svelte-forms-lib'
  import { object, string } from 'yup'
  import SearchBar from '../../SearchBar/SearchBar.svelte'
  import WordsList from '../../WordsList/WordsList.svelte'
  import { useDict } from '../../../../store/dict/'

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      name: '',
    },
    validationSchema: object().shape({
      name: string().required(),
    }),
    onSubmit: async (values) => {
      console.log(values)
    },
  })

  const handleOpenModal = (id: number) => {
    if (id === 1 && $useDict.words.length > 0) {
      const prevModal = document.getElementById('modal_2')
      if (prevModal instanceof HTMLDialogElement) {
        prevModal.showModal()
      }
    } else {
      const modal = document.getElementById('modal_' + id.toString())

      if (modal instanceof HTMLDialogElement) {
        if (id > 1) {
          const prevModal = document.getElementById('modal_1')
          if (prevModal instanceof HTMLDialogElement) {
            prevModal.close()
          }
        }
        modal.showModal()
        $form.name = ''
      }
    }
  }
</script>

<dialog id="modal_1" class="modal">
  <div class="modal-box border border-secondary">
    <form on:submit={handleSubmit} class="flex flex-col gap-2.5">
      <h3 class="font-bold text-xl">Lets create a name!</h3>
      <div class="flex gap-1.5">
        <input
          type="text"
          name="name"
          placeholder="My new collection"
          class="input input-bordered input-lg w-full"
          on:change={handleChange}
          bind:value={$form.name}
        />
        <button
          class={`btn rounded-lg h-16 w-16 ${
            $form.name === '' ? 'btn-disabled' : 'btn-primary'
          }`}
          on:click={() => handleOpenModal(2)}
        >
          <Icon icon="maki:arrow" width="18" />
        </button>
      </div>
    </form>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
<dialog id="modal_2" class="modal">
  <div
    class="modal-box border border-secondary w-[45rem] max-w-none h-full wordslist"
  >
    <form on:submit={handleSubmit} class="flex flex-col gap-2.5">
      <h3 class="font-bold text-xl">Now add your words!</h3>
      <SearchBar />
      <WordsList />
    </form>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
<button class="btn btn-info btn-lg" on:click={() => handleOpenModal(1)}>
  Create
</button>
