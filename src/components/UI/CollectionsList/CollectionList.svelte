<script lang="ts">
  import { useCollections } from '../../../store/collections'
</script>

{#if $useCollections}
  {#each $useCollections as collection (collection.id)}
    <div class="card w-full bg-transparent border-2 border-secondary p-2.5">
      <h1 class="text-5xl font-bold">{collection.name}</h1>
    </div>
  {/each}
{/if}
