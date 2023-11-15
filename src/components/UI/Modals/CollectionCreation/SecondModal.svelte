<script lang="ts">
  import Icon from '@iconify/svelte'
  import SearchBar from '../../SearchBar/SearchBar.svelte'
  import WordsList from '../../WordsList/WordsList.svelte'
  import {
    addNewCollection,
    clearCollection,
    useCollectionCreation,
  } from '../../../../store/dict/'
  import { useUser } from '../../../../store/user'
  import { notifier } from '@beyonk/svelte-notifications'

  const handleAddCollection = () => {
    if ($useUser) {
      addNewCollection(
        {
          name: $useCollectionCreation.collectionName,
          words: $useCollectionCreation.words.map((array) =>
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

      const prevModal = document.getElementById('modal_2')

      if (prevModal instanceof HTMLDialogElement) {
        prevModal.close()
      }

      clearCollection()

      notifier.success('✅ Added new collection!', 2500)
    }
  }
</script>

<dialog id="modal_2" class="modal">
  <div
    class="modal-box flex flex-col gap-3.5 border border-secondary w-[45rem] max-w-none h-full wordslist p-5"
  >
    <h3 class="font-bold text-xl">Now add your words!</h3>
    <SearchBar />
    <WordsList />
    <button
      class={`btn rounded-lg h-16 w-full sticky bottom-0 backdrop-blur-sm mt-auto ${
        $useCollectionCreation.words.length < 1
          ? 'btn-disabled'
          : 'btn-primary btn-outline'
      }`}
      on:click={handleAddCollection}
    >
      <Icon icon="maki:arrow" width="18" />
    </button>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
