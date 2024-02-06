<script>
    import Header from "$lib/components/Header.svelte";
    import SvelteMarkdown from "svelte-markdown";
    export let data;
</script>

<Header />

<div>
    <SvelteMarkdown source={data.about} />
</div>