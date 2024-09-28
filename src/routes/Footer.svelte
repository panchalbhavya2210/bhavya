<script>
  import { page } from "$app/stores";
</script>

<main>
  <div class="p-5 md:lg-p-11 lg:p-11 relative bottom-10 top-10 text-white">
    <div
      class="style grad mx-auto rounded-lg grid lg:grid-cols-3 grid-cols-1 gap-10 lg:justify-items-center bg-nav-cyan h-full pb-5 p-5 sm:mt-0 md:mt-0 lg:mt-0 sm:pb-5 md:pb-5 lg:pb-5"
    >
      <div class="navigation lg:ml-5 mt-5 ml-5">
        <p class="uppercase text-3xl">Navigation</p>

        <div class="leading-relaxed mt-5 text-xl">
          <a href="/"
            ><button class="transition-all px-1"><span>Home</span></button></a
          ><br />
          <a href="/About"
            ><button class=" transition-all px-1">About</button></a
          ><br />
          <a href="/Work"
            ><button class=" transition-all px-1">My Projects</button></a
          ><br />
          <a href="/Contact">
            <button class=" transition-all px-1">Connect</button>
          </a>
        </div>
      </div>
      <div class="resources lg:mt-5 ml-5">
        <p class="uppercase text-3xl">RESOURCES</p>

        <div class="leading-relaxed mt-5 text-xl">
          <a
            href="https://fonts.google.com/specimen/Della+Respira"
            target="_blank"
            ><button class=" transition-all px-1">Font : Della Respira</button
            ></a
          ><br />
          <a href="https://www.cufonfonts.com/font/lufga" target="_blank"
            ><button class=" transition-all px-1">2nd Font : Lufga</button></a
          ><br />
          <a href="https://iconify.design" target="_blank">
            <button class=" transition-all px-1">Icon : Iconify.design</button
            ></a
          ><br />
          <a href="https://figma.com" target="_blank"
            ><button class=" transition-all px-1">Design : Figma</button></a
          >
        </div>
      </div>
      <div class="links lg:mt-5 lg:mr-5 ml-5">
        <p class="uppercase text-3xl">LINKS</p>

        <div class="leading-relaxed mt-5 text-xl">
          <a href="https://github.com/panchalbhavya2210" target="_blank">
            <button class=" transition-all px-1">Github</button>
          </a>
          <br />
          <a href="https://x.com/panchalbhavya22" target="_blank">
            <button class=" transition-all px-1">Twitter</button>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/bhavya-panchal-83a6a4296/"
            target="_blank"
          >
            <button class=" transition-all px-1">LinkedIn</button>
          </a>
          <br />
        </div>
      </div>
    </div>
    <div
      class="infrig w-full opacity-50 {$page.url.pathname === '/About' ||
      $page.url.pathname === '/Work' ||
      $page.url.pathname === '/Contact'
        ? 'block'
        : 'hidden'}"
    >
      The logos and trademarks used on this portfolio are the property of their
      respective owners. These logos are used here solely to represent the
      skills and technologies I am proficient in. This usage does not imply any
      affiliation, sponsorship, or endorsement by the respective companies. All
      logos and trademarks are owned by their respective companies.
    </div>
  </div>
</main>

<style>
  .grad {
    background-image: linear-gradient(25deg, #2e55db, #058ed9);
  }
  button {
    position: relative;
  }
  button::after {
    background: #fff;
    content: "";
    height: 1px;
    left: 0;
    pointer-events: none;
    position: absolute;
    bottom: 0%;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 0.45s;
    -webkit-transition: transform 0.45s;
    -moz-transition: transform 0.45s;
    -ms-transition: transform 0.45s;
    -o-transition: transform 0.45s;
    width: 100%;
  }
  button:hover::after {
    transform: scaleX(1); /* Scale to full width on hover */
    transform-origin: 0 50%; /* Change origin to animate from left to right */
  }
</style>
