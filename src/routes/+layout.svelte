<script>
  import "../lib/global.css";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<main>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</main>
