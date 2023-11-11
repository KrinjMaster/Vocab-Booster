<script lang="ts">
  import GithubLoginBtn from '../../components/UI/GithubLoginBtn.svelte'
  import GoogleLoginBtn from '../../components/UI/GoogleLoginBtn.svelte'
  import YandexLoginBtn from '../../components/UI/YandexLoginBtn.svelte'
</script>

<div
  class="w-fit h-screen flex flex-col items-center justify-center gap-1.5 m-auto"
>
  <h1 class="text-6xl font-bold">
    Hello,
    <span
      class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary"
    >
      stranger
    </span> !
  </h1>
  <p class="text-md font-semibold w-96 text-center">
    If you won't login you won't be able to have profile with personal records.
  </p>
  <div class="flex flex-col w-full gap-5 mt-8">
    <GoogleLoginBtn />
    <GithubLoginBtn />
    <YandexLoginBtn />
  </div>
</div>
