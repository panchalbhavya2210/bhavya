<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import TextPlugin from "gsap/dist/TextPlugin";
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import Observer from "gsap/dist/Observer";
  import MyImage from "../lib/assets/img-self.webp";

  let clock = new Date();
  let greeting = "";

  if (clock.getHours() < 12) {
    greeting = "Good Morning";
  } else if (clock.getHours() < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  onMount(() => {
    gsap.registerPlugin(TextPlugin, ScrollToPlugin, Observer);
    gsap.from(".projectOne", {
      scrollTrigger: {
        trigger: ".work-sect",
      },
      y: 150,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "back.inOut",
    });
    const paths = document.querySelectorAll(".paths-home");
    paths.forEach((path, index) => {
      gsap.fromTo(
        path,
        {
          "stroke-dasharray": path.getTotalLength(),
          "stroke-dashoffset": path.getTotalLength(),
        },
        {
          "stroke-dashoffset": 0,
          duration: 1 + index * 2,
          ease: "power1.inOut",
          opacity: 1,
          delay: 1,
        }
      );
    });

    const buttons = [
      {
        id: "btnExplore",
        classPrefix: "pathingExplore",
        pathSelector: ".path-arr",
      },
      {
        id: "eBtn",
        classPrefix: "eComClass",
        pathSelector: ".eClass",
      },
      {
        id: "wBtn",
        classPrefix: "wComClass",
        pathSelector: ".wClass",
      },
      {
        id: "aBtn",
        classPrefix: "aComClass",
        pathSelector: ".aClass",
      },
    ];

    buttons.forEach((button) => {
      const btn = document.getElementById(button.id);
      btn.addEventListener("mouseenter", () => {
        handleMouseEnter(button.classPrefix, button.pathSelector);
      });
      btn.addEventListener("mouseleave", () =>
        handleMouseLeave(button.pathSelector)
      );
    });

    function handleMouseEnter(classPrefix, pathSelector) {
      gsap.to(`.${classPrefix}`, { opacity: 1 });
      const svgEl = document.querySelectorAll(pathSelector);
      opaqueArrow(svgEl);
    }
    function handleMouseLeave(pathSelector) {
      const svgEl = document.querySelectorAll(pathSelector);
      disopaqueArrow(svgEl, true);
    }
    function opaqueArrow(svgEl) {
      svgEl.forEach((path, index) => {
        gsap.fromTo(
          path,
          {
            "stroke-dasharray": path.getTotalLength(),
            "stroke-dashoffset": path.getTotalLength(),
          },
          {
            "stroke-dashoffset": 0,
            duration: 0.5 + index * 0.1,
            ease: "power1.inOut",
            opacity: 1,
          }
        );
      });
    }
    function disopaqueArrow(svgEl) {
      svgEl.forEach((path, index) => {
        gsap.to(path, {
          "stroke-dashoffset": path.getTotalLength(),
          duration: 0.5,
          ease: "power1.inOut",
          opacity: 0,
        });
      });
    }

    const opt = {
      threshold: 0.2,
    };

    const sections = document.querySelectorAll(".sections");
    const pathBio = document.querySelector(".pathBio");
    const pathWork = document.querySelector(".pathWork");

    let animationsCompleted = 0;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("bio")) {
            animatePath(pathBio);
          } else if (entry.target.classList.contains("work")) {
            animatePath(pathWork);
          }
        }
      });
    }, opt);

    sections.forEach((section) => {
      obs.observe(section);
    });

    function animatePath(path) {
      gsap.fromTo(
        path,
        {
          "stroke-dasharray": path.getTotalLength(),
          "stroke-dashoffset": path.getTotalLength(),
        },
        {
          "stroke-dashoffset": 0,
          duration: 2,
          ease: "power1.out",
          opacity: 1,
          onComplete: () => {
            animationsCompleted++;
            if (animationsCompleted === 2) {
              obs.disconnect();
            }
          },
        }
      );
    }
    function waveHand() {
      gsap.to(".rotHand", {
        rotation: -5,
        transformOrigin: "bottom right",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1,
      });
    }
    const handId = document.querySelector(".rotHand");
    waveHand();
    handId.addEventListener("mouseenter", () => {
      greeting = "Good Vibes....";
      handId.innerHTML = "🚗";
    });
    handId.addEventListener("mouseleave", () => {
      if (clock.getHours() < 12) {
        greeting = "Good Morning";
      } else if (clock.getHours() < 18) {
        greeting = "Good Afternoon";
      } else {
        greeting = "Good Evening";
      }
      handId.innerHTML = "👋🏼";
    });
  });

  function scrollTo() {
    const newY = document.querySelector("#section-next").offsetTop - 100;
    gsap.to(window, {
      duration: 0.7,
      scrollTo: {
        y: newY,
      },
      ease: "power1.inOut",
    });
  }
</script>

