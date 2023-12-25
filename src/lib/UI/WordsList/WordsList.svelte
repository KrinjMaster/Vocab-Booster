<script lang="ts">
  import { useCollectionCreation } from '$lib/store/collectionCreation'
  import WordsCard from './WordsCard.svelte'
</script>

<section class="flex flex-col items-center w-full gap-2.5 pt-5">
  {#each $useCollectionCreation.words as word, index (index)}
    <WordsCard {word} wordIndex={index} />
  {/each}
</section>
