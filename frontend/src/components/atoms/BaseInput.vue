<template>
  <div class="w-full flex flex-col gap-1">
    <label v-if="label" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        'w-full px-4 py-3 border rounded text-base text-twitter-black outline-none transition-colors duration-200',
        error 
          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
          : 'border-gray-300 focus:border-twitter-blue focus:ring-1 focus:ring-twitter-blue',
        disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-white'
      ]"
    />

    <span v-if="error" class="text-xs text-red-500 mt-1">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['update:modelValue']);
</script>