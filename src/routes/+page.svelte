<script lang="ts">
  import Modal from '$lib/UI/Modals/CollectionCreation/Modal.svelte'
  import { useUser } from '$lib/store/user'
</script>

<section
  class="w-screen h-screen flex flex-col items-center justify-center px-10 gap-5"
>
  <h1 class="text-6xl font-bold text-center">
    Platform which helps <span class="text-primary">learning</span> new words !
  </h1>
  <p class="text-xl">
    You can see all of your collections in your <a
      href={`/${$useUser?.id}`}
      class="text-primary font-bold">profile</a
    >
  </p>
  <Modal />
</section>
