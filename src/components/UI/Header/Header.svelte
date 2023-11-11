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
    const userModal = document.getElementById('user-modal')

    if (userModal instanceof HTMLDialogElement) {
      userModal.showModal()
    }
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
    <dialog id="user-modal" class="modal">
      <div
        class="modal-box flex flex-col gap-2.5 bg-base-100 border-2 border-primary"
      >
        <div class="flex items-center justify-start gap-5">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src={$useUser.avatar} alt="user-avatar" />
            </div>
          </div>
          <div>
            <h3 class="font-bold text-3xl">{$useUser.name}</h3>
            <h3 class="font-bold text-xl">{$useUser.username}</h3>
          </div>
        </div>
        <div class="modal-action flex justify-between">
          <button class="btn btn-primary btn-wide" on:click={handleLogOut}>
            Log out
          </button>
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-error btn-outline">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  {/if}
</div>
