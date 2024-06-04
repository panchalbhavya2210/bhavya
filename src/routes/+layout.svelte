<script>
  import "../lib/global.css";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject();
</script>

<main>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</main>
