<script>
    import Header from "$lib/components/Header.svelte";
    import SvelteMarkdown from "svelte-markdown";
    export let data;
</script>

<Header />

<div class="leading-loose [&_a]:font-bold [&_a]:underline">
    <SvelteMarkdown source={data.about} />
</div>