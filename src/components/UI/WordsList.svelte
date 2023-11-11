<script>
  import Icon from '@iconify/svelte'
  import { useDict } from '../../store/dict'

  $: console.log($useDict.words)
</script>

<section class="flex flex-col w-96 gap-2.5 pt-2.5">
  {#key $useDict.words.length}
    {#each $useDict.words as { word, meanings, phonetic } (word)}{/each}
  {/key}
</section>
