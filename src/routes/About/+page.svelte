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
  import djangoLogo from "../../lib/icons/django.svg";
  import figmaLogo from "../../lib/icons/figma.svg";
  import firebaseLogo from "../../lib/icons/firebase.svg";
  import gitLogo from "../../lib/icons/git.svg";
  import localStorageLogo from "../../lib/icons/localstorage.svg";
  import nodeLogo from "../../lib/icons/node.svg";
  import nuxtLogo from "../../lib/icons/nuxt.svg";
  import phpLogo from "../../lib/icons/php.svg";
  import pythonLogo from "../../lib/icons/python.svg";
  import reactLogo from "../../lib/icons/react.svg";
  import socketLogo from "../../lib/icons/socket.svg";
  import vercelLogo from "../../lib/icons/vercel.svg";
  import vueLogo from "../../lib/icons/vue.svg";
</script>

<main>
  <div
    class="relative top-36 sm:top-28 md:top-28 lg:top-28 ml-5 sm:ml-8 md:ml-10 lg:ml-14"
  >
    <div class="flex text-3xl">
      <span class="border-l-4 border-l-main-cyan pl-3">ABOUT ME</span>
    </div>

    <div class="flex mt-5">
      <div class="imageContainer">
        <div
          class="betaImg flex justify-center items-center w-36 h-36 rounded-full overflow-hidden"
        >
          <img src={MyImage} alt="" class="w-40 h-40 object-cover" />
        </div>
        <div class="githubBtn">
          <button>GITHUB PROFILE</button>
        </div>
      </div>
      <div class="para w-9/12 ml-16 text-xl">
        Hello, I Am Bhavya. I am a 22-year-old front-end website developer from
        India. And I am learning the backend. Currently, I am in college, doing
        the 6th semester of the BCA (Bachelor of Computer Application) Course at
        Monark University. I started programming as a hobby. I got into
        programming in lockdown and started learning it from the Mimo app and
        various YouTube channels. <br />
        Beside working part-time at a pharmacy and doing college, I created some
        side projects that gave me a lot of experience. And I am also eager to learn
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
  </div>

  <div class="skill">
    <div
      class="relative top-36 sm:top-28 md:top-28 lg:top-40 ml-5 sm:ml-8 md:ml-10 lg:ml-14"
    >
      <div class="flex text-3xl">
        <span class="border-l-4 border-l-main-cyan pl-3"
          >Skill & Experience</span
        >
      </div>

      <div class="grid grid-cols-5 mt-5 gap-5">
        <Skill name="HTML" logo={htmlLogo} />
        <Skill name="CSS" logo={cssLogo} />
        <Skill name="JavaScript" logo={jsLogo} />
        <Skill name="Figma" logo={figmaLogo} />
        <Skill name="Node JS" logo={nodeLogo} />
        <Skill name="Svelte JS" logo={svelteLogo} />
        <Skill name="Git" logo={gitLogo} />
        <Skill name="Tailwind CSS" logo={tailwindLogo} />
        <Skill name="Chart JS" logo={chartLogo} />
        <Skill name="Supabase" logo={supabaseLogo} />
        <Skill name="Firebase" logo={firebaseLogo} />
      </div>
    </div>
  </div>
</main>
