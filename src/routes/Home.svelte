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

K
<main>
  <div
    class="relative top-36 sm:top-28 md:top-28 lg:top-28 ml-5 sm:ml-8 md:ml-10 lg:ml-14 flex"
  >
    <div
      class="para text-3xl leading-normal sm:text-5xl sm:leading-normal md:text-3xl md:leading-normal lg:text-6xl lg:leading-normal"
    >
      <div class="flex">
        <p>{greeting}</p>
        <div class="rotHand ml-2">👋🏼</div>
        ,
      </div>
      <p class=" mt-9 w-80 sm:w-96 sm:mt-5 lg:w-2/4">I Am Bhavya Panchal,</p>
      <p>A Web Developer.</p>
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
            stroke="#44ff"
            stroke-width="3"
            class="path-arr"
          />
          <path
            d="M214 38H238V15.5"
            stroke="#44ff"
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
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M6 926L690.747 1433L1361 926"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M7 562.5L692 55L1362.5 562.5"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M5 874L690.253 1381L1361 874"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M6.5 614.5L691.5 107L1362 614.5"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M5 822L689.747 1329L1360 822"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M6 666.5L691 159L1361.5 666.5"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M4 770L689.253 1277L1360 770"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M5.5 718.5L690.5 211L1361 718.5"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M4 718L688.747 1225L1359 718"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M5 770.5L690 263L1360.5 770.5"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M3 666L688.253 1173L1359 666"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M4.5 822.5L689.5 315L1360 822.5"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M3 614L687.747 1121L1358 614"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M4 874.5L689 367L1359.5 874.5"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M2 562L687.253 1069L1358 562"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M3.5 926.5L688.5 419L1359 926.5"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
      <path
        d="M2 510L686.747 1017L1357 510"
        stroke="#44ff"
        stroke-width="4"
        class="paths-home"
      />
    </svg>
  </div>

  <div class="bio w-full mt-72 sections" id="section-next">
    <div class="flex justify-start">
      <svg
        width="2700"
        height="81"
        viewBox="0 0 1728 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-896 44.5C-896 44.5 446.932 44.5 703.352 44.5C735.79 44.5 768.744 6.5 768.744 6.5H857.821V74H922.698H963.89C963.89 74 1009.14 6.49999 1046.27 6.5C1237.3 6.50005 2407 6.5 2407 6.5"
          stroke="#4444FF"
          stroke-width="5"
          class="pathBio opacity-0"
        />
        <path
          d="M791.785 71.3594C794.167 71.3594 796.323 70.8281 798.254 69.7656C800.184 68.6719 801.665 67.5938 802.695 66.5312C805.076 64.0625 806.267 61.0938 806.267 57.625C806.267 52.1875 804.432 48.0469 800.764 45.2031C797.095 42.3281 792.155 40.8906 785.944 40.8906H779.476C779.058 40.8906 778.848 40.4531 778.848 39.5781V34.2812C778.848 33.4062 779.058 32.9688 779.476 32.9688H785.944C790.997 32.9688 794.698 31.6719 797.047 29.0781C799.397 26.4844 800.571 23.6875 800.571 20.6875C800.571 18.8125 800.216 17.1719 799.509 15.7656C798.833 14.3281 797.723 13.0625 796.179 11.9688C794.666 10.8438 793.105 10.1719 791.496 9.95312L790.433 9.8125H779.138C778.398 9.8125 777.754 10.0469 777.208 10.5156C776.661 10.9531 776.387 11.5156 776.387 12.2031V68.9688C776.387 69.6562 776.661 70.2344 777.208 70.7031C777.754 71.1406 778.398 71.3594 779.138 71.3594H791.785ZM790 79H763.884C763.466 79 763.257 78.7344 763.257 78.2031C763.257 77.6406 763.321 77.3125 763.45 77.2188C763.611 77.0938 763.82 76.9844 764.078 76.8906C764.335 76.7656 764.656 76.5156 765.043 76.1406C765.461 75.7344 765.895 75.0156 766.346 73.9844C766.796 72.9219 767.022 71.8594 767.022 70.7969V10.4219C767.022 8.14062 766.25 6.25 764.705 4.75C764.576 4.625 764.303 4.46875 763.884 4.28125C763.466 4.09375 763.257 3.70313 763.257 3.10938C763.257 2.51562 763.466 2.21875 763.884 2.21875H789.758C792.493 2.21875 795.116 2.73438 797.626 3.76562C800.136 4.79688 802.261 6.15625 803.998 7.84375C807.828 11.5625 809.742 15.5625 809.742 19.8438C809.742 23.0938 808.906 25.875 807.232 28.1875C805.559 30.4688 802.807 32.9844 798.978 35.7344V36.7188C810.21 41.1875 815.825 48.125 815.825 57.5312C815.825 62.5312 813.523 67.2812 808.922 71.7812C806.766 73.9062 804.031 75.6406 800.716 76.9844C797.401 78.3281 793.829 79 790 79ZM850.001 2.21875H865.641C866.06 2.21875 866.269 2.5 866.269 3.0625C866.269 3.59375 866.188 3.92187 866.028 4.04688C865.899 4.14062 865.705 4.25 865.448 4.375C865.19 4.46875 864.853 4.71875 864.435 5.125C864.048 5.5 863.63 6.21875 863.179 7.28125C862.729 8.3125 862.504 9.35937 862.504 10.4219V70.7969C862.504 73.0781 863.276 74.9688 864.821 76.4688C864.949 76.5938 865.223 76.75 865.641 76.9375C866.06 77.125 866.269 77.5156 866.269 78.1094C866.269 78.7031 866.06 79 865.641 79H850.001C849.583 79 849.374 78.7344 849.374 78.2031C849.374 77.6406 849.438 77.3125 849.566 77.2188C849.728 77.0938 849.937 76.9844 850.195 76.8906C850.452 76.7656 850.773 76.5156 851.159 76.1406C851.579 75.7344 852.012 75.0156 852.463 73.9844C852.913 72.9219 853.139 71.8594 853.139 70.7969V10.4219C853.139 8.14062 852.366 6.25 850.822 4.75C850.693 4.625 850.419 4.46875 850.001 4.28125C849.583 4.09375 849.374 3.70313 849.374 3.10938C849.374 2.51562 849.583 2.21875 850.001 2.21875ZM933.366 71.0312C936.52 72.25 939.61 72.8594 942.634 72.8594C952.932 72.8594 961.122 69.9375 967.205 64.0938C973.319 58.2188 976.377 50.3438 976.377 40.4688C976.377 37.0625 975.476 33.4844 973.673 29.7344C971.903 25.9844 969.522 22.5625 966.529 19.4688C963.536 16.3437 959.868 13.7656 955.523 11.7344C951.211 9.70313 946.32 8.6875 940.849 8.6875C935.377 8.6875 930.213 10.0313 925.353 12.7188C920.494 15.4062 916.745 19.125 914.106 23.875C911.467 28.625 910.147 34.1406 910.147 40.4219C910.147 46.6719 912.497 52.75 917.195 58.6562C921.926 64.5625 927.316 68.6875 933.366 71.0312ZM913.141 68.8281C909.537 65.1719 906.673 60.8438 904.548 55.8438C902.424 50.8125 901.362 45.625 901.362 40.2812C901.362 34.9062 902.472 29.7969 904.693 24.9531C906.946 20.0781 909.906 15.875 913.575 12.3438C917.275 8.78125 921.62 5.9375 926.609 3.8125C931.629 1.6875 936.601 0.625 941.524 0.625C946.448 0.625 951.05 1.25 955.331 2.5C963.793 4.96875 970.841 9.57812 976.473 16.3281C982.137 23.0469 984.969 30.9531 984.969 40.0469C984.969 45.3906 983.971 50.5 981.976 55.375C979.981 60.25 977.181 64.5781 973.577 68.3594C970.005 72.1094 965.483 75.1094 960.012 77.3594C954.574 79.6094 948.83 80.7344 942.779 80.7344C936.729 80.7344 931.178 79.6562 926.126 77.5C921.073 75.3438 916.745 72.4531 913.141 68.8281Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="flex justify-center w-full">
      <div
        class="imgContainer w-36 h-36 mt-4 rounded-full bg-main-cyan overflow-hidden flex justify-center items-center"
      >
        <img src={MyImage} alt="" class="" />
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
        width="2700"
        height="81"
        viewBox="0 0 1728 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-584 35C-584 35 396 35 620.5 35C648.858 35 687.5 7 687.5 7L718 70.5L744 7L777.5 70.5L805.5 7H869L893 35L878.5 70.5H912V7H942.5L950.5 20L942.5 35L926.5 39L942.5 54.5L950.5 70.5H978.5V35H985L1005.01 59.5C1005.01 59.5 1023 46.5 1047 59.5C1054.47 63.5484 1075.5 70.5 1075.5 70.5L2371 78"
          stroke="#4444FF"
          stroke-width="5"
          class="pathWork opacity-0"
        />
        <path
          d="M746.406 15.0156H746.031C743.469 21.0469 739.406 31.2031 733.844 45.4844C728.312 59.7656 723.828 70.75 720.391 78.4375C720.234 78.8125 719.469 79 718.094 79C716.719 79 715.938 78.8125 715.75 78.4375C715.75 78.4375 713.391 73.5938 708.672 63.9062L696.391 37.375C696.391 37.375 692.25 28.0469 683.969 9.39062C682.75 6.54687 681.547 4.84375 680.359 4.28125C679.953 4.09375 679.75 3.70313 679.75 3.10938C679.75 2.51562 679.953 2.21875 680.359 2.21875H697.328C697.734 2.21875 697.938 2.5 697.938 3.0625C697.938 3.59375 697.859 3.92187 697.703 4.04688C697.578 4.14062 697.391 4.25 697.141 4.375C696.891 4.46875 696.688 4.59375 696.531 4.75C694.812 6.46875 694.328 8.40625 695.078 10.5625L718.844 63.5312H719.172L739.562 10.5625C739.625 10.3437 739.75 9.98438 739.938 9.48438C740.125 8.98437 740.25 8.64062 740.312 8.45312C740.375 8.23437 740.469 7.9375 740.594 7.5625C740.719 7.1875 740.781 6.90625 740.781 6.71875V5.96875C740.781 5.25 740.453 4.75 739.797 4.46875C739.141 4.15625 738.812 3.84375 738.812 3.53125C738.812 2.65625 739.016 2.21875 739.422 2.21875H754.938C755.344 2.21875 755.547 2.5 755.547 3.0625C755.547 3.59375 755.469 3.92187 755.312 4.04688C755.188 4.14062 755 4.25 754.75 4.375C754.5 4.46875 754.266 4.625 754.047 4.84375C753.859 5.03125 753.719 5.26562 753.625 5.54688C753.562 5.82812 753.578 6.1875 753.672 6.625C753.766 7.25 754.016 8.0625 754.422 9.0625L754.984 10.5625L778.75 63.5312H779.078L799.562 10.5625C800.312 8.40625 799.828 6.46875 798.109 4.75C797.984 4.625 797.719 4.46875 797.312 4.28125C796.906 4.09375 796.703 3.70313 796.703 3.10938C796.703 2.51562 796.906 2.21875 797.312 2.21875H812.078C812.484 2.21875 812.688 2.5 812.688 3.0625C812.688 3.59375 812.609 3.92187 812.453 4.04688C812.328 4.14062 812.141 4.25 811.891 4.375C810.859 4.84375 809.719 6.51563 808.469 9.39062C805.094 16.9844 800.422 28.4531 794.453 43.7969C788.484 59.1094 783.766 70.6562 780.297 78.4375C780.141 78.8125 779.375 79 778 79C776.625 79 775.844 78.8125 775.656 78.4375L764.969 56.3125L746.406 15.0156ZM844.656 71.0312C847.719 72.25 850.719 72.8594 853.656 72.8594C863.656 72.8594 871.609 69.9375 877.516 64.0938C883.453 58.2188 886.422 50.3438 886.422 40.4688C886.422 37.0625 885.547 33.4844 883.797 29.7344C882.078 25.9844 879.766 22.5625 876.859 19.4688C873.953 16.3437 870.391 13.7656 866.172 11.7344C861.984 9.70313 857.234 8.6875 851.922 8.6875C846.609 8.6875 841.594 10.0313 836.875 12.7188C832.156 15.4062 828.516 19.125 825.953 23.875C823.391 28.625 822.109 34.1406 822.109 40.4219C822.109 46.6719 824.391 52.75 828.953 58.6562C833.547 64.5625 838.781 68.6875 844.656 71.0312ZM825.016 68.8281C821.516 65.1719 818.734 60.8438 816.672 55.8438C814.609 50.8125 813.578 45.625 813.578 40.2812C813.578 34.9062 814.656 29.7969 816.812 24.9531C819 20.0781 821.875 15.875 825.438 12.3438C829.031 8.78125 833.25 5.9375 838.094 3.8125C842.969 1.6875 847.797 0.625 852.578 0.625C857.359 0.625 861.828 1.25 865.984 2.5C874.203 4.96875 881.047 9.57812 886.516 16.3281C892.016 23.0469 894.766 30.9531 894.766 40.0469C894.766 45.3906 893.797 50.5 891.859 55.375C889.922 60.25 887.203 64.5781 883.703 68.3594C880.234 72.1094 875.844 75.1094 870.531 77.3594C865.25 79.6094 859.672 80.7344 853.797 80.7344C847.922 80.7344 842.531 79.6562 837.625 77.5C832.719 75.3438 828.516 72.4531 825.016 68.8281ZM919.047 9.90625C918.391 9.90625 917.828 10.1406 917.359 10.6094C916.891 11.0469 916.656 11.5938 916.656 12.25V70.7969C916.656 73.0781 917.406 74.9688 918.906 76.4688C919.031 76.5938 919.297 76.75 919.703 76.9375C920.109 77.125 920.312 77.5156 920.312 78.1094C920.312 78.7031 920.109 79 919.703 79H904.516C904.109 79 903.906 78.7344 903.906 78.2031C903.906 77.6406 903.969 77.3125 904.094 77.2188C904.25 77.0938 904.453 76.9844 904.703 76.8906C904.953 76.7656 905.266 76.5156 905.641 76.1406C906.047 75.7344 906.469 75.0156 906.906 73.9844C907.344 72.9219 907.562 71.8594 907.562 70.7969V10.4219C907.562 8.14062 906.812 6.25 905.312 4.75C905.188 4.625 904.922 4.46875 904.516 4.28125C904.109 4.09375 903.906 3.71875 903.906 3.15625C903.906 2.59375 904.109 2.3125 904.516 2.3125H928.562C935.438 2.375 941.188 3.85938 945.812 6.76562C950.469 9.64062 952.797 14.3281 952.797 20.8281C952.797 28.4844 948.797 34.0938 940.797 37.6562C937.859 38.9688 935.625 39.7031 934.094 39.8594C932.562 39.9844 931.797 40.0938 931.797 40.1875L933.297 41.0312C933.922 41.4062 935.203 42.3594 937.141 43.8906C939.078 45.4219 941 47.1562 942.906 49.0938C944.812 51 947.078 53.6562 949.703 57.0625C952.328 60.4688 954.266 63.25 955.516 65.4062L959.359 72.25C960.766 74.8125 961.938 76.2188 962.875 76.4688C963.812 76.7188 964.281 77.2031 964.281 77.9219C964.281 78.6406 964.078 79 963.672 79H948.484C948.078 79 947.875 78.7344 947.875 78.2031C947.875 77.6406 947.938 77.3125 948.062 77.2188C948.219 77.0938 948.422 76.9844 948.672 76.8906C948.922 76.7656 949.125 76.6094 949.281 76.4219C949.469 76.2344 949.547 75.875 949.516 75.3438C949.516 74.7812 949.453 74.3438 949.328 74.0312C947.047 68.1562 943.938 62.5625 940 57.25C932.688 47.375 926.391 42.0625 921.109 41.3125C920.359 41.1875 919.984 41.1094 919.984 41.0781C919.922 40.5156 919.891 39.75 919.891 38.7812V35.9219C919.891 35.6094 920.047 35.4531 920.359 35.4531C928.047 35.4531 934.047 33.9062 938.359 30.8125C941.672 28.4688 943.328 25.3125 943.328 21.3438C943.328 17.375 941.734 14.4844 938.547 12.6719C935.359 10.8281 931.75 9.90625 927.719 9.90625H919.047ZM990.625 35.1719L1020.25 71.8281C1021.12 73.0156 1022.09 74.0781 1023.16 75.0156C1024.22 75.9219 1024.8 76.4219 1024.89 76.5156C1024.98 76.6094 1025.23 76.75 1025.64 76.9375C1026.05 77.125 1026.25 77.5156 1026.25 78.1094C1026.25 78.7031 1026.05 79 1025.64 79H1008.67C1008.27 79 1008.06 78.7344 1008.06 78.2031C1008.06 77.6406 1008.12 77.3125 1008.25 77.2188C1008.41 77.0938 1008.61 76.9688 1008.86 76.8438C1010.02 76.3438 1010.5 75.5938 1010.31 74.5938C1010.16 73.5625 1009.48 72.25 1008.3 70.6562L984.391 41.0781H983.594V70.7969C983.594 73.0781 984.344 74.9688 985.844 76.4688C985.969 76.5938 986.234 76.75 986.641 76.9375C987.047 77.125 987.25 77.5156 987.25 78.1094C987.25 78.7031 987.047 79 986.641 79H971.453C971.047 79 970.844 78.7344 970.844 78.2031C970.844 77.6406 970.906 77.3125 971.031 77.2188C971.188 77.0938 971.391 76.9844 971.641 76.8906C971.891 76.7656 972.203 76.5156 972.578 76.1406C972.984 75.7344 973.406 75.0156 973.844 73.9844C974.281 72.9219 974.5 71.8594 974.5 70.7969V10.4219C974.5 8.14062 973.75 6.25 972.25 4.75C972.125 4.625 971.859 4.46875 971.453 4.28125C971.047 4.09375 970.844 3.70313 970.844 3.10938C970.844 2.51562 971.047 2.21875 971.453 2.21875H986.641C987.047 2.21875 987.25 2.5 987.25 3.0625C987.25 3.59375 987.172 3.92187 987.016 4.04688C986.891 4.14062 986.703 4.25 986.453 4.375C986.203 4.46875 985.875 4.71875 985.469 5.125C985.094 5.5 984.688 6.21875 984.25 7.28125C983.812 8.3125 983.594 9.35937 983.594 10.4219V30.0156H984.391L1005.62 9.76562C1007.62 7.85937 1008.69 6.82812 1008.81 6.67188C1009.66 5.67188 1009.41 4.875 1008.06 4.28125C1007.66 4.09375 1007.45 3.70313 1007.45 3.10938C1007.45 2.51562 1007.66 2.21875 1008.06 2.21875H1022.83C1023.23 2.21875 1023.44 2.5 1023.44 3.0625C1023.44 3.625 1023.39 3.96875 1023.3 4.09375C1023.23 4.1875 1022.84 4.39062 1022.12 4.70312C1021.41 4.98438 1020.25 5.95313 1018.66 7.60938L990.625 34.4219V35.1719Z"
          fill="black"
        />
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
                  fill="#44ff"
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
                        stroke="#44ff"
                        stroke-width="4"
                        class="eClass"
                      />
                      <path
                        d="M135 3H151V19"
                        stroke="#44ff"
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
                  fill="#44ff"
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
                        stroke="#44ff"
                        stroke-width="4"
                        class="wClass"
                      />
                      <path
                        d="M135 3H151V19"
                        stroke="#44ff"
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
                  fill="#44ff"
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
                      stroke="#44ff"
                      stroke-width="4"
                      class="aClass"
                    />
                    <path
                      d="M135 3H151V19"
                      stroke="#44ff"
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
