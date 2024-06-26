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

    const paths = document.querySelectorAll(".paths-home");

    // Animate stroke of each path
    paths.forEach((path, index) => {
      gsap.fromTo(
        path,
        {
          // Set initial stroke-dasharray to the length of the path
          "stroke-dasharray": path.getTotalLength(),
          "stroke-dashoffset": path.getTotalLength(),
        },
        {
          // Animate stroke-dashoffset to 0
          "stroke-dashoffset": 0,
          duration: 1 + index * 2, // Adjust duration for staggered effect
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
            // Set initial stroke-dasharray to the length of the path
            "stroke-dasharray": path.getTotalLength(),
            "stroke-dashoffset": path.getTotalLength(),
          },
          {
            // Animate stroke-dashoffset to 0
            "stroke-dashoffset": 0,
            duration: 0.5 + index * 0.1, // Adjust duration for staggered effect
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
        transformOrigin: "bottom right", // Set the transform origin to bottom center
        duration: 0.5,
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Yoyo effect (back and forth)
        ease: "power1.inOut", // Easing function
        delay: 1, // Initial delay before animation starts
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
      <p>I Am Bhavya Panchal .</p>
      <p>I Am Web Developer.</p>
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
      class="w-2/5 h-auto absolute right-10 top-0 md:block lg:block hidden"
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
        width="1678"
        height="81"
        viewBox="0 0 1678 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class=""
      >
        <path
          d="M0 44.5C0 44.5 434 44.5 683 44.5C714.5 44.5 746.5 6.5 746.5 6.5H833V74H896H936C936 74 979.942 6.49999 1016 6.5C1201.5 6.50005 1677.5 6.5 1677.5 6.5"
          stroke="#44ff"
          stroke-width="5"
          class="pathBio opacity-0"
        />
        <path
          d="M768.875 71.3594C771.188 71.3594 773.281 70.8281 775.156 69.7656C777.031 68.6719 778.469 67.5938 779.469 66.5312C781.781 64.0625 782.938 61.0938 782.938 57.625C782.938 52.1875 781.156 48.0469 777.594 45.2031C774.031 42.3281 769.234 40.8906 763.203 40.8906H756.922C756.516 40.8906 756.312 40.4531 756.312 39.5781V34.2812C756.312 33.4062 756.516 32.9688 756.922 32.9688H763.203C768.109 32.9688 771.703 31.6719 773.984 29.0781C776.266 26.4844 777.406 23.6875 777.406 20.6875C777.406 18.8125 777.062 17.1719 776.375 15.7656C775.719 14.3281 774.641 13.0625 773.141 11.9688C771.672 10.8438 770.156 10.1719 768.594 9.95312L767.562 9.8125H756.594C755.875 9.8125 755.25 10.0469 754.719 10.5156C754.188 10.9531 753.922 11.5156 753.922 12.2031V68.9688C753.922 69.6562 754.188 70.2344 754.719 70.7031C755.25 71.1406 755.875 71.3594 756.594 71.3594H768.875ZM767.141 79H741.781C741.375 79 741.172 78.7344 741.172 78.2031C741.172 77.6406 741.234 77.3125 741.359 77.2188C741.516 77.0938 741.719 76.9844 741.969 76.8906C742.219 76.7656 742.531 76.5156 742.906 76.1406C743.312 75.7344 743.734 75.0156 744.172 73.9844C744.609 72.9219 744.828 71.8594 744.828 70.7969V10.4219C744.828 8.14062 744.078 6.25 742.578 4.75C742.453 4.625 742.188 4.46875 741.781 4.28125C741.375 4.09375 741.172 3.70313 741.172 3.10938C741.172 2.51562 741.375 2.21875 741.781 2.21875H766.906C769.562 2.21875 772.109 2.73438 774.547 3.76562C776.984 4.79688 779.047 6.15625 780.734 7.84375C784.453 11.5625 786.312 15.5625 786.312 19.8438C786.312 23.0938 785.5 25.875 783.875 28.1875C782.25 30.4688 779.578 32.9844 775.859 35.7344V36.7188C786.766 41.1875 792.219 48.125 792.219 57.5312C792.219 62.5312 789.984 67.2812 785.516 71.7812C783.422 73.9062 780.766 75.6406 777.547 76.9844C774.328 78.3281 770.859 79 767.141 79ZM825.406 2.21875H840.594C841 2.21875 841.203 2.5 841.203 3.0625C841.203 3.59375 841.125 3.92187 840.969 4.04688C840.844 4.14062 840.656 4.25 840.406 4.375C840.156 4.46875 839.828 4.71875 839.422 5.125C839.047 5.5 838.641 6.21875 838.203 7.28125C837.766 8.3125 837.547 9.35937 837.547 10.4219V70.7969C837.547 73.0781 838.297 74.9688 839.797 76.4688C839.922 76.5938 840.188 76.75 840.594 76.9375C841 77.125 841.203 77.5156 841.203 78.1094C841.203 78.7031 841 79 840.594 79H825.406C825 79 824.797 78.7344 824.797 78.2031C824.797 77.6406 824.859 77.3125 824.984 77.2188C825.141 77.0938 825.344 76.9844 825.594 76.8906C825.844 76.7656 826.156 76.5156 826.531 76.1406C826.938 75.7344 827.359 75.0156 827.797 73.9844C828.234 72.9219 828.453 71.8594 828.453 70.7969V10.4219C828.453 8.14062 827.703 6.25 826.203 4.75C826.078 4.625 825.812 4.46875 825.406 4.28125C825 4.09375 824.797 3.70313 824.797 3.10938C824.797 2.51562 825 2.21875 825.406 2.21875ZM906.359 71.0312C909.422 72.25 912.422 72.8594 915.359 72.8594C925.359 72.8594 933.312 69.9375 939.219 64.0938C945.156 58.2188 948.125 50.3438 948.125 40.4688C948.125 37.0625 947.25 33.4844 945.5 29.7344C943.781 25.9844 941.469 22.5625 938.562 19.4688C935.656 16.3437 932.094 13.7656 927.875 11.7344C923.688 9.70313 918.938 8.6875 913.625 8.6875C908.312 8.6875 903.297 10.0313 898.578 12.7188C893.859 15.4062 890.219 19.125 887.656 23.875C885.094 28.625 883.812 34.1406 883.812 40.4219C883.812 46.6719 886.094 52.75 890.656 58.6562C895.25 64.5625 900.484 68.6875 906.359 71.0312ZM886.719 68.8281C883.219 65.1719 880.438 60.8438 878.375 55.8438C876.312 50.8125 875.281 45.625 875.281 40.2812C875.281 34.9062 876.359 29.7969 878.516 24.9531C880.703 20.0781 883.578 15.875 887.141 12.3438C890.734 8.78125 894.953 5.9375 899.797 3.8125C904.672 1.6875 909.5 0.625 914.281 0.625C919.062 0.625 923.531 1.25 927.688 2.5C935.906 4.96875 942.75 9.57812 948.219 16.3281C953.719 23.0469 956.469 30.9531 956.469 40.0469C956.469 45.3906 955.5 50.5 953.562 55.375C951.625 60.25 948.906 64.5781 945.406 68.3594C941.938 72.1094 937.547 75.1094 932.234 77.3594C926.953 79.6094 921.375 80.7344 915.5 80.7344C909.625 80.7344 904.234 79.6562 899.328 77.5C894.422 75.3438 890.219 72.4531 886.719 68.8281Z"
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
    <div class="textData text-center mt-4 text-3xl">
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
        width="1537"
        height="81"
        viewBox="0 0 1537 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 35C0 35 301 35 525.5 35C553.858 35 592.5 7 592.5 7L623 70.5L649 7L682.5 70.5L710.5 7H774L798 35L783.5 70.5H817V7H847.5L855.5 20L847.5 35L831.5 39L847.5 54.5L855.5 70.5H883.5V35H890L910.014 59.5C910.014 59.5 928 46.5 952 59.5C959.474 63.5484 980.5 70.5 980.5 70.5H1537"
          stroke="#44ff"
          stroke-width="5"
          class="pathWork opacity-0"
        />
        <path
          d="M651.406 15.0156H651.031C648.469 21.0469 644.406 31.2031 638.844 45.4844C633.312 59.7656 628.828 70.75 625.391 78.4375C625.234 78.8125 624.469 79 623.094 79C621.719 79 620.938 78.8125 620.75 78.4375C620.75 78.4375 618.391 73.5938 613.672 63.9062L601.391 37.375C601.391 37.375 597.25 28.0469 588.969 9.39062C587.75 6.54687 586.547 4.84375 585.359 4.28125C584.953 4.09375 584.75 3.70313 584.75 3.10938C584.75 2.51562 584.953 2.21875 585.359 2.21875H602.328C602.734 2.21875 602.938 2.5 602.938 3.0625C602.938 3.59375 602.859 3.92187 602.703 4.04688C602.578 4.14062 602.391 4.25 602.141 4.375C601.891 4.46875 601.688 4.59375 601.531 4.75C599.812 6.46875 599.328 8.40625 600.078 10.5625L623.844 63.5312H624.172L644.562 10.5625C644.625 10.3437 644.75 9.98438 644.938 9.48438C645.125 8.98437 645.25 8.64062 645.312 8.45312C645.375 8.23437 645.469 7.9375 645.594 7.5625C645.719 7.1875 645.781 6.90625 645.781 6.71875V5.96875C645.781 5.25 645.453 4.75 644.797 4.46875C644.141 4.15625 643.812 3.84375 643.812 3.53125C643.812 2.65625 644.016 2.21875 644.422 2.21875H659.938C660.344 2.21875 660.547 2.5 660.547 3.0625C660.547 3.59375 660.469 3.92187 660.312 4.04688C660.188 4.14062 660 4.25 659.75 4.375C659.5 4.46875 659.266 4.625 659.047 4.84375C658.859 5.03125 658.719 5.26562 658.625 5.54688C658.562 5.82812 658.578 6.1875 658.672 6.625C658.766 7.25 659.016 8.0625 659.422 9.0625L659.984 10.5625L683.75 63.5312H684.078L704.562 10.5625C705.312 8.40625 704.828 6.46875 703.109 4.75C702.984 4.625 702.719 4.46875 702.312 4.28125C701.906 4.09375 701.703 3.70313 701.703 3.10938C701.703 2.51562 701.906 2.21875 702.312 2.21875H717.078C717.484 2.21875 717.688 2.5 717.688 3.0625C717.688 3.59375 717.609 3.92187 717.453 4.04688C717.328 4.14062 717.141 4.25 716.891 4.375C715.859 4.84375 714.719 6.51563 713.469 9.39062C710.094 16.9844 705.422 28.4531 699.453 43.7969C693.484 59.1094 688.766 70.6562 685.297 78.4375C685.141 78.8125 684.375 79 683 79C681.625 79 680.844 78.8125 680.656 78.4375L669.969 56.3125L651.406 15.0156ZM749.656 71.0312C752.719 72.25 755.719 72.8594 758.656 72.8594C768.656 72.8594 776.609 69.9375 782.516 64.0938C788.453 58.2188 791.422 50.3438 791.422 40.4688C791.422 37.0625 790.547 33.4844 788.797 29.7344C787.078 25.9844 784.766 22.5625 781.859 19.4688C778.953 16.3437 775.391 13.7656 771.172 11.7344C766.984 9.70313 762.234 8.6875 756.922 8.6875C751.609 8.6875 746.594 10.0313 741.875 12.7188C737.156 15.4062 733.516 19.125 730.953 23.875C728.391 28.625 727.109 34.1406 727.109 40.4219C727.109 46.6719 729.391 52.75 733.953 58.6562C738.547 64.5625 743.781 68.6875 749.656 71.0312ZM730.016 68.8281C726.516 65.1719 723.734 60.8438 721.672 55.8438C719.609 50.8125 718.578 45.625 718.578 40.2812C718.578 34.9062 719.656 29.7969 721.812 24.9531C724 20.0781 726.875 15.875 730.438 12.3438C734.031 8.78125 738.25 5.9375 743.094 3.8125C747.969 1.6875 752.797 0.625 757.578 0.625C762.359 0.625 766.828 1.25 770.984 2.5C779.203 4.96875 786.047 9.57812 791.516 16.3281C797.016 23.0469 799.766 30.9531 799.766 40.0469C799.766 45.3906 798.797 50.5 796.859 55.375C794.922 60.25 792.203 64.5781 788.703 68.3594C785.234 72.1094 780.844 75.1094 775.531 77.3594C770.25 79.6094 764.672 80.7344 758.797 80.7344C752.922 80.7344 747.531 79.6562 742.625 77.5C737.719 75.3438 733.516 72.4531 730.016 68.8281ZM824.047 9.90625C823.391 9.90625 822.828 10.1406 822.359 10.6094C821.891 11.0469 821.656 11.5938 821.656 12.25V70.7969C821.656 73.0781 822.406 74.9688 823.906 76.4688C824.031 76.5938 824.297 76.75 824.703 76.9375C825.109 77.125 825.312 77.5156 825.312 78.1094C825.312 78.7031 825.109 79 824.703 79H809.516C809.109 79 808.906 78.7344 808.906 78.2031C808.906 77.6406 808.969 77.3125 809.094 77.2188C809.25 77.0938 809.453 76.9844 809.703 76.8906C809.953 76.7656 810.266 76.5156 810.641 76.1406C811.047 75.7344 811.469 75.0156 811.906 73.9844C812.344 72.9219 812.562 71.8594 812.562 70.7969V10.4219C812.562 8.14062 811.812 6.25 810.312 4.75C810.188 4.625 809.922 4.46875 809.516 4.28125C809.109 4.09375 808.906 3.71875 808.906 3.15625C808.906 2.59375 809.109 2.3125 809.516 2.3125H833.562C840.438 2.375 846.188 3.85938 850.812 6.76562C855.469 9.64062 857.797 14.3281 857.797 20.8281C857.797 28.4844 853.797 34.0938 845.797 37.6562C842.859 38.9688 840.625 39.7031 839.094 39.8594C837.562 39.9844 836.797 40.0938 836.797 40.1875L838.297 41.0312C838.922 41.4062 840.203 42.3594 842.141 43.8906C844.078 45.4219 846 47.1562 847.906 49.0938C849.812 51 852.078 53.6562 854.703 57.0625C857.328 60.4688 859.266 63.25 860.516 65.4062L864.359 72.25C865.766 74.8125 866.938 76.2188 867.875 76.4688C868.812 76.7188 869.281 77.2031 869.281 77.9219C869.281 78.6406 869.078 79 868.672 79H853.484C853.078 79 852.875 78.7344 852.875 78.2031C852.875 77.6406 852.938 77.3125 853.062 77.2188C853.219 77.0938 853.422 76.9844 853.672 76.8906C853.922 76.7656 854.125 76.6094 854.281 76.4219C854.469 76.2344 854.547 75.875 854.516 75.3438C854.516 74.7812 854.453 74.3438 854.328 74.0312C852.047 68.1562 848.938 62.5625 845 57.25C837.688 47.375 831.391 42.0625 826.109 41.3125C825.359 41.1875 824.984 41.1094 824.984 41.0781C824.922 40.5156 824.891 39.75 824.891 38.7812V35.9219C824.891 35.6094 825.047 35.4531 825.359 35.4531C833.047 35.4531 839.047 33.9062 843.359 30.8125C846.672 28.4688 848.328 25.3125 848.328 21.3438C848.328 17.375 846.734 14.4844 843.547 12.6719C840.359 10.8281 836.75 9.90625 832.719 9.90625H824.047ZM895.625 35.1719L925.25 71.8281C926.125 73.0156 927.094 74.0781 928.156 75.0156C929.219 75.9219 929.797 76.4219 929.891 76.5156C929.984 76.6094 930.234 76.75 930.641 76.9375C931.047 77.125 931.25 77.5156 931.25 78.1094C931.25 78.7031 931.047 79 930.641 79H913.672C913.266 79 913.062 78.7344 913.062 78.2031C913.062 77.6406 913.125 77.3125 913.25 77.2188C913.406 77.0938 913.609 76.9688 913.859 76.8438C915.016 76.3438 915.5 75.5938 915.312 74.5938C915.156 73.5625 914.484 72.25 913.297 70.6562L889.391 41.0781H888.594V70.7969C888.594 73.0781 889.344 74.9688 890.844 76.4688C890.969 76.5938 891.234 76.75 891.641 76.9375C892.047 77.125 892.25 77.5156 892.25 78.1094C892.25 78.7031 892.047 79 891.641 79H876.453C876.047 79 875.844 78.7344 875.844 78.2031C875.844 77.6406 875.906 77.3125 876.031 77.2188C876.188 77.0938 876.391 76.9844 876.641 76.8906C876.891 76.7656 877.203 76.5156 877.578 76.1406C877.984 75.7344 878.406 75.0156 878.844 73.9844C879.281 72.9219 879.5 71.8594 879.5 70.7969V10.4219C879.5 8.14062 878.75 6.25 877.25 4.75C877.125 4.625 876.859 4.46875 876.453 4.28125C876.047 4.09375 875.844 3.70313 875.844 3.10938C875.844 2.51562 876.047 2.21875 876.453 2.21875H891.641C892.047 2.21875 892.25 2.5 892.25 3.0625C892.25 3.59375 892.172 3.92187 892.016 4.04688C891.891 4.14062 891.703 4.25 891.453 4.375C891.203 4.46875 890.875 4.71875 890.469 5.125C890.094 5.5 889.688 6.21875 889.25 7.28125C888.812 8.3125 888.594 9.35937 888.594 10.4219V30.0156H889.391L910.625 9.76562C912.625 7.85937 913.688 6.82812 913.812 6.67188C914.656 5.67188 914.406 4.875 913.062 4.28125C912.656 4.09375 912.453 3.70313 912.453 3.10938C912.453 2.51562 912.656 2.21875 913.062 2.21875H927.828C928.234 2.21875 928.438 2.5 928.438 3.0625C928.438 3.625 928.391 3.96875 928.297 4.09375C928.234 4.1875 927.844 4.39062 927.125 4.70312C926.406 4.98438 925.25 5.95313 923.656 7.60938L895.625 34.4219V35.1719Z"
          fill="black"
        />
      </svg>
    </div>

    <div class="textData text-center mt-5 text-xl">
      <p>
        This is a list of some side projects I have created as practical
        practice.
      </p>
    </div>

    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-5 md:gap-2 sm:grid-cols-2 justify-items-center"
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
