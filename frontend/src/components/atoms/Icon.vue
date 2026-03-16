<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    :class="[sizeClasses[size], colorClass]" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path :d="paths[name]" />
  </svg>
</template>

<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: 'md' },
  colorClass: { type: String, default: 'text-gray-500' } // Permite heredar color o forzar uno
});

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

// Diccionario de paths SVG (iconos esenciales de Twitter)
const paths = {
  heart: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  retweet: 'M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z',
  reply: 'M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z',
  home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
};
</script>