<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import { object, string } from 'yup'
  import {
    renameCollection,
    useCollectionCreation,
  } from '../../../../store/dict'
  import Icon from '@iconify/svelte'

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      name: '',
    },
    validationSchema: object().shape({
      name: string().required(),
    }),
    onSubmit: (values) => {
      renameCollection(values.name)
      handleOpenModal(2)
    },
  })

  const handleOpenModal = (id: number) => {
    if (id === 1 && $useCollectionCreation.words.length > 0) {
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
          type="submit"
          class={`btn rounded-lg h-16 w-16 ${
            $form.name === '' ? 'btn-disabled' : 'btn-primary'
          }`}
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
