<script>
  import { onMount } from "svelte";
  import Blob from "../lib/assets/blob.svg";
  import BlobMob from "../lib/assets/blob-mob.svg";
  import gsap from "gsap";
  import TextPlugin from "gsap/dist/TextPlugin";
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import Observer from "gsap/dist/Observer";
  import MyImage from "../lib/assets/img-self.webp";

  let clock = new Date();
  let greeting = "";

  if (clock.getHours() < 12) {
    greeting = "Good Morning 👋🏼,";
  } else if (clock.getHours() < 18) {
    greeting = "Good Afternoon 👋🏼,";
  } else {
    greeting = "Good Evening 👋🏼,";
  }

  onMount(() => {
    gsap.registerPlugin(TextPlugin, ScrollToPlugin, Observer);
    const buttons = [
      {
        id: "btnExplore",
        classPrefix: "pathingExplore",
        pathSelector: ".path-arr",
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

    const sections = document.querySelectorAll(".sections");
    const pathBio = document.querySelector(".pathBio");

    const opt = {
      threshold: 0.2,
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            pathBio,
            {
              // Set initial stroke-dasharray to the length of the path
              "stroke-dasharray": pathBio.getTotalLength(),
              "stroke-dashoffset": pathBio.getTotalLength(),
            },
            {
              // Animate stroke-dashoffset to 0
              "stroke-dashoffset": 0,
              duration: 2, // Adjust duration for staggered effect
              ease: "power1.out",
              opacity: 1,
              onComplete: () => {
                obs.disconnect();
              },
            }
          );
        } else {
        }
      });
    }, opt);
    sections.forEach((item) => {
      obs.observe(item);
    });
  });
</script>

