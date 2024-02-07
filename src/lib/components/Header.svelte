<script lang="ts">
  import {page} from '$app/stores';
  export let resume: App.Resume;
</script>

<div class="flex gap-20 justify-start">
    <a class={`pt-2 border-b-2 hover:border-primary ${$page.url.pathname == "/" ? "border-b-primary" : "border-b-transparent"}`} href="/">about</a>
    <a class={`pt-2 border-b-2 hover:border-primary ${$page.url.pathname == "/resume" ? "border-b-primary" : "border-b-transparent"} `} href="/resume">resume</a>
    <a class={`pt-2 border-b-2 hover:border-primary ${$page.url.pathname == "/projects" ? "border-b-primary" : "border-b-transparent"} `} href="/projects">projects</a>
</div>

<div class="text-gray-700"> 
  {#if resume}
  <h1 class="text-5xl pb-2 flex gap-2"><strong>{resume.first_name}</strong><p class="font-thin">{resume.last_name}</p></h1>
  <p class="text-primary">{resume.tagline}</p>
  {/if}
</div>