<script lang="ts">
  import { useCollections } from '$lib/store/collections'

  $: console.log($useCollections)
</script>

{#key $useCollections?.length}
  {#if $useCollections}
    {#each $useCollections as collection (collection.id)}
      <a href={`/collection/${collection.id}`}>
        <div class="card w-full bg-transparent border-2 border-secondary p-2.5">
          <h1 class="text-5xl font-bold">{collection.name}</h1>
          <div class="text-primary flex gap-1.5 font-bold text-lg uppercase">
            {#each collection.words as word, index (index)}
              <p>
                {word[0].word}
                {collection.words.length - 1 !== index ? ',' : ''}
              </p>
            {/each}
          </div>
        </div>
      </a>
    {/each}
  {/if}
{/key}
