<script>
  import Logo from "../lib/assets/logo.svg";
  import { page } from "$app/stores";

  import gsap from "gsap";
  import { onMount } from "svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        end: "+=10",
        scrub: 0.5,
      },
    });
    tl.to(".fixHeight", {
      width: "95%",
      marginTop: 10,
    });

    gsap.to(".box", { opacity: 1, duration: 0.7 });

    gsap.from(".link", {
      opacity: 1,
      y: 100,
    });
    gsap.to(".link", {
      opacity: 1,
      y: -0,
    });
    gsap.from(".link1", {
      opacity: 1,
      y: 100,
      delay: 0.3,
    });
    gsap.to(".link1", {
      opacity: 1,
      y: -0,
      delay: 0.3,
    });
    gsap.from(".link2", {
      opacity: 1,
      y: 100,
      delay: 0.6,
    });
    gsap.to(".link2", {
      opacity: 1,
      y: -0,
      delay: 0.6,
    });
    gsap.from(".link3", {
      opacity: 1,
      y: 100,
      delay: 0.9,
    });
    gsap.to(".link3", {
      opacity: 1,
      y: -0,
      delay: 0.9,
    });

    const paths = document.querySelectorAll(".my-path");

    paths.forEach((path, index) => {
      gsap.fromTo(
        path,
        {
          "stroke-dasharray": path.getTotalLength(),
          "stroke-dashoffset": path.getTotalLength(),
        },
        {
          "stroke-dashoffset": 0,
          duration: 1 + index * 0.1,
          ease: "power1.inOut",
          opacity: 1,
          delay: 1,
        }
      );
    });
  });
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;

    if (isOpen) {
      gsap.to(".burger", {
        rotate: 45,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(".bar:nth-child(1)", {
        duration: 0.5,
        y: 15,
        ease: "power2.inOut",
        opacity: 1,
        rotate: 90,
      });
      gsap.to(".bar:nth-child(2)", {
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      });
      gsap.to(".bar:nth-child(3)", {
        duration: 0.5,
        ease: "power2.inOut",
        y: -5,
        opacity: 1,
        rotate: -360,
      });
      gsap.to(".fixHeight", {
        height: "350px",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(".burger", {
        rotate: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(".bar:nth-child(1)", {
        duration: 0.5,
        scaleY: 1,
        y: 0,
        ease: "power2.inOut",
        opacity: 1,
        rotate: 0,
      });
      gsap.to(".bar:nth-child(2)", {
        duration: 0.5,
        opacity: 1,
        ease: "power2.inOut",
      });
      gsap.to(".bar:nth-child(3)", {
        duration: 0.5,
        scaleY: 1,
        y: 0,
        ease: "power2.inOut",
        opacity: 1,
        rotate: 0,
      });
      gsap.to(".fixHeight", {
        height: "70px",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }
</script>

<main>
  <div
    class="w-11/12 fixHeight h-[70px] mx-auto bg-nav-cyan bg-opacity-55 backdrop-blur-md p-3 rounded-lg mt-5 overflow-hidden fixed-container sm:h-[70px] md:h-[70px] lg:h-[70px]"
  >
    <div class="flex justify-between items-center">
      <img src={Logo} class="w-auto h-10" alt="" />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="burger sm:hidden md:hidden lg:hidden cursor-pointer"
        on:click={toggleMenu}
      >
        <div class="bar w-10 bg-main-cyan h-0.5 my-2 mr-2 rounded-md"></div>
        <div class="bar w-10 bg-main-cyan h-0.5 my-2 mr-2 rounded-md"></div>
        <div class="bar w-10 bg-main-cyan h-0.5 my-2 mr-2 rounded-md"></div>
      </div>
      <div
        class="links relative sm:justify-between lg:w-6/12 md:w-96 sm:w-9/12 sm:flex md:flex lg:flex hidden mr-5 text-xl"
      >
        <a href="/">
          <div
            class="link link-ani p-2 aria relative"
            aria-current={$page.url.pathname === "/" ? "page" : undefined}
          >
            Home
          </div>
        </a>
        <a href="/About">
          <div
            class="link1 link-ani p-2 aria relative"
            aria-current={$page.url.pathname === "/About" ? "page" : undefined}
          >
            About Me
          </div>
        </a>
        <a href="/Work">
          <div
            class="link2 link-ani p-2 aria relative"
            aria-current={$page.url.pathname === "/Work" ? "page" : undefined}
          >
            My Work
          </div>
        </a>
        <a href="/Contact">
          <div
            class="link3 link-ani p-2 aria relative"
            aria-current={$page.url.pathname === "/Contact"
              ? "page"
              : undefined}
          >
            Connect
          </div>
        </a>
      </div>
    </div>
    <div class="mobile-menu sm:hidden md:hidden lg:hidden">
      <a href="/">
        <div
          class="link link-ani-mob p-2 aria-mobile my-5 mt-10"
          aria-current={$page.url.pathname === "/" ? "page" : undefined}
        >
          Home
        </div>
      </a>
      <a href="/">
        <div
          class="link1 link-ani-mob p-2 aria-mobile my-5"
          aria-current={$page.url.pathname === "/About" ? "page" : undefined}
        >
          About Me
        </div>
      </a>
      <a href="/">
        <div
          class="link2 link-ani-mob p-2 aria-mobile my-5"
          aria-current={$page.url.pathname === "/Work" ? "page" : undefined}
        >
          My Work
        </div>
      </a>
      <a href="/">
        <div
          class="link3 link-ani-mob p-2 aria-mobile my-5"
          aria-current={$page.url.pathname === "/Connect" ? "page" : undefined}
        >
          Connect
        </div>
      </a>
    </div>
  </div>
</main>

<style>
  .fixed-container {
    position: fixed;
    top: 0; /* Fixed at the top */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Move back by half of its own width */
    z-index: 50; /* Ensure it stays above other content */
  }
  .link-ani::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: #4484ff;
    opacity: 100%;
    z-index: -1;
    transition: all 0.3s;
    color: #000;
    cursor: pointer;
    margin-bottom: 1px;
  }
  .link-ani-mob::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: #4484ff;
    opacity: 100%;
    z-index: -1;
    transition: all 0.3s;
    color: #000;
    cursor: pointer;
  }
  .link-ani:nth-child(2)::before {
    top: 0%;
  }
  .link-ani:nth-child(4)::before {
    top: 00%;
  }
  .aria[aria-current="page"] {
    border-bottom: 1px solid #4484ff;
  }
  .aria-mobile[aria-current="page"] {
    border-left: 2px solid #4484ff;
  }
  .link-ani:hover::before,
  .link-ani:hover {
    height: 100%;
    color: #000;
    transition: all 0.3s;
  }
  .link-ani-mob:hover::before,
  .link-ani-mob:hover {
    height: 100%;
    color: #000;
    transition: all 0.3s;
  }
</style>
