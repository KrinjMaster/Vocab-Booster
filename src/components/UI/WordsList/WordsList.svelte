<script lang="ts">
  import { useDict } from '../../../store/dict'
  import WordsCard from './WordsCard.svelte'
</script>

<section class="flex flex-col items-center w-full gap-2.5 pt-5">
  {#key $useDict.words.length}
    {#each $useDict.words as word, index (word)}
      <WordsCard {word} wordIndex={index} />
    {/each}
  {/key}
</section>
