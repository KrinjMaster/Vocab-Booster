<script lang="ts">
  import { useUser } from '$lib/store/user'
  import { goto } from '$app/navigation'

  const handleOpenUserProfile = () => {
    goto(`/${$useUser?.id}`)
  }
</script>

<div class="navbar bg-transparent justify-between px-10 absolute top-0 h-12">
  <a class="btn btn-ghost normal-case text-xl" href="/">Vocab Booster</a>
  {#if $useUser}
    <div class="flex gap-2.5 font-bold">
      <h1 class="text-xl">{$useUser.name}</h1>
      <button class="avatar" on:click={handleOpenUserProfile}>
        <div class="w-10 h-10 rounded-full">
          <img src={$useUser.avatar} alt="user-avatar" />
        </div>
      </button>
    </div>
  {/if}
</div>
