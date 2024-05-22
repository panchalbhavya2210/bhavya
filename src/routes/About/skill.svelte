<script>
  import { onMount } from "svelte";

  export let name;
  export let logo;
  export let classNa;

  const sensitivity = 1;

  onMount(() => {
    let grabElement = document.querySelectorAll(".skill");

    const mouseMove = (e) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect(),
        x = (e.clientX - rect.left) * sensitivity,
        y = (e.clientY - rect.top) * sensitivity;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    for (const rectGrad of grabElement) {
      rectGrad.onmousemove = (e) => mouseMove(e);
    }
  });
</script>

<div class="skill rounded-md p-2 w-full {classNa}">
  <div class="skillContent" style="transform: translateZ(40px);">
    <div
      class="skillLogo w-full flex justify-center items-center h-10"
      style="transform: translateZ(20px);"
    >
      <img
        src={logo}
        alt={name}
        class="w-auto h-8"
        style="transform: translateZ(10px);"
      />
    </div>
    <div
      class="skillName text-center mt-3"
      style="transform: translateZ(30px);"
    >
      <span>{name}</span>
    </div>
  </div>
</div>

<style>
  .skill {
    position: relative;
    border: 1px solid rgba(0, 65, 92, 0.249);
    border-radius: 5px;
    cursor: default;
    transition:
      transform 0.5s,
      box-shadow 0.5s;
    transform-style: preserve-3d;
    background-color: #ecebeb70;
  }

  .skill:hover {
    transform: rotateY(5deg) rotateX(5deg) scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border: 0;
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
      rgba(55, 195, 255, 0.54),
      transparent 40%
    );
  }
</style>
