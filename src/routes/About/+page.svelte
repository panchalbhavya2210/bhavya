<script>
  import MyImage from "../../lib/assets/img-self.webp";
  import Skill from "./skill.svelte";
  import htmlLogo from "../../lib/icons/html.svg";
  import cssLogo from "../../lib/icons/css.svg";
  import jsLogo from "../../lib/icons/js.svg";
  import svelteLogo from "../../lib/icons/svelte.svg";
  import tailwindLogo from "../../lib/icons/tailwind.svg";
  import supabaseLogo from "../../lib/icons/supabase.svg";
  import chartLogo from "../../lib/icons/chart.svg";
  import djangoLogo from "../../lib/icons/django1.svg";
  import figmaLogo from "../../lib/icons/figma.svg";
  import firebaseLogo from "../../lib/icons/firebase.svg";
  import gitLogo from "../../lib/icons/git.svg";
  import nodeLogo from "../../lib/icons/node.svg";
  import nuxtLogo from "../../lib/icons/nuxt.svg";
  import phpLogo from "../../lib/icons/php.svg";
  import pythonLogo from "../../lib/icons/python.svg";
  import vercelLogo from "../../lib/icons/vercel.svg";
  import vueLogo from "../../lib/icons/vue.svg";
  import flutterLogo from "../../lib/icons/flutter.svg";
  import dartLogo from "../../lib/icons/dart.svg";
  import gsapLogo from "../../lib/icons/gsap.svg";
  import kotlinLogo from "../../lib/icons/kotlin.svg";
  import gsap from "gsap";
  import TextPlugin from "gsap/dist/TextPlugin";
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import Observer from "gsap/dist/Observer";
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  onMount(() => {
    gsap.registerPlugin(TextPlugin, ScrollToPlugin, Observer, ScrollTrigger);

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
        }
      );
    });

    const opt = {
      threshold: 0.3,
    };
    const sections = document.querySelectorAll(".sectionAbout");
    const cards = document.querySelectorAll(".hello");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("skill")) {
            cards.forEach((para, ind) => {
              gsap.to(para, {
                scale: 1,
                duration: 0.5 + ind * 0.2,
                delay: 0,
                onComplete: () => {
                  obs.disconnect();
                },
              });
            });
          }
        } else {
        }
      });
    }, opt);
    sections.forEach((sect) => {
      obs.observe(sect);
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

<svelte:head>
  <title>About • Bhavya</title>
  <meta name="description" content="Bhavya Panchal's Portfolio" />
</svelte:head>

<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="svgContainer w-full h-lvh"
    on:click={scrollTo}
    role="button"
    tabindex="0"
    aria-label="Click to scroll"
  >
    <svg
      width="1512"
      height="209"
      viewBox="0 0 1512 209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-full"
    >
      <path
        d="M501.391 71.8281C501.391 71.8281 511.672 48.8125 532.234 2.78125C532.391 2.40625 533.156 2.21875 534.531 2.21875C535.906 2.21875 536.688 2.40625 536.875 2.78125L568.656 71.8281C569.875 74.6719 571.078 76.375 572.266 76.9375C572.672 77.125 572.875 77.5156 572.875 78.1094C572.875 78.7031 572.672 79 572.266 79H555.297C554.891 79 554.688 78.7344 554.688 78.2031C554.688 77.6406 554.75 77.3125 554.875 77.2188C555.031 77.0938 555.234 76.9844 555.484 76.8906C555.734 76.7656 555.938 76.625 556.094 76.4688C557.281 75.2812 557.875 74.1875 557.875 73.1875C557.875 72.1562 557.766 71.3125 557.547 70.6562L550.75 54.5781H516.953L510.297 70.6562C510.078 71.3125 509.969 71.8125 509.969 72.1562V72.6719C509.969 72.7031 509.969 72.7344 509.969 72.7656C509.969 74.0469 510.562 75.2812 511.75 76.4688C511.875 76.5938 512.141 76.75 512.547 76.9375C512.953 77.125 513.156 77.5156 513.156 78.1094C513.156 78.7031 512.953 79 512.547 79H497.781C497.375 79 497.172 78.7344 497.172 78.2031C497.172 77.6406 497.234 77.3125 497.359 77.2188C497.516 77.0938 497.719 76.9688 497.969 76.8438C499 76.4062 500.141 74.7344 501.391 71.8281ZM520.281 47.125C520.219 47.2188 520.203 47.3438 520.234 47.5C520.266 47.625 520.328 47.6875 520.422 47.6875H547.188C547.281 47.6875 547.344 47.625 547.375 47.5C547.406 47.3438 547.391 47.2188 547.328 47.125L533.781 17.6875H533.453L520.281 47.125ZM607.188 71.3594C609.5 71.3594 611.594 70.8281 613.469 69.7656C615.344 68.6719 616.781 67.5938 617.781 66.5312C620.094 64.0625 621.25 61.0938 621.25 57.625C621.25 52.1875 619.469 48.0469 615.906 45.2031C612.344 42.3281 607.547 40.8906 601.516 40.8906H595.234C594.828 40.8906 594.625 40.4531 594.625 39.5781V34.2812C594.625 33.4062 594.828 32.9688 595.234 32.9688H601.516C606.422 32.9688 610.016 31.6719 612.297 29.0781C614.578 26.4844 615.719 23.6875 615.719 20.6875C615.719 18.8125 615.375 17.1719 614.688 15.7656C614.031 14.3281 612.953 13.0625 611.453 11.9688C609.984 10.8438 608.469 10.1719 606.906 9.95312L605.875 9.8125H594.906C594.188 9.8125 593.562 10.0469 593.031 10.5156C592.5 10.9531 592.234 11.5156 592.234 12.2031V68.9688C592.234 69.6562 592.5 70.2344 593.031 70.7031C593.562 71.1406 594.188 71.3594 594.906 71.3594H607.188ZM605.453 79H580.094C579.688 79 579.484 78.7344 579.484 78.2031C579.484 77.6406 579.547 77.3125 579.672 77.2188C579.828 77.0938 580.031 76.9844 580.281 76.8906C580.531 76.7656 580.844 76.5156 581.219 76.1406C581.625 75.7344 582.047 75.0156 582.484 73.9844C582.922 72.9219 583.141 71.8594 583.141 70.7969V10.4219C583.141 8.14062 582.391 6.25 580.891 4.75C580.766 4.625 580.5 4.46875 580.094 4.28125C579.688 4.09375 579.484 3.70313 579.484 3.10938C579.484 2.51562 579.688 2.21875 580.094 2.21875H605.219C607.875 2.21875 610.422 2.73438 612.859 3.76562C615.297 4.79688 617.359 6.15625 619.047 7.84375C622.766 11.5625 624.625 15.5625 624.625 19.8438C624.625 23.0938 623.812 25.875 622.188 28.1875C620.562 30.4688 617.891 32.9844 614.172 35.7344V36.7188C625.078 41.1875 630.531 48.125 630.531 57.5312C630.531 62.5312 628.297 67.2812 623.828 71.7812C621.734 73.9062 619.078 75.6406 615.859 76.9844C612.641 78.3281 609.172 79 605.453 79ZM668.547 71.0312C671.609 72.25 674.609 72.8594 677.547 72.8594C687.547 72.8594 695.5 69.9375 701.406 64.0938C707.344 58.2188 710.312 50.3438 710.312 40.4688C710.312 37.0625 709.438 33.4844 707.688 29.7344C705.969 25.9844 703.656 22.5625 700.75 19.4688C697.844 16.3438 694.281 13.7656 690.062 11.7344C685.875 9.70312 681.125 8.6875 675.812 8.6875C670.5 8.6875 665.484 10.0312 660.766 12.7188C656.047 15.4062 652.406 19.125 649.844 23.875C647.281 28.625 646 34.1406 646 40.4219C646 46.6719 648.281 52.75 652.844 58.6562C657.438 64.5625 662.672 68.6875 668.547 71.0312ZM648.906 68.8281C645.406 65.1719 642.625 60.8438 640.562 55.8438C638.5 50.8125 637.469 45.625 637.469 40.2812C637.469 34.9062 638.547 29.7969 640.703 24.9531C642.891 20.0781 645.766 15.875 649.328 12.3438C652.922 8.78125 657.141 5.9375 661.984 3.8125C666.859 1.6875 671.688 0.625 676.469 0.625C681.25 0.625 685.719 1.25 689.875 2.5C698.094 4.96875 704.938 9.57812 710.406 16.3281C715.906 23.0469 718.656 30.9531 718.656 40.0469C718.656 45.3906 717.688 50.5 715.75 55.375C713.812 60.25 711.094 64.5781 707.594 68.3594C704.125 72.1094 699.734 75.1094 694.422 77.3594C689.141 79.6094 683.562 80.7344 677.688 80.7344C671.812 80.7344 666.422 79.6562 661.516 77.5C656.609 75.3438 652.406 72.4531 648.906 68.8281ZM731.547 10.4219C731.547 8.20312 730.766 6.3125 729.203 4.75C729.078 4.625 728.812 4.46875 728.406 4.28125C728 4.09375 727.797 3.70313 727.797 3.10938C727.797 2.51562 728 2.21875 728.406 2.21875H744.156C744.562 2.21875 744.766 2.5 744.766 3.0625C744.766 3.59375 744.688 3.92187 744.531 4.04688C744.406 4.14062 744.219 4.25 743.969 4.375C743.719 4.46875 743.391 4.71875 742.984 5.125C742.609 5.5 742.203 6.21875 741.766 7.28125C741.328 8.3125 741.109 9.35938 741.109 10.4219V49.2812C741.109 56.5 743.328 62.1094 747.766 66.1094C752.234 70.0781 757.688 72.0625 764.125 72.0625C767.906 72.0625 771.453 71.1094 774.766 69.2031C778.109 67.2656 780.75 64.7188 782.688 61.5625C784.656 58.375 785.641 55 785.641 51.4375V10.4219C785.641 8.14062 784.891 6.25 783.391 4.75C783.266 4.625 783 4.46875 782.594 4.28125C782.188 4.09375 781.984 3.70313 781.984 3.10938C781.984 2.51562 782.188 2.21875 782.594 2.21875H797.219C797.625 2.21875 797.828 2.5 797.828 3.0625C797.828 3.59375 797.75 3.92187 797.594 4.04688C797.469 4.14062 797.281 4.25 797.031 4.375C796.781 4.46875 796.453 4.71875 796.047 5.125C795.672 5.5 795.266 6.21875 794.828 7.28125C794.391 8.3125 794.172 9.35938 794.172 10.4219V51.4375C794.172 56.8125 792.781 61.75 790 66.25C787.25 70.75 783.547 74.2812 778.891 76.8438C774.266 79.4062 769.125 80.6875 763.469 80.6875C757.844 80.6875 752.578 79.375 747.672 76.75C742.797 74.125 738.891 70.4062 735.953 65.5938C733.016 60.75 731.547 55.3125 731.547 49.2812V10.4219ZM883.891 2.21875C884.203 2.21875 884.469 2.625 884.688 3.4375C884.906 4.21875 885.297 5.32812 885.859 6.76562C885.859 6.76562 886.359 8.03125 887.359 10.5625C887.797 11.6562 888.016 12.2656 888.016 12.3906C888.016 12.5156 887.781 12.6562 887.312 12.8125C886.875 12.9688 886.594 13.0469 886.469 13.0469C886.25 13.0469 885.969 12.8281 885.625 12.3906C885.312 11.9219 884.75 11.375 883.938 10.75C883.156 10.125 881 9.8125 877.469 9.8125H851.078V70.7969C851.078 73.0781 851.828 74.9688 853.328 76.4688C853.453 76.5938 853.719 76.75 854.125 76.9375C854.531 77.125 854.734 77.5156 854.734 78.1094C854.734 78.7031 854.531 79 854.125 79H838.938C838.531 79 838.328 78.7344 838.328 78.2031C838.328 77.6406 838.391 77.3125 838.516 77.2188C838.672 77.0938 838.875 76.9844 839.125 76.8906C839.375 76.7656 839.688 76.5156 840.062 76.1406C840.469 75.7344 840.891 75.0156 841.328 73.9844C841.766 72.9219 841.984 71.8594 841.984 70.7969V9.8125H815.594C811.188 9.8125 808.531 10.5625 807.625 12.0625C807.188 12.6875 806.875 13.0156 806.688 13.0469C806.5 13.0469 806.172 12.9688 805.703 12.8125C805.266 12.6562 805.047 12.5156 805.047 12.3906C805.047 12.2656 805.266 11.6562 805.703 10.5625L807.203 6.76562C807.766 5.35938 808.141 4.29687 808.328 3.57812C808.547 2.82812 808.828 2.375 809.172 2.21875H883.891ZM927.297 6.625C925.328 5.96875 923.781 5.64062 922.656 5.64062C920.969 5.64062 919.625 5.73438 918.625 5.92188C917.625 6.07812 917.078 6.07812 916.984 5.92188C916.891 5.76563 916.844 5.53125 916.844 5.21875C916.844 4.90625 916.953 4.57812 917.172 4.23438C917.391 3.89063 917.656 3.6875 917.969 3.625C922.625 2.5625 929 2.03125 937.094 2.03125L960.625 40.4688H961.094L983.594 2.03125C991.688 2.03125 998.062 2.5625 1002.72 3.625C1003.47 3.78125 1003.84 4.35938 1003.84 5.35938C1003.84 5.92188 1003.34 6.125 1002.34 5.96875C1001.34 5.78125 1000.02 5.6875 998.359 5.6875C996.703 5.6875 994.938 6.04688 993.062 6.76562L1002.02 70.7969C1002.45 74.1406 1003.47 76.1875 1005.06 76.9375C1005.47 77.125 1005.67 77.5156 1005.67 78.1094C1005.67 78.7031 1005.47 79 1005.06 79H989.453C989.047 79 988.844 78.7344 988.844 78.2031C988.844 77.6406 988.906 77.3125 989.031 77.2188C989.188 77.0938 989.391 76.9688 989.641 76.8438C990.453 76.5 991.156 75.5938 991.75 74.125C992.375 72.625 992.688 71.6094 992.688 71.0781C992.688 70.5156 992.672 70.1406 992.641 69.9531L985.094 14.2656H984.859L961.703 54.7656C961.609 54.9219 961.031 54.9844 959.969 54.9531C958.938 54.9219 958.391 54.8594 958.328 54.7656L934.188 14.2656H933.766L926.875 69.9531C926.719 70.9531 926.922 72.1406 927.484 73.5156C928.047 74.8594 928.516 75.7188 928.891 76.0938C929.266 76.4688 929.656 76.75 930.062 76.9375C930.469 77.125 930.672 77.5156 930.672 78.1094C930.672 78.7031 930.469 79 930.062 79H915.766C915.359 79 915.156 78.7344 915.156 78.2031C915.156 77.6406 915.219 77.3125 915.344 77.2188C915.5 77.0938 915.703 76.9688 915.953 76.8438C917.422 76.2188 918.375 74.2031 918.812 70.7969L927.297 6.625ZM1059.25 33.0625C1061.53 33.0625 1063.42 32.3125 1064.92 30.8125C1065.05 30.6875 1065.2 30.4219 1065.39 30.0156C1065.58 29.6094 1065.97 29.4062 1066.56 29.4062C1067.16 29.4062 1067.45 29.6094 1067.45 30.0156V43.6094C1067.45 44.0156 1067.17 44.2188 1066.61 44.2188C1066.08 44.2188 1065.75 44.1562 1065.62 44.0312C1065.53 43.875 1065.42 43.6719 1065.3 43.4219C1065.2 43.1719 1064.95 42.8594 1064.55 42.4844C1064.17 42.0781 1063.45 41.6719 1062.39 41.2656C1061.36 40.8594 1060.31 40.6562 1059.25 40.6562H1029.67V71.4062H1060.8C1064.33 71.4062 1066.48 71.1094 1067.27 70.5156C1068.08 69.8906 1068.64 69.3438 1068.95 68.875C1069.3 68.4062 1069.55 68.1719 1069.7 68.1719C1069.89 68.1719 1070.2 68.25 1070.64 68.4062C1071.11 68.5625 1071.34 68.7031 1071.34 68.8281C1071.34 68.9531 1071.12 69.5625 1070.69 70.6562L1069.19 74.4531C1068.62 75.8906 1068.23 76.9844 1068.02 77.7344C1067.83 78.4531 1067.56 78.875 1067.22 79H1017.53C1017.12 79 1016.92 78.7344 1016.92 78.2031C1016.92 77.6406 1016.98 77.3125 1017.11 77.2188C1017.27 77.0938 1017.47 76.9844 1017.72 76.8906C1017.97 76.7656 1018.28 76.5156 1018.66 76.1406C1019.06 75.7344 1019.48 75.0156 1019.92 73.9844C1020.36 72.9219 1020.58 71.8594 1020.58 70.7969V10.4219C1020.58 8.14062 1019.83 6.25 1018.33 4.75C1018.2 4.625 1017.94 4.46875 1017.53 4.28125C1017.12 4.09375 1016.92 3.70313 1016.92 3.10938C1016.92 2.51562 1017.12 2.21875 1017.53 2.21875H1067.22C1067.53 2.21875 1067.8 2.625 1068.02 3.4375C1068.23 4.21875 1068.62 5.32812 1069.19 6.76562L1070.69 10.5625C1071.12 11.6562 1071.34 12.2656 1071.34 12.3906C1071.34 12.5156 1071.11 12.6562 1070.64 12.8125C1070.2 12.9688 1069.91 13.0469 1069.75 13.0469C1069.62 13.0469 1069.48 12.9688 1069.33 12.8125C1069.17 12.625 1068.98 12.3906 1068.77 12.1094C1068.58 11.7969 1068.08 11.3438 1067.27 10.75C1066.48 10.125 1064.33 9.8125 1060.8 9.8125H1029.67V33.0625H1059.25Z"
        fill="black"
      />
      <path
        d="M-49 136.973C69.164 92.1132 143.109 78.7636 269.5 79.4728C422.483 80.3312 498.092 163.609 651 168.473C828.135 174.107 918.968 71.2082 1096 79.4728C1268.09 87.5066 1519.5 202.973 1519.5 202.973"
        stroke="#44ff"
        stroke-width="5"
        class="paths-home"
      />
      <path
        d="M-90 174.5C-90 174.5 96.1362 88.5477 223 87.5C332.387 86.5966 387.296 141.618 496.5 148C645.165 156.688 724.092 85.7373 873 87.5C1011.7 89.1419 1084.46 154.866 1223 148C1359.26 141.247 1560 56 1560 56"
        stroke="#44ff"
        stroke-width="5"
        class="paths-home"
      />
      <path
        d="M-28 115.104C90.164 70.2443 177.109 204.922 303.5 205.631C456.483 206.489 519.092 74.2676 672 79.131C849.135 84.7649 932.962 132.879 1103.5 181.104C1264.5 226.631 1540.5 181.104 1540.5 181.104"
        stroke="#44ff"
        stroke-width="5"
        class="paths-home"
      />
    </svg>
  </div>
  <div class="relative ml-5 sm:ml-8 md:ml-10 lg:ml-14" id="section-next">
    <div class="flex text-3xl">
      <span class="border-l-4 border-l-main-cyan pl-3">About Me</span>
    </div>

    <div class="md:flex lg:flex mt-5">
      <div class="flex justify-center">
        <div class="imageContainer">
          <div
            class="betaImg flex justify-center items-center w-36 h-36 rounded-full overflow-hidden"
          >
            <img src={MyImage} alt="" class="w-40 h-40 object-cover" />
          </div>
          <div class="githubBtn mt-5"></div>
        </div>
      </div>
      <div
        class="md:w-4/5 lg:w-4/5 md:ml-11 lg:ml-11 text-xl pr-5 m-0 mt-5 md:mt-0 lg:mt-0"
      >
        Hello, I am Bhavya. I am a 22-year-old front-end website developer from
        India. And I am learning the backend currently. I am in college, doing
        the 6th semester of the BCA (Bachelor of Computer Application) course at
        Monark University. I started programming as a hobby. I got into
        programming in lockdown and started learning it from the Mimo app and
        various YouTube channels. <br />
        Beside working part-time at a pharmacy and doing college, I created some
        side projects that gave me a lot of experience. And I am also eager to learn.
        new things. I have learned a lot from practicals.
        <br /><br />
        Coding Journey, <br /> I started learning front-end website development
        in 2020. I did most of the learning from the Mimo App and YouTube
        Videos. After learning the basics, I got into creating various projects.
        I created some basic projects and improved them over time. I started
        coding on my phone, and I created various projects using the SPCK
        editor. <br /> After coding in mobile for a long time. I bought a laptop
        and started coding on it. I mostly use Visual Studio Code for programming.
        I am still learning the basics of the backend so I can become a full-stack
        developer.
      </div>
    </div>
    <!-- </div> -->

    <div class="skill sectionAbout mt-10">
      <!-- <div
      class="relative top-48 sm:top-28 md:top-40 lg:top-52 ml-5 sm:ml-8 md:ml-10 lg:ml-14"
    > -->
      <div class="flex text-3xl">
        <span class="border-l-4 border-l-main-cyan pl-3"
          >Skill & Experience</span
        >
      </div>
      <p class="w-11/12 text-xl lg:ml-5 md:ml-5 lg:mt-5 md:mt-5 mt-5">
        I've been programming for more than a year, and there is a lot I've
        learned from creating projects. These are the languages, frameworks, and
        services I have experience in.
      </p>

      <div
        class="grid md:grid-cols-5 lg:grid-cols-5 grid-cols-2 mt-5 md:gap-5 lg:gap-5 gap-8 mx-auto w-11/12 ml-0 justify-items-center lg:ml-5"
      >
        <Skill name="HTML" logo={htmlLogo} classNa="hello scale-0" />
        <Skill name="CSS" logo={cssLogo} classNa="hello scale-0" />
        <Skill name="JavaScript" logo={jsLogo} classNa="hello scale-0" />
        <Skill name="Figma" logo={figmaLogo} classNa="hello scale-0" />
        <Skill name="Node JS" logo={nodeLogo} classNa="hello scale-0" />
        <Skill name="Svelte JS" logo={svelteLogo} classNa="hello scale-0" />
        <Skill name="Nuxt JS" logo={nuxtLogo} classNa="hello scale-0" />
        <Skill name="Vue JS" logo={vueLogo} classNa="hello scale-0" />
        <Skill name="Git" logo={gitLogo} classNa="hello scale-0" />
        <Skill
          name="Tailwind CSS"
          logo={tailwindLogo}
          classNa="hello scale-0"
        />
        <Skill name="Chart JS" logo={chartLogo} classNa="hello scale-0" />
        <Skill name="Supabase" logo={supabaseLogo} classNa="hello scale-0" />
        <Skill name="Firebase" logo={firebaseLogo} classNa="hello scale-0" />
        <Skill name="PHP" logo={phpLogo} classNa="hello scale-0" />
        <Skill name="Python" logo={pythonLogo} classNa="hello scale-0" />
        <Skill name="django" logo={djangoLogo} classNa="hello scale-0" />
        <Skill name="Vercel" logo={vercelLogo} classNa="hello scale-0" />
        <Skill name="Flutter" logo={flutterLogo} classNa="hello scale-0" />
        <Skill name="Dart" logo={dartLogo} classNa="hello scale-0" />
        <Skill name="GSAP" logo={gsapLogo} classNa="hello scale-0" />
        <Skill name="Kotlin" logo={kotlinLogo} classNa="hello scale-0" />
      </div>
      <!-- </div> -->
    </div>

    <div class="work sectionAbout mt-10">
      <!-- <div
      class="relative top-60 sm:top-28 md:top-56 lg:top-64 ml-5 sm:ml-8 md:ml-10 lg:ml-14"
    > -->
      <div class="flex text-3xl">
        <span class="border-l-4 border-l-main-cyan pl-3">Work & Experience</span
        >
      </div>

      <div class="work mt-5">
        <div class="flex items-start">
          <svg
            width="41"
            height="145"
            viewBox="0 0 41 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 md:w-16 lg:w-16"
          >
            <circle cx="20.5" cy="20.5" r="20" stroke="black" />
            <path d="M20.5 21V145" stroke="#44ff" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#44ff" />
          </svg>

          <div class="w-11/12 ml-3">
            <p class="text-2xl">Param Enterprise.</p>
            <p>
              Stock Manager | Here i worked for 2 years and i did management of
              the company stock and other works.
            </p>
            <p>2020-2022</p>
          </div>
        </div>
      </div>
      <div class="work">
        <div class="flex items-start">
          <svg
            width="41"
            height="124"
            viewBox="0 0 41 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 md:w-16 lg:w-16"
          >
            <circle cx="20.5" cy="20.5" r="20" stroke="black" />
            <circle cx="21" cy="21" r="13" fill="#44ff" />
          </svg>

          <div class="w-11/12 ml-3">
            <p class="text-2xl">Perpetual Pharmaceuticals.</p>
            <p>
              Office Manager | Currently i am working here and i manage the
              whole office by myself. Creating and parceling the order while
              also managing the stock.
            </p>
            <p>2020 - Currently Working.</p>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <div class="study sectionAbout mt-10">
      <!-- <div
      class="relative top-60 sm:top-28 md:top-64 lg:top-64 ml-5 sm:ml-8 md:ml-10 lg:ml-14"
    > -->
      <div class="flex text-3xl">
        <span class="border-l-4 border-l-main-cyan pl-3"
          >Study & Education.</span
        >
      </div>

      <div class="work mt-5">
        <div class="flex items-start">
          <svg
            width="41"
            height="124"
            viewBox="0 0 41 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 md:w-16 lg:w-16"
          >
            <circle cx="20.5" cy="20.5" r="20" stroke="black" />
            <path d="M20.5 21V123.5" stroke="#44ff" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#44ff" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-xl lg:text-2xl">Akshar Vidhyavihar School.</p>
            <p>HSC (Higher Secondary school Certificate) 12th Pass</p>
            <p>2018</p>
          </div>
        </div>
      </div>
      <div class="work">
        <div class="flex items-start">
          <svg
            width="41"
            height="124"
            viewBox="0 0 41 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 md:w-16 lg:w-16"
          >
            <circle cx="20.5" cy="20.5" r="20" stroke="black" />
            <path d="M20.5 21V123.5" stroke="#44ff" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#44ff" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-xl lg:text-2xl">NV Patel College.</p>
            <p>B.com | Drop Out 3rd Sem.</p>
            <p>2019 - Dropped out.</p>
          </div>
        </div>
      </div>
      <div class="work">
        <div class="w-full flex items-start">
          <svg
            width="41"
            height="124"
            viewBox="0 0 41 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 md:w-16 lg:w-16"
          >
            <circle cx="20.5" cy="20.5" r="20" stroke="black" />
            <path d="M20.5 21V123.5" stroke="#44ff" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#44ff" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-xl lg:text-2xl">Mimo Application (Online).</p>
            <p>Learned HTML5, CSS3, JS From Mimo.</p>
            <p>2020.</p>
          </div>
        </div>
      </div>
      <div class="work mt-">
        <div class="flex items-start">
          <svg
            width="41"
            height="124"
            viewBox="0 0 41 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 md:w-16 lg:w-16"
          >
            <circle cx="20.5" cy="20.5" r="20" stroke="black" />
            <path d="M20.5 21V123.5" stroke="#44ff" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#44ff" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-xl lg:text-2xl">
              Hasmukh Goswami College Of Engineering.
            </p>
            <p>BCA (Graduated)</p>
            <p>2024</p>
          </div>
        </div>
      </div>
      <div class="work">
        <div class="flex items-start">
          <svg
            width="41"
            height="124"
            viewBox="0 0 41 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 md:w-16 lg:w-16"
          >
            <circle cx="20.5" cy="20.5" r="20" stroke="black" />
            <circle cx="21" cy="21" r="13" fill="#44ff" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-xl lg:text-2xl">InfoLabz Technologies.</p>
            <p>Internship + Training</p>
            <p>2023 - Ongoing</p>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</main>
