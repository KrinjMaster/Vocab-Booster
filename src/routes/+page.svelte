<script>
  import { onMount } from 'svelte'

  let letter = ''

  onMount(() => {
    document.addEventListener('keyup', (e) => {
      let pressedKey = String(e.key)
      let found = pressedKey.match(/[a-z]/gi)

      if (!found || found.length > 1) {
        return
      } else {
        letter = pressedKey
      }
    })
  })
</script>

<section class="w-scree h-screen flex flex-col items-center justify-center">
  <kbd class="kbd w-16 h-16 font-bold text-3xl uppercase text-primary">
    {letter}
  </kbd>
</section>