<main>
  <img
    class="absolute -top-32 sm:block md:block lg:hidden w-full sm:-top-96 md:-top-full lg:-top-3/4 overflow-hidden"
    src={BlobMob}
    alt=""
  />
  <img
    class="absolute hidden rot sm:hidden md:hidden lg:block sm:w-10/12 md:w-10/12 lg:w-10/12 ml-0 sm:-top-5 sm:-left-48 md:-top-52 md:-left-96 lg:-top-52 lg:-left-96 -z-10"
    src={Blob}
    alt=""
  />
  <div
    class="relative top-36 sm:top-28 md:top-28 lg:top-28 ml-5 sm:ml-8 md:ml-10 lg:ml-14 flex"
  >
    <div
      class="para text-3xl leading-normal sm:text-5xl sm:leading-normal md:text-5xl md:leading-normal lg:text-6xl lg:leading-normal"
    >
      <p>{greeting}</p>
      <p>I Am Bhavya Panchal</p>
      <p>I Am Web Developer.</p>
      <p class="text-2xl mt-9 w-80 sm:w-96 sm:mt-5 lg:w-2/4">
        A web developer and UI designer who loves turning ideas into reality.
        I'm always looking for ways to improve and grow in my craft!
      </p>

      <button class="text-3xl relative mt-10" id="btnExplore">
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
            stroke="#14E5F2"
            stroke-width="5"
            class="path-arr"
          />
          <path
            d="M214 38H238V15.5"
            stroke="#14E5F2"
            stroke-width="5"
            class="path-arr"
          />
        </svg>

        EXPLORE</button
      >
    </div>
  </div>

  <div
    class="bio w-full relative top-80 sm:top-40 md:top-40 lg:top-60 sections"
  >
    <div class="flex justify-start">
      <svg
        width="1678"
        height="81"
        viewBox="0 0 1678 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 44.5C0 44.5 434 44.5 683 44.5C714.5 44.5 746.5 6.5 746.5 6.5H833V74H896H936C936 74 979.942 6.49999 1016 6.5C1201.5 6.50005 1677.5 6.5 1677.5 6.5"
          stroke="#14E5F2"
          stroke-width="2"
          class="pathBio opacity-0"
        />
        <path
          d="M768.875 71.3594C771.188 71.3594 773.281 70.8281 775.156 69.7656C777.031 68.6719 778.469 67.5938 779.469 66.5312C781.781 64.0625 782.938 61.0938 782.938 57.625C782.938 52.1875 781.156 48.0469 777.594 45.2031C774.031 42.3281 769.234 40.8906 763.203 40.8906H756.922C756.516 40.8906 756.312 40.4531 756.312 39.5781V34.2812C756.312 33.4062 756.516 32.9688 756.922 32.9688H763.203C768.109 32.9688 771.703 31.6719 773.984 29.0781C776.266 26.4844 777.406 23.6875 777.406 20.6875C777.406 18.8125 777.062 17.1719 776.375 15.7656C775.719 14.3281 774.641 13.0625 773.141 11.9688C771.672 10.8438 770.156 10.1719 768.594 9.95312L767.562 9.8125H756.594C755.875 9.8125 755.25 10.0469 754.719 10.5156C754.188 10.9531 753.922 11.5156 753.922 12.2031V68.9688C753.922 69.6562 754.188 70.2344 754.719 70.7031C755.25 71.1406 755.875 71.3594 756.594 71.3594H768.875ZM767.141 79H741.781C741.375 79 741.172 78.7344 741.172 78.2031C741.172 77.6406 741.234 77.3125 741.359 77.2188C741.516 77.0938 741.719 76.9844 741.969 76.8906C742.219 76.7656 742.531 76.5156 742.906 76.1406C743.312 75.7344 743.734 75.0156 744.172 73.9844C744.609 72.9219 744.828 71.8594 744.828 70.7969V10.4219C744.828 8.14062 744.078 6.25 742.578 4.75C742.453 4.625 742.188 4.46875 741.781 4.28125C741.375 4.09375 741.172 3.70313 741.172 3.10938C741.172 2.51562 741.375 2.21875 741.781 2.21875H766.906C769.562 2.21875 772.109 2.73438 774.547 3.76562C776.984 4.79688 779.047 6.15625 780.734 7.84375C784.453 11.5625 786.312 15.5625 786.312 19.8438C786.312 23.0938 785.5 25.875 783.875 28.1875C782.25 30.4688 779.578 32.9844 775.859 35.7344V36.7188C786.766 41.1875 792.219 48.125 792.219 57.5312C792.219 62.5312 789.984 67.2812 785.516 71.7812C783.422 73.9062 780.766 75.6406 777.547 76.9844C774.328 78.3281 770.859 79 767.141 79ZM825.406 2.21875H840.594C841 2.21875 841.203 2.5 841.203 3.0625C841.203 3.59375 841.125 3.92187 840.969 4.04688C840.844 4.14062 840.656 4.25 840.406 4.375C840.156 4.46875 839.828 4.71875 839.422 5.125C839.047 5.5 838.641 6.21875 838.203 7.28125C837.766 8.3125 837.547 9.35937 837.547 10.4219V70.7969C837.547 73.0781 838.297 74.9688 839.797 76.4688C839.922 76.5938 840.188 76.75 840.594 76.9375C841 77.125 841.203 77.5156 841.203 78.1094C841.203 78.7031 841 79 840.594 79H825.406C825 79 824.797 78.7344 824.797 78.2031C824.797 77.6406 824.859 77.3125 824.984 77.2188C825.141 77.0938 825.344 76.9844 825.594 76.8906C825.844 76.7656 826.156 76.5156 826.531 76.1406C826.938 75.7344 827.359 75.0156 827.797 73.9844C828.234 72.9219 828.453 71.8594 828.453 70.7969V10.4219C828.453 8.14062 827.703 6.25 826.203 4.75C826.078 4.625 825.812 4.46875 825.406 4.28125C825 4.09375 824.797 3.70313 824.797 3.10938C824.797 2.51562 825 2.21875 825.406 2.21875ZM906.359 71.0312C909.422 72.25 912.422 72.8594 915.359 72.8594C925.359 72.8594 933.312 69.9375 939.219 64.0938C945.156 58.2188 948.125 50.3438 948.125 40.4688C948.125 37.0625 947.25 33.4844 945.5 29.7344C943.781 25.9844 941.469 22.5625 938.562 19.4688C935.656 16.3437 932.094 13.7656 927.875 11.7344C923.688 9.70313 918.938 8.6875 913.625 8.6875C908.312 8.6875 903.297 10.0313 898.578 12.7188C893.859 15.4062 890.219 19.125 887.656 23.875C885.094 28.625 883.812 34.1406 883.812 40.4219C883.812 46.6719 886.094 52.75 890.656 58.6562C895.25 64.5625 900.484 68.6875 906.359 71.0312ZM886.719 68.8281C883.219 65.1719 880.438 60.8438 878.375 55.8438C876.312 50.8125 875.281 45.625 875.281 40.2812C875.281 34.9062 876.359 29.7969 878.516 24.9531C880.703 20.0781 883.578 15.875 887.141 12.3438C890.734 8.78125 894.953 5.9375 899.797 3.8125C904.672 1.6875 909.5 0.625 914.281 0.625C919.062 0.625 923.531 1.25 927.688 2.5C935.906 4.96875 942.75 9.57812 948.219 16.3281C953.719 23.0469 956.469 30.9531 956.469 40.0469C956.469 45.3906 955.5 50.5 953.562 55.375C951.625 60.25 948.906 64.5781 945.406 68.3594C941.938 72.1094 937.547 75.1094 932.234 77.3594C926.953 79.6094 921.375 80.7344 915.5 80.7344C909.625 80.7344 904.234 79.6562 899.328 77.5C894.422 75.3438 890.219 72.4531 886.719 68.8281Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="flex justify-center w-full">
      <div
        class="imgContainer w-40 h-40 mt-5 rounded-full bg-main-cyan overflow-hidden flex justify-center items-center"
      >
        <img src={MyImage} alt="" class="" />
      </div>
    </div>
    <div class="textData text-center mt-5 text-4xl">
      <p>Full-Stack Developer.</p>
    </div>
    <div class="textData w-full flex justify-center mt-5 text-2xl">
      <p class="px-4 lg:w-3/5 text-center">
        I am a full-stack web developer with a passion for creating unique
        websites. <br /><br /> I want to develop a creative website while also
        providing a unique experience to users. <br /><br /> I look forward to working
        with an experienced team to gain my experience too.
      </p>
    </div>
  </div>
</main>
