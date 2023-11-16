<script lang="ts">
  import { useCollectionCreation } from '../../../../store/collectionCreation'
  import FirstModal from './FirstModal.svelte'
  import SecondModal from './SecondModal.svelte'

  const handleOpenModal = () => {
    if ($useCollectionCreation.words.length > 0) {
      const prevModal = document.getElementById('modal_2')
      if (prevModal instanceof HTMLDialogElement) {
        prevModal.showModal()
      }
    } else {
      const modal = document.getElementById('modal_1')

      if (modal instanceof HTMLDialogElement) {
        modal.showModal()
      }
    }
  }
</script>

<FirstModal />
<SecondModal />
<button class="btn btn-info btn-lg" on:click={handleOpenModal}> Create </button>
