<script>
  import { onMount } from 'svelte';

  let count = 0;

  onMount(async () => {
    const response = await fetch('/api/visit-count');
    const data = await response.json();
    count = data.count;
  });
</script>

<div class="text-sm font-light">
    <span role="img" aria-label="eye">👁️</span> {count}
</div>

