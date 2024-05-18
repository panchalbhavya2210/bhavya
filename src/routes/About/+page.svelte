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
  import socketLogo from "../../lib/icons/socket.svg";
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
  import { scale } from "svelte/transition";
  import workExp from "../../lib/assets/image.png";

  onMount(() => {
    gsap.registerPlugin(TextPlugin, ScrollToPlugin, Observer);

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
</script>

<main>
  <div
    class="relative top-36 sm:top-28 md:top-28 lg:top-28 ml-5 sm:ml-8 md:ml-10 lg:ml-14"
  >
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
          <div class="githubBtn mt-5">
            <button>GITHUB PROFILE</button>
          </div>
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
        <Skill name="Socket IO" logo={socketLogo} classNa="hello scale-0" />
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
            <path d="M20.5 21V145" stroke="#4484FF" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#4484FF" />
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
            <circle cx="21" cy="21" r="13" fill="#4484FF" />
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
    <div class="study sectionAbout">
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
            <path d="M20.5 21V123.5" stroke="#4484FF" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#4484FF" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-2xl">Akshar Vidhyavihar School.</p>
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
            <path d="M20.5 21V123.5" stroke="#4484FF" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#4484FF" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-2xl">NV Patel College.</p>
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
            <path d="M20.5 21V123.5" stroke="#4484FF" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#4484FF" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-2xl">Mimo Application (Online Study).</p>
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
            <path d="M20.5 21V123.5" stroke="#4484FF" stroke-width="5" />
            <circle cx="21" cy="21" r="13" fill="#4484FF" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-2xl">Hasmukh Goswami College Of Engineering.</p>
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
            <circle cx="21" cy="21" r="13" fill="#4484FF" />
          </svg>

          <div class="w-full ml-3">
            <p class="text-2xl">InfoLabz Technologies.</p>
            <p>Internship + Training</p>
            <p>2023 - Ongoing</p>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</main>
