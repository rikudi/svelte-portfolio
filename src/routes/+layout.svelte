<script>
  import "../app.pcss"
  import { preparePageTransition } from "$lib/functions"
  import { inject } from '@vercel/analytics';
  if (import.meta.env.MODE === 'production') {
    preparePageTransition()
  }
  
</script>

<div class="text-gray-700 mb-24 mt-6 flex flex-col items-center justify-center px-6">
    <div class="flex w-full max-w-4xl flex-col gap-36 print:gap-10">
      <slot />
    </div>
  </div>