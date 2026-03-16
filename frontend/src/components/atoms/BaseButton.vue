<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'font-bold rounded-full transition-colors duration-200 flex items-center justify-center', // Clases base
      sizeClasses[size],      // Clases de tamaño
      variantClasses[variant] // Clases de color/estilo
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);

// Diccionario de tamaños
const sizeClasses = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-8 py-3 text-lg'
};

// Diccionario de variantes (usando nuestros colores de Twitter)
const variantClasses = {
  primary: 'bg-twitter-blue text-white hover:bg-[#1a8cd8] disabled:opacity-50 disabled:cursor-not-allowed',
  secondary: 'bg-white text-twitter-black border border-gray-300 hover:bg-gray-100',
  outline: 'bg-transparent text-twitter-blue border border-twitter-blue hover:bg-twitter-blue hover:bg-opacity-10',
  danger: 'bg-transparent text-red-500 hover:bg-red-50'
};
</script>