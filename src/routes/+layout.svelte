<script>
  import { onMount } from 'svelte'
  import '../app.css'
  import Header from '../components/UI/Header/Header.svelte'
  import { goto } from '$app/navigation'
  import { useUser } from '../store/user'
  import { setUserOnMount } from '../store/auth'

  onMount(() => {
    setUserOnMount()
    console.log($useUser)
    if ($useUser === null) {
      goto('/login')
    }
  })
</script>

<Header />
<slot />
