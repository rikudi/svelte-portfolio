<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    import Header from "$lib/components/Header.svelte";
    import ExternalLink from "$lib/components/md/ExternalLink.svelte";

    export let data : { resume: App.Resume; }
</script>

<Header resume={data.resume}/>

{#if data.resume.experiences && data.resume.experiences.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold">Experience</h2>
      </div>
    </div>

    {#each data.resume.experiences as experience}
      <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
        <div class="print:text-right lg:text-right">
          <span class="font-bold text-black/60">
            {experience.date}
          </span>
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          <h2 class="inline font-bold text-primary">
            {experience.role}
          </h2>
          <span class="[&_a]:underline">
            {#if experience.place}
              at
                {experience.place}
            {/if}
            {#if experience.location}
              ({experience.location})
            {/if}
          </span>
        </div>
        <div class="print:text-right lg:text-right">
          <span class="text-sm">
            {experience.type}
          </span>
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          {#if experience.desc}
            <p>
              {experience.desc}
            </p>
          {/if}
          <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
            {#each experience.bullets as bullet}
              <li class="[&_a]:underline">
                {bullet}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if data.resume.educations && data.resume.educations.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold">Education</h2>
      </div>
    </div>

    {#each data.resume.educations as education}
      <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
        <div class="print:text-right lg:text-right">
          <span class="text-black/60 font-bold">
            {education.date}
          </span>
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          <h2 class="inline font-bold text-primary">
            {education.degree}
          </h2>
          <span>
            at
            {education.school}
          </span>
        </div>
        <div class="print:text-right lg:text-right">
          <span class="text-sm text-black/60" />
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          <p>
            {education.location}
          </p>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if data.resume.skills && data.resume.skills.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold">Skills and Tech Stack</h2>
      </div>
    </div>

    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
          {#each data.resume.skills as skill}
            <li>
              {skill}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}

{#if data.resume.coursework && data.resume.coursework.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold">Coursework</h2>
      </div>
    </div>

    {#each data.resume.coursework as course}
      <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
        <div class="lg:text-right">
          <span class="text-black/60 font-bold">
            {course.date}
          </span>
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          <h2 class="inline font-bold text-primary">
            {course.title}
          </h2>
          <span>
            at
            {course.school}
          </span>
        </div>
        <div class="print:text-right lg:text-right">
          <span class="text-sm text-black/60" />
        </div>
        <div class="print:col-span-3 lg:col-span-3 italic text-sm">
          <p>
            {course.desc}
          </p>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if data.resume.certifications && data.resume.certifications.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold">Certifications</h2>
      </div>
    </div>

    {#each data.resume.certifications as cert}
      <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
        <div class="lg:text-right">
          <span class="text-black/60 font-bold">
            {cert.date}
          </span>
        </div>
        <div class="print:col-span-3 lg:col-span-3">
          <h2 class="inline font-bold text-primary">
            {cert.title}
          </h2>
          <span>
            at
            {cert.issuer}
          </span>
        </div>
        <div class="print:text-right lg:text-right">
          <span class="text-sm text-black/60" />
        </div>
        <div class="print:col-span-3 lg:col-span-3 italic text-sm">
          <p>
            {cert.desc}
          </p>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if data.resume.contacts && data.resume.contacts.length}
  <div class="flex flex-col gap-16 print:gap-6 lg:gap-6">
    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <h2 class="text-2xl font-bold">Contact Info</h2>
      </div>
    </div>

    <div class="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
      <div class="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
        <ul class="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
          {#each data.resume.contacts as contact}
            <li class="[&_a]:underline">
                <SvelteMarkdown isInline source={contact} renderers={{ link: ExternalLink }} />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}