<script lang="ts">
  import { goto } from '$app/navigation'
  import { useCollections } from '$lib/store/collections'
  import { handleDeleteCollection } from '$lib/store/collections'
  import Icon from '@iconify/svelte'

  export let userId: string

  const handleButtonClick = (collectionId: string, isDeleting: boolean) => {
    if (isDeleting) {
      handleDeleteCollection(collectionId)
    } else {
      goto(`${userId}/${collectionId}`)
    }
  }
</script>

{#key $useCollections?.length}
  {#if $useCollections}
    {#each $useCollections as collection (collection.id)}
      <button
        class="card w-full bg-transparent border-2 border-secondary p-2.5"
        on:click={() => handleButtonClick(collection.id, false)}
      >
        <div
          class="flex w-full justify-between gap-1.5 font-bold text-lg uppercase items-center"
        >
          <div class="flex flex-col gap-1.5">
            <h1 class="text-5xl font-bold text-left">{collection.name}</h1>
            <div class="flex gap-1.5">
              {#each collection.words.slice(0, 10) as word, index (index)}
                <p class="text-primary">
                  {word[0].word}
                  {9 !== index
                    ? ','
                    : 9 === collection.words.length
                      ? ''
                      : `and ${collection.words.length - 9} more`}
                </p>
              {/each}
            </div>
          </div>
          <button
            class="btn btn-ghost hover:btn-error btn-square btn-lg"
            on:click={() => handleButtonClick(collection.id, true)}
          >
            <Icon icon="mingcute:delete-fill" width="30" />
          </button>
        </div>
      </button>
    {/each}
  {/if}
{/key}
