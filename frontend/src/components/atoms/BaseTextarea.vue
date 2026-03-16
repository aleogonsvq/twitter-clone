<template>
  <div class="w-full">
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      maxlength="280"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full bg-transparent text-twitter-black text-xl placeholder-gray-500 outline-none resize-none overflow-hidden"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '¿Qué está pasando?' },
  rows: { type: [Number, String], default: 3 }
});

defineEmits(['update:modelValue']);
</script>