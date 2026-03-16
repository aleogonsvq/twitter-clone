<template>
  <div 
    :class="[
      'rounded-full overflow-hidden bg-gray-200 flex-shrink-0',
      sizeClasses[size]
    ]"
  >
    <img 
      v-if="src" 
      :src="src" 
      :alt="alt"
      class="w-full h-full object-cover"
    />
    <svg v-else class="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: 'Avatar de usuario' },
  size: { 
    type: String, 
    default: 'md',
    validator: (val) => ['sm', 'md', 'lg', 'xl'].includes(val)
  }
});

const sizeClasses = {
  sm: 'w-8 h-8',    // Para listas o respuestas
  md: 'w-10 h-10',  // Estándar del feed
  lg: 'w-12 h-12',  // Para el tweet principal
  xl: 'w-32 h-32'   // Para el perfil de usuario
};
</script>