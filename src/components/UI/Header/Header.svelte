<script>
  import { useUser } from '../../../store/user/'
  import { logout } from '../../../store/auth/'
  import { goto } from '$app/navigation'

  const handleLogOut = () => {
    try {
      logout()

      goto('/login')
    } catch (err) {
      console.log(err)
    }
  }

  const handleOpenUserProfile = () => {
    goto(`/${$useUser?.id}`)
  }
</script>

<div class="navbar bg-transparent justify-between px-10 absolute top-0">
  <a class="btn btn-ghost normal-case text-xl" href="/">Vocab Booster</a>
  {#if $useUser}
    <div class="flex gap-2.5 font-bold">
      <h1 class="text-xl">{$useUser.name}</h1>
      <button class="avatar" on:click={handleOpenUserProfile}>
        <div class="w-10 rounded-full">
          <img src={$useUser.avatar} alt="user-avatar" />
        </div>
      </button>
    </div>
  {/if}
</div>