<main>
  <h1 class="opacity-0 absolute">.</h1>
  <div
    class="relative top-36 sm:top-28 md:top-28 lg:top-20 ml-5 sm:ml-8 md:ml-10 lg:ml-14 flex"
  >
    <div
      class="para text-3xl leading-normal sm:text-5xl sm:leading-normal md:text-3xl md:leading-normal lg:text-6xl lg:leading-normal"
    >
      <div class="flex">
        <p class="della">{greeting}</p>
        <div class="rotHand ml-2">👋🏼</div>
        <span class="della">,</span>
      </div>
      <p class="della lg:mt-0 w-80 sm:w-96 sm:mt-5 lg:w-2/4">
        I Am Bhavya Panchal,
      </p>
      <p class="della">A Web Developer.</p>
      <p class="text-2xl mt-9 w-80 sm:w-96 sm:mt-5 lg:w-2/4"></p>
      <p class="text-2xl mt-9 w-80 sm:w-96 sm:mt-5 lg:w-2/4">
        A web developer and UI designer who loves turning ideas into reality.
        I'm always looking for ways to improve and grow in my craft!
      </p>

      <button
        class="text-3xl relative mt-10"
        id="btnExplore"
        on:click={scrollTo}
      >
        <svg
          width="190"
          height="41"
          viewBox="0 0 241 41"
          class="pathingExplore opacity-0 absolute -top-3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3H200.717L238 38"
            stroke="#058ED9"
            stroke-width="3"
            class="path-arr"
          />
          <path
            d="M214 38H238V15.5"
            stroke="#058ED9"
            stroke-width="3"
            class="path-arr"
          />
        </svg>

        EXPLORE</button
      >
    </div>
    <svg
      width="1365"
      height="1436"
      viewBox="0 0 1365 1436"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-2/5 h-auto absolute right-10 top-0 md:block lg:block hidden 2xl:w-1/4"
    >
      <path
        d="M7.5 510.5L692.5 3L1363 510.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M6 926L690.747 1433L1361 926"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M7 562.5L692 55L1362.5 562.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M5 874L690.253 1381L1361 874"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M6.5 614.5L691.5 107L1362 614.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M5 822L689.747 1329L1360 822"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M6 666.5L691 159L1361.5 666.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M4 770L689.253 1277L1360 770"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M5.5 718.5L690.5 211L1361 718.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M4 718L688.747 1225L1359 718"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M5 770.5L690 263L1360.5 770.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M3 666L688.253 1173L1359 666"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M4.5 822.5L689.5 315L1360 822.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M3 614L687.747 1121L1358 614"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M4 874.5L689 367L1359.5 874.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M2 562L687.253 1069L1358 562"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M3.5 926.5L688.5 419L1359 926.5"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M2 510L686.747 1017L1357 510"
        stroke="#058ED9"
        stroke-width="4"
        class="paths-home"
      />
    </svg>
  </div>

  <div class="bio w-full mt-72 sections" id="section-next">
    <div class="flex justify-start">
      <svg
        width="1512"
        height="81"
        viewBox="0 0 1512 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_83_2)">
          <path
            d="M-1004 44.5C-1004 44.5 338.932 44.5 595.352 44.5C627.79 44.5 660.744 6.5 660.744 6.5H749.821V74H814.698C814.698 74 839.5 81 855 71.5C876.205 58.5032 901.14 6.49999 938.27 6.5C1129.3 6.50005 2299 6.5 2299 6.5"
            stroke="#058ED9"
            stroke-width="5"
            class="pathBio opacity-0"
          />
          <path
            d="M683.785 71.3594C686.167 71.3594 688.323 70.8281 690.254 69.7656C692.184 68.6719 693.665 67.5938 694.695 66.5312C697.076 64.0625 698.267 61.0938 698.267 57.625C698.267 52.1875 696.432 48.0469 692.764 45.2031C689.095 42.3281 684.155 40.8906 677.944 40.8906H671.476C671.058 40.8906 670.848 40.4531 670.848 39.5781V34.2812C670.848 33.4062 671.058 32.9688 671.476 32.9688H677.944C682.997 32.9688 686.698 31.6719 689.047 29.0781C691.397 26.4844 692.571 23.6875 692.571 20.6875C692.571 18.8125 692.216 17.1719 691.509 15.7656C690.833 14.3281 689.723 13.0625 688.179 11.9688C686.666 10.8438 685.105 10.1719 683.496 9.95312L682.433 9.8125H671.138C670.398 9.8125 669.754 10.0469 669.208 10.5156C668.661 10.9531 668.387 11.5156 668.387 12.2031V68.9688C668.387 69.6562 668.661 70.2344 669.208 70.7031C669.754 71.1406 670.398 71.3594 671.138 71.3594H683.785ZM682 79H655.884C655.466 79 655.257 78.7344 655.257 78.2031C655.257 77.6406 655.321 77.3125 655.45 77.2188C655.611 77.0938 655.82 76.9844 656.078 76.8906C656.335 76.7656 656.656 76.5156 657.043 76.1406C657.461 75.7344 657.895 75.0156 658.346 73.9844C658.796 72.9219 659.022 71.8594 659.022 70.7969V10.4219C659.022 8.14062 658.25 6.25 656.705 4.75C656.576 4.625 656.303 4.46875 655.884 4.28125C655.466 4.09375 655.257 3.70313 655.257 3.10938C655.257 2.51562 655.466 2.21875 655.884 2.21875H681.758C684.493 2.21875 687.116 2.73438 689.626 3.76562C692.136 4.79688 694.261 6.15625 695.998 7.84375C699.828 11.5625 701.742 15.5625 701.742 19.8438C701.742 23.0938 700.906 25.875 699.232 28.1875C697.559 30.4688 694.807 32.9844 690.978 35.7344V36.7188C702.21 41.1875 707.825 48.125 707.825 57.5312C707.825 62.5312 705.523 67.2812 700.922 71.7812C698.766 73.9062 696.031 75.6406 692.716 76.9844C689.401 78.3281 685.829 79 682 79ZM742.001 2.21875H757.641C758.06 2.21875 758.269 2.5 758.269 3.0625C758.269 3.59375 758.188 3.92187 758.028 4.04688C757.899 4.14062 757.705 4.25 757.448 4.375C757.19 4.46875 756.853 4.71875 756.435 5.125C756.048 5.5 755.63 6.21875 755.179 7.28125C754.729 8.3125 754.504 9.35937 754.504 10.4219V70.7969C754.504 73.0781 755.276 74.9688 756.821 76.4688C756.949 76.5938 757.223 76.75 757.641 76.9375C758.06 77.125 758.269 77.5156 758.269 78.1094C758.269 78.7031 758.06 79 757.641 79H742.001C741.583 79 741.374 78.7344 741.374 78.2031C741.374 77.6406 741.438 77.3125 741.566 77.2188C741.728 77.0938 741.937 76.9844 742.195 76.8906C742.452 76.7656 742.773 76.5156 743.159 76.1406C743.579 75.7344 744.012 75.0156 744.463 73.9844C744.913 72.9219 745.139 71.8594 745.139 70.7969V10.4219C745.139 8.14062 744.366 6.25 742.822 4.75C742.693 4.625 742.419 4.46875 742.001 4.28125C741.583 4.09375 741.374 3.70313 741.374 3.10938C741.374 2.51562 741.583 2.21875 742.001 2.21875ZM825.366 71.0312C828.52 72.25 831.61 72.8594 834.634 72.8594C844.932 72.8594 853.122 69.9375 859.205 64.0938C865.319 58.2188 868.377 50.3438 868.377 40.4688C868.377 37.0625 867.476 33.4844 865.673 29.7344C863.903 25.9844 861.522 22.5625 858.529 19.4688C855.536 16.3437 851.868 13.7656 847.523 11.7344C843.211 9.70313 838.32 8.6875 832.849 8.6875C827.377 8.6875 822.213 10.0313 817.353 12.7188C812.494 15.4062 808.745 19.125 806.106 23.875C803.467 28.625 802.147 34.1406 802.147 40.4219C802.147 46.6719 804.497 52.75 809.195 58.6562C813.926 64.5625 819.316 68.6875 825.366 71.0312ZM805.141 68.8281C801.537 65.1719 798.673 60.8438 796.548 55.8438C794.424 50.8125 793.362 45.625 793.362 40.2812C793.362 34.9062 794.472 29.7969 796.693 24.9531C798.946 20.0781 801.906 15.875 805.575 12.3438C809.275 8.78125 813.62 5.9375 818.609 3.8125C823.629 1.6875 828.601 0.625 833.524 0.625C838.448 0.625 843.05 1.25 847.331 2.5C855.793 4.96875 862.841 9.57812 868.473 16.3281C874.137 23.0469 876.969 30.9531 876.969 40.0469C876.969 45.3906 875.971 50.5 873.976 55.375C871.981 60.25 869.181 64.5781 865.577 68.3594C862.005 72.1094 857.483 75.1094 852.012 77.3594C846.574 79.6094 840.83 80.7344 834.779 80.7344C828.729 80.7344 823.178 79.6562 818.126 77.5C813.073 75.3438 808.745 72.4531 805.141 68.8281Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_83_2">
            <rect
              width="2700"
              height="81"
              fill="white"
              transform="translate(-594)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="flex justify-center w-full">
      <div
        class="imgContainer w-36 h-36 mt-4 rounded-full bg-main-cyan overflow-hidden flex justify-center items-center"
      >
        <img src={MyImage} alt="personal" class="" />
      </div>
    </div>
    <div class="textData text-center mt-5 text-3xl">
      <p>Front-end Developer.</p>
    </div>
    <div class="textData w-full flex justify-center mt-4 text-2xl">
      <span class="lg:px-4 lg:w-3/5 text-center px-4">
        <p>
          I am a front end web developer with a passion for creating unique
          websites.
        </p>
        <br class="lg:hidden" />
        <p>
          I want to develop a creative website while also providing a unique
          experience to users.
        </p>
        <br class="lg:hidden" />

        <p class="">
          I look forward to working with an experienced team to gain my
          experience too.
        </p>
      </span>
    </div>
  </div>
  <div class="work w-full mt-20 sections">
    <div class="flex justify-start">
      <svg
        width="1512"
        height="81"
        viewBox="0 0 1512 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_83_6)">
          <path
            d="M-692 34.9999C-692 34.9999 288 34.9999 512.5 34.9999C540.858 34.9999 579.5 6.99992 579.5 6.99992L610.5 71.9999L637.5 7.99992L670.5 71.9999L697.5 6.99992C697.5 6.99992 751.8 4.05578 761 6.99992C773.5 11 780.53 21.8115 783 36C785.568 50.7536 770.5 70.4999 770.5 70.4999H804V6.99992L832 7.5L841.5 20L833.5 34L818.5 38.9999L834.5 54.4999L843.5 70.4999H870.5V34.9999H877L897.01 59.4999C897.01 59.4999 915 46.4999 939 59.4999C946.47 63.5483 967.5 70.4999 967.5 70.4999L2263 77.9999"
            stroke="#058ED9"
            stroke-width="5"
            class="pathWork opacity-0"
          />
          <path
            d="M638.406 15.0156H638.031C635.469 21.0469 631.406 31.2031 625.844 45.4844C620.312 59.7656 615.828 70.75 612.391 78.4375C612.234 78.8125 611.469 79 610.094 79C608.719 79 607.938 78.8125 607.75 78.4375C607.75 78.4375 605.391 73.5938 600.672 63.9062L588.391 37.375C588.391 37.375 584.25 28.0469 575.969 9.39062C574.75 6.54687 573.547 4.84375 572.359 4.28125C571.953 4.09375 571.75 3.70313 571.75 3.10938C571.75 2.51562 571.953 2.21875 572.359 2.21875H589.328C589.734 2.21875 589.938 2.5 589.938 3.0625C589.938 3.59375 589.859 3.92187 589.703 4.04688C589.578 4.14062 589.391 4.25 589.141 4.375C588.891 4.46875 588.688 4.59375 588.531 4.75C586.812 6.46875 586.328 8.40625 587.078 10.5625L610.844 63.5312H611.172L631.562 10.5625C631.625 10.3437 631.75 9.98438 631.938 9.48438C632.125 8.98437 632.25 8.64062 632.312 8.45312C632.375 8.23437 632.469 7.9375 632.594 7.5625C632.719 7.1875 632.781 6.90625 632.781 6.71875V5.96875C632.781 5.25 632.453 4.75 631.797 4.46875C631.141 4.15625 630.812 3.84375 630.812 3.53125C630.812 2.65625 631.016 2.21875 631.422 2.21875H646.938C647.344 2.21875 647.547 2.5 647.547 3.0625C647.547 3.59375 647.469 3.92187 647.312 4.04688C647.188 4.14062 647 4.25 646.75 4.375C646.5 4.46875 646.266 4.625 646.047 4.84375C645.859 5.03125 645.719 5.26562 645.625 5.54688C645.562 5.82812 645.578 6.1875 645.672 6.625C645.766 7.25 646.016 8.0625 646.422 9.0625L646.984 10.5625L670.75 63.5312H671.078L691.562 10.5625C692.312 8.40625 691.828 6.46875 690.109 4.75C689.984 4.625 689.719 4.46875 689.312 4.28125C688.906 4.09375 688.703 3.70313 688.703 3.10938C688.703 2.51562 688.906 2.21875 689.312 2.21875H704.078C704.484 2.21875 704.688 2.5 704.688 3.0625C704.688 3.59375 704.609 3.92187 704.453 4.04688C704.328 4.14062 704.141 4.25 703.891 4.375C702.859 4.84375 701.719 6.51563 700.469 9.39062C697.094 16.9844 692.422 28.4531 686.453 43.7969C680.484 59.1094 675.766 70.6562 672.297 78.4375C672.141 78.8125 671.375 79 670 79C668.625 79 667.844 78.8125 667.656 78.4375L656.969 56.3125L638.406 15.0156ZM736.656 71.0312C739.719 72.25 742.719 72.8594 745.656 72.8594C755.656 72.8594 763.609 69.9375 769.516 64.0938C775.453 58.2188 778.422 50.3438 778.422 40.4688C778.422 37.0625 777.547 33.4844 775.797 29.7344C774.078 25.9844 771.766 22.5625 768.859 19.4688C765.953 16.3437 762.391 13.7656 758.172 11.7344C753.984 9.70313 749.234 8.6875 743.922 8.6875C738.609 8.6875 733.594 10.0313 728.875 12.7188C724.156 15.4062 720.516 19.125 717.953 23.875C715.391 28.625 714.109 34.1406 714.109 40.4219C714.109 46.6719 716.391 52.75 720.953 58.6562C725.547 64.5625 730.781 68.6875 736.656 71.0312ZM717.016 68.8281C713.516 65.1719 710.734 60.8438 708.672 55.8438C706.609 50.8125 705.578 45.625 705.578 40.2812C705.578 34.9062 706.656 29.7969 708.812 24.9531C711 20.0781 713.875 15.875 717.438 12.3438C721.031 8.78125 725.25 5.9375 730.094 3.8125C734.969 1.6875 739.797 0.625 744.578 0.625C749.359 0.625 753.828 1.25 757.984 2.5C766.203 4.96875 773.047 9.57812 778.516 16.3281C784.016 23.0469 786.766 30.9531 786.766 40.0469C786.766 45.3906 785.797 50.5 783.859 55.375C781.922 60.25 779.203 64.5781 775.703 68.3594C772.234 72.1094 767.844 75.1094 762.531 77.3594C757.25 79.6094 751.672 80.7344 745.797 80.7344C739.922 80.7344 734.531 79.6562 729.625 77.5C724.719 75.3438 720.516 72.4531 717.016 68.8281ZM811.047 9.90625C810.391 9.90625 809.828 10.1406 809.359 10.6094C808.891 11.0469 808.656 11.5938 808.656 12.25V70.7969C808.656 73.0781 809.406 74.9688 810.906 76.4688C811.031 76.5938 811.297 76.75 811.703 76.9375C812.109 77.125 812.312 77.5156 812.312 78.1094C812.312 78.7031 812.109 79 811.703 79H796.516C796.109 79 795.906 78.7344 795.906 78.2031C795.906 77.6406 795.969 77.3125 796.094 77.2188C796.25 77.0938 796.453 76.9844 796.703 76.8906C796.953 76.7656 797.266 76.5156 797.641 76.1406C798.047 75.7344 798.469 75.0156 798.906 73.9844C799.344 72.9219 799.562 71.8594 799.562 70.7969V10.4219C799.562 8.14062 798.812 6.25 797.312 4.75C797.188 4.625 796.922 4.46875 796.516 4.28125C796.109 4.09375 795.906 3.71875 795.906 3.15625C795.906 2.59375 796.109 2.3125 796.516 2.3125H820.562C827.438 2.375 833.188 3.85938 837.812 6.76562C842.469 9.64062 844.797 14.3281 844.797 20.8281C844.797 28.4844 840.797 34.0938 832.797 37.6562C829.859 38.9688 827.625 39.7031 826.094 39.8594C824.562 39.9844 823.797 40.0938 823.797 40.1875L825.297 41.0312C825.922 41.4062 827.203 42.3594 829.141 43.8906C831.078 45.4219 833 47.1562 834.906 49.0938C836.812 51 839.078 53.6562 841.703 57.0625C844.328 60.4688 846.266 63.25 847.516 65.4062L851.359 72.25C852.766 74.8125 853.938 76.2188 854.875 76.4688C855.812 76.7188 856.281 77.2031 856.281 77.9219C856.281 78.6406 856.078 79 855.672 79H840.484C840.078 79 839.875 78.7344 839.875 78.2031C839.875 77.6406 839.938 77.3125 840.062 77.2188C840.219 77.0938 840.422 76.9844 840.672 76.8906C840.922 76.7656 841.125 76.6094 841.281 76.4219C841.469 76.2344 841.547 75.875 841.516 75.3438C841.516 74.7812 841.453 74.3438 841.328 74.0312C839.047 68.1562 835.938 62.5625 832 57.25C824.688 47.375 818.391 42.0625 813.109 41.3125C812.359 41.1875 811.984 41.1094 811.984 41.0781C811.922 40.5156 811.891 39.75 811.891 38.7812V35.9219C811.891 35.6094 812.047 35.4531 812.359 35.4531C820.047 35.4531 826.047 33.9062 830.359 30.8125C833.672 28.4688 835.328 25.3125 835.328 21.3438C835.328 17.375 833.734 14.4844 830.547 12.6719C827.359 10.8281 823.75 9.90625 819.719 9.90625H811.047ZM882.625 35.1719L912.25 71.8281C913.12 73.0156 914.09 74.0781 915.16 75.0156C916.22 75.9219 916.8 76.4219 916.89 76.5156C916.98 76.6094 917.23 76.75 917.64 76.9375C918.05 77.125 918.25 77.5156 918.25 78.1094C918.25 78.7031 918.05 79 917.64 79H900.67C900.27 79 900.06 78.7344 900.06 78.2031C900.06 77.6406 900.12 77.3125 900.25 77.2188C900.41 77.0938 900.61 76.9688 900.86 76.8438C902.02 76.3438 902.5 75.5938 902.31 74.5938C902.16 73.5625 901.48 72.25 900.3 70.6562L876.391 41.0781H875.594V70.7969C875.594 73.0781 876.344 74.9688 877.844 76.4688C877.969 76.5938 878.234 76.75 878.641 76.9375C879.047 77.125 879.25 77.5156 879.25 78.1094C879.25 78.7031 879.047 79 878.641 79H863.453C863.047 79 862.844 78.7344 862.844 78.2031C862.844 77.6406 862.906 77.3125 863.031 77.2188C863.188 77.0938 863.391 76.9844 863.641 76.8906C863.891 76.7656 864.203 76.5156 864.578 76.1406C864.984 75.7344 865.406 75.0156 865.844 73.9844C866.281 72.9219 866.5 71.8594 866.5 70.7969V10.4219C866.5 8.14062 865.75 6.25 864.25 4.75C864.125 4.625 863.859 4.46875 863.453 4.28125C863.047 4.09375 862.844 3.70313 862.844 3.10938C862.844 2.51562 863.047 2.21875 863.453 2.21875H878.641C879.047 2.21875 879.25 2.5 879.25 3.0625C879.25 3.59375 879.172 3.92187 879.016 4.04688C878.891 4.14062 878.703 4.25 878.453 4.375C878.203 4.46875 877.875 4.71875 877.469 5.125C877.094 5.5 876.688 6.21875 876.25 7.28125C875.812 8.3125 875.594 9.35937 875.594 10.4219V30.0156H876.391L897.62 9.76562C899.62 7.85937 900.69 6.82812 900.81 6.67188C901.66 5.67188 901.41 4.875 900.06 4.28125C899.66 4.09375 899.45 3.70313 899.45 3.10938C899.45 2.51562 899.66 2.21875 900.06 2.21875H914.83C915.23 2.21875 915.44 2.5 915.44 3.0625C915.44 3.625 915.39 3.96875 915.3 4.09375C915.23 4.1875 914.84 4.39062 914.12 4.70312C913.41 4.98438 912.25 5.95313 910.66 7.60938L882.625 34.4219V35.1719Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_83_6">
            <rect
              width="2700"
              height="81"
              fill="white"
              transform="translate(-594)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>

    <div class="textData text-center mt-5 text-xl">
      <p class="px-4">
        This is a list of some side projects I have created as practical
        practice.
      </p>
    </div>

    <div
      class="work-sect grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-5 md:gap-2 sm:grid-cols-2 justify-items-center"
    >
      <div class="projectOne relative">
        <div class="w-80 h-96 border-main-cyan rounded-lg border-2">
          <div
            class="rectIconName w-11/12 h-20 bg-main-cyan mx-auto my-4 rounded-lg flex justify-start items-center"
          >
            <div
              class="imgContainer w-16 h-16 bg-bgbg-white ml-2 rounded-full flex justify-center items-center"
            >
              <svg
                width="84"
                height="108"
                viewBox="0 0 84 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
              >
                <path
                  d="M9.62867 107.25C6.88386 107.25 4.59387 106.332 2.75871 104.497C0.923541 102.662 0.00397222 100.372 0 97.6273V33.456C0 30.7152 0.919568 28.4272 2.75871 26.592C4.59785 24.7569 6.88783 23.8373 9.62867 23.8333H20.8542V20.8542C20.8542 15.0627 22.882 10.1391 26.9376 6.08346C30.9933 2.02782 35.9168 0 41.7083 0C47.4998 0 52.4234 2.02782 56.479 6.08346C60.5347 10.1391 62.5625 15.0627 62.5625 20.8542V23.8333H73.794C76.5348 23.8333 78.8228 24.7529 80.658 26.592C82.4931 28.4312 83.4127 30.7212 83.4167 33.462V97.6273C83.4167 100.368 82.4971 102.658 80.658 104.497C78.8188 106.336 76.5308 107.254 73.794 107.25H9.62867ZM9.62867 101.292H73.794C74.7076 101.292 75.5477 100.91 76.3143 100.148C77.081 99.385 77.4623 98.5429 77.4583 97.6213V33.462C77.4583 32.5444 77.077 31.7023 76.3143 30.9357C75.5517 30.169 74.7096 29.7877 73.788 29.7917H62.5625V44.6875C62.5625 45.5376 62.2785 46.2466 61.7105 46.8146C61.1424 47.3827 60.4334 47.6667 59.5833 47.6667C58.7333 47.6667 58.0242 47.3827 57.4562 46.8146C56.8882 46.2466 56.6042 45.5376 56.6042 44.6875V29.7917H26.8125V44.6875C26.8125 45.5376 26.5285 46.2466 25.9605 46.8146C25.3924 47.3827 24.6834 47.6667 23.8333 47.6667C22.9833 47.6667 22.2742 47.3827 21.7062 46.8146C21.1382 46.2466 20.8542 45.5376 20.8542 44.6875V29.7917H9.62867C8.71108 29.7917 7.86897 30.173 7.10233 30.9357C6.33569 31.6983 5.95436 32.5404 5.95833 33.462V97.6273C5.95833 98.5409 6.33967 99.381 7.10233 100.148C7.865 100.914 8.70512 101.296 9.62271 101.292M26.8125 23.8333H56.6042V20.8542C56.6042 16.6595 55.1702 13.1282 52.3022 10.2603C49.4343 7.39231 45.903 5.95833 41.7083 5.95833C37.5137 5.95833 33.9824 7.39231 31.1144 10.2603C28.2465 13.1282 26.8125 16.6595 26.8125 20.8542V23.8333Z"
                  fill="#058ED9"
                />
              </svg>
            </div>
            <div class="">
              <div class="para">
                <p class="text-white ml-5 text-xl font-bold">E-commerce Site</p>
              </div>
            </div>
          </div>
          <div class="projectDisc px-4 text-xl">
            This is an e-commerce site where you can buy different products.
            This site uses Svelte, Supabase, and Tailwind CSS, which makes it a
            full-stack site.
            <div class="visit absolute bottom-5">
              <a href="https://e-commerce-try.vercel.app" target="_blank">
                <button
                  class="uppercase font-bold text-left transition-all text-xl"
                  id="eBtn"
                  >Visit Site<span class="text-nav-cyan">.</span>
                  <span class="eComClass opacity-0">
                    <svg
                      width="154"
                      height="28"
                      viewBox="0 0 154 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-auto -mt-6 h-6"
                    >
                      <path
                        d="M0 25.5H125L152.5 3"
                        stroke="#058ED9"
                        stroke-width="4"
                        class="eClass"
                      />
                      <path
                        d="M135 3H151V19"
                        stroke="#058ED9"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="eClass"
                      />
                    </svg>
                  </span>
                </button></a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="projectOne relative">
        <div class="w-80 h-96 border-main-cyan rounded-lg border-2">
          <div
            class="rectIconName w-11/12 h-20 bg-main-cyan mx-auto my-4 rounded-lg flex justify-start items-center"
          >
            <div
              class="imgContainer w-16 h-16 bg-bgbg-white ml-2 rounded-full flex justify-center items-center"
            >
              <svg
                width="124"
                height="127"
                viewBox="0 0 124 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
              >
                <path
                  d="M68.64 126.25C66.8373 126.25 65.3012 125.643 64.0315 124.429C62.7618 123.207 62.127 121.702 62.127 119.912C62.127 119.084 62.2657 118.289 62.543 117.526C62.8247 116.768 63.297 116.09 63.96 115.492L68.627 111.124L73.2875 115.492C73.9548 116.09 74.4272 116.775 74.7045 117.546C74.9818 118.317 75.1227 119.126 75.127 119.971C75.127 121.721 74.4965 123.205 73.2355 124.423C71.9745 125.641 70.4427 126.25 68.64 126.25ZM46.202 117.123L41.9965 112.924L58.552 96.3755L62.751 100.574L46.202 117.123ZM88.127 107.373L80.9965 100.25L88.127 93.1255L95.251 100.25L88.127 107.373ZM29.627 107.373L22.49 100.25L29.6205 93.1255L36.7445 100.25L29.627 107.373ZM32.5 84.5C23.4737 84.5 15.8015 81.3388 9.4835 75.0165C3.16117 68.6985 0 61.0263 0 52C0 43.5933 2.834 36.322 8.502 30.186C14.17 24.05 21.2658 20.5118 29.7895 19.5715C33.0135 13.4745 37.4205 8.68833 43.0105 5.213C48.6005 1.73767 54.8297 0 61.698 0C71.0667 0 79.1028 3.094 85.8065 9.282C92.5102 15.47 96.4123 23.1812 97.513 32.4155C105.486 32.8965 111.813 35.6698 116.493 40.7355C121.164 45.8055 123.5 51.74 123.5 58.539C123.5 65.7237 120.972 71.8467 115.915 76.908C110.862 81.9693 104.724 84.5 97.5 84.5H32.5ZM32.5 78H97.5C102.882 78 107.478 76.0955 111.287 72.2865C115.096 68.4775 117 63.882 117 58.5C117 53.118 115.096 48.5225 111.287 44.7135C107.478 40.9045 102.882 39 97.5 39H91V35.75C91 27.7073 88.1335 20.8217 82.4005 15.093C76.6675 9.36433 69.7775 6.5 61.7305 6.5C55.8805 6.5 50.5483 8.08817 45.734 11.2645C40.924 14.4452 37.2992 18.7243 34.8595 24.102L34.0925 26H32.175C25.103 26.247 19.058 28.8773 14.04 33.891C9.01333 38.909 6.5 44.9453 6.5 52C6.5 59.1803 9.03933 65.3098 14.118 70.3885C19.188 75.4628 25.3153 78 32.5 78Z"
                  fill="#058ED9"
                />
              </svg>
            </div>
            <p class="text-white ml-5 text-xl font-bold">Weather Site</p>
          </div>
          <div class="projectDisc px-4 text-xl">
            This website shows weather off different areas and also of your own
            location. This site uses HTML, CSS, JS, and API to display weather.
            <div class="visit absolute bottom-5">
              <a href="https://temp-cast.netlify.app" target="_blank">
                <button
                  class="uppercase font-bold text-left transition-all text-xl"
                  id="wBtn"
                  >Visit Site<span class="text-nav-cyan">.</span>
                  <span class="wComClass opacity-0">
                    <svg
                      width="154"
                      height="28"
                      viewBox="0 0 154 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-auto -mt-6 h-6"
                    >
                      <path
                        d="M0 25.5H125L152.5 3"
                        stroke="#058ED9"
                        stroke-width="4"
                        class="wClass"
                      />
                      <path
                        d="M135 3H151V19"
                        stroke="#058ED9"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="wClass"
                      />
                    </svg>
                  </span>
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="projectOne relative">
        <div class="w-80 h-96 border-main-cyan rounded-lg border-2">
          <div
            class="rectIconName w-11/12 h-20 bg-main-cyan mx-auto my-4 rounded-lg flex justify-start items-center"
          >
            <div
              class="imgContainer w-16 h-16 bg-bgbg-white ml-2 rounded-full flex justify-center items-center"
            >
              <svg
                width="103"
                height="116"
                viewBox="0 0 103 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
              >
                <path
                  d="M10.3693 115.5C7.49467 115.5 5.04778 114.49 3.02867 112.471C1.00956 110.452 0 108.007 0 105.137V23.1962C0 20.3301 1.00956 17.8854 3.02867 15.862C5.04778 13.8429 7.49467 12.8333 10.3693 12.8333H40.5277C39.9416 9.55656 40.7244 6.59847 42.8762 3.95908C45.0236 1.3197 47.8427 0 51.3333 0C54.9053 0 57.7671 1.3197 59.9188 3.95908C62.0706 6.59847 62.8128 9.55656 62.1454 12.8333H92.3037C95.1699 12.8333 97.6146 13.8429 99.638 15.862C101.657 17.8811 102.667 20.328 102.667 23.2027V105.137C102.667 108.003 101.657 110.448 99.638 112.471C97.6189 114.49 95.1741 115.5 92.3037 115.5H10.3693ZM10.3693 109.083H92.3037C93.2876 109.083 94.1924 108.673 95.018 107.851C95.8436 107.03 96.2543 106.123 96.25 105.131V23.2027C96.25 22.2145 95.8393 21.3076 95.018 20.482C94.1967 19.6564 93.2898 19.2457 92.2973 19.25H10.3693C9.38117 19.25 8.47428 19.6607 7.64867 20.482C6.82305 21.3033 6.41239 22.2102 6.41667 23.2027V105.137C6.41667 106.121 6.82733 107.026 7.64867 107.851C8.47 108.677 9.37475 109.088 10.3629 109.083M22.4583 91.5658H60.9583V85.1492H22.4583V91.5658ZM22.4583 67.375H80.2083V60.9583H22.4583V67.375ZM22.4583 43.1842H80.2083V36.7675H22.4583V43.1842ZM51.3333 15.6759C52.7236 15.6759 53.8743 15.2225 54.7855 14.3156C55.6967 13.4087 56.1501 12.258 56.1458 10.8634C56.1416 9.46886 55.686 8.32028 54.7791 7.41767C53.8722 6.51505 52.7236 6.05733 51.3333 6.0445C49.9431 6.03167 48.7945 6.48725 47.8876 7.41125C46.9807 8.33525 46.5251 9.48383 46.5208 10.857C46.5166 12.2302 46.9721 13.3809 47.8876 14.3092C48.803 15.2374 49.9516 15.6973 51.3333 15.6759Z"
                  fill="#058ED9"
                />
              </svg>
            </div>
            <p class="text-white ml-5 text-xl font-bold">Assignment Site</p>
          </div>
          <div class="projectDisc px-4 text-xl">
            This is an assignment site. This site uses HTML, CSS, and JS, which
            provide assignments to college students.
            <div class="visit absolute bottom-5">
              <a href="https://dochoster.netlify.app" target="_blank">
                <button
                  class="uppercase font-bold text-left transition-all text-xl"
                  id="aBtn"
                  >Visit Site<span class="text-nav-cyan">.</span>
                </button>
                <span class="aComClass opacity-0">
                  <svg
                    width="154"
                    height="28"
                    viewBox="0 0 154 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-auto -mt-6 h-6"
                  >
                    <path
                      d="M0 25.5H125L152.5 3"
                      stroke="#058ED9"
                      stroke-width="4"
                      class="aClass"
                    />
                    <path
                      d="M135 3H151V19"
                      stroke="#058ED9"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="aClass"
                    />
                  </svg>
                </span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
