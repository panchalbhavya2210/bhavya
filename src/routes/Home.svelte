<script>
  import { onMount } from "svelte";
  import Blob from "../lib/assets/blob.svg";
  import BlobMob from "../lib/assets/blob-mob.svg";

  let clock = new Date();
  let greeting = "";

  if (clock.getHours() < 12) {
    greeting = "Good Morning 👋🏼,";
  } else if (clock.getHours() < 18) {
    greeting = "Good Afternoon 👋🏼,";
  } else {
    greeting = "Good Evening 👋🏼,";
  }

  onMount(() => {});
</script>

<main>
  <img
    class="absolute rot sm:hidden md:hidden lg:hidden w-full"
    src={BlobMob}
    alt=""
  />
  <img
    class="absolute hidden sm:block md:block lg:block sm:w-10/12 md:w-10/12 lg:w-10/12 ml-0 sm:-top-52 sm:-left-96 md:-top-52 md:-left-96 lg:-top-52 lg:-left-96 -z-10"
    src={Blob}
    alt=""
  />
  <div class="relative top-28 ml-6 sm:ml-8 md:ml-10 lg:ml-14 flex">
    <div
      class="para text-4xl leading-relaxed sm:text-6xl sm:leading-relaxed md:text-6xl md:leading-relaxed lg:text-6xl lg:leading-relaxed"
    >
      <p>{greeting}</p>
      <p>I Am Bhavya Panchal</p>
      <p>I Am Web Developer.</p>
      <p class="text-xl mt-9">
        A web developer and UI designer who loves turning ideas into reality.
        I'm always looking for ways to improve and grow in my craft!
      </p>
    </div>
  </div>
</main>
