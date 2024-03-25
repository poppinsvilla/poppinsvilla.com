<template>
  <div class="flex h-screen">
    <div class="m-auto w-full max-w-lg max-w-sm rounded border p-5 text-center">
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="text-6x1 mt-7">Ooops.</p>
      <p class="my-7">{{ error.message }}</p>
      <button
        class="hover:bg-blue-700 rounded bg-blue-500 px-4 py-2 font-bold text-white"
        @click="handleClearError"
      >
        Go Home...
      </button>
    </div>
  </div>
</template>
<script setup>
  // eslint-disable-next-line vue/require-prop-types
  defineProps(['error']);
  const handleClearError = () => clearError({ redirect: '/' });
</script>
