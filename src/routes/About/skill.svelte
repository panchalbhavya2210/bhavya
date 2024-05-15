<script>
  import { onMount } from "svelte";

  export let name;
  export let logo;

  onMount(() => {
    let grabElement = document.querySelectorAll(".skill");

    const mouseMove = (e) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    for (const rectGrad of grabElement) {
      rectGrad.onmousemove = (e) => mouseMove(e);
    }
  });
</script>

<div
  class="skill flex items-center justify-start border border-nav-cyan rounded-md"
>
  <div class="skillLogo">
    <img src={logo} alt={name} />
  </div>
  <div class="skillName">
    <span>{name}</span>
  </div>
</div>

<style>
  .skill {
    position: relative;
    width: 80%;
    height: 130%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 26, 81, 0.215);
    border: 0.5px solid rgba(0, 12, 48, 1);
    border-radius: 5px;
    cursor: default;
  }

  .skill:hover::before {
    opacity: 1;
  }
  .skill::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: -2;
    opacity: 0;
    transition: opacity 500ms;

    background: radial-gradient(
        400px circle at var(--mouse-x) var(--mouse-y),
        #1a67fc 0%,
        rgba(228, 223, 218, 0) 100%
      ),
      radial-gradient(
        50% 50% at 50% 50%,
        #1a67fc 0%,
        rgba(228, 223, 218, 0) 100%
      );
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(145, 222, 255, 0.54),
      transparent 40%
    );
  }
</style>
