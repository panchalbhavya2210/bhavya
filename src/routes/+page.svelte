<script>
  import Home from "./Home.svelte";

  import { getAnalytics, logEvent } from "firebase/analytics";
  import { initializeApp } from "firebase/app";
  import { firebaseConfig } from "../lib/firebaseConfig";
  import { onMount } from "svelte";
  const app = initializeApp(firebaseConfig);

  onMount(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "notification_received");
  });
</script>

<svelte:head>
  <title>Home • Bhavya</title>
  <meta name="description" content="Bhavya Panchal's Portfolio" />
</svelte:head>
<main>
  <Home />
</main>
