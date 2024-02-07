<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import SvelteMarkdown from "svelte-markdown";
    
    export let data: {
        about: string;
        resume: App.Resume;
    };
</script>

<Header resume={data.resume}/>

<div class="leading-loose [&_a]:font-bold [&_a]:underline">
    <SvelteMarkdown source={data.about} />
</div>