<template>
  <div class="min-h-screen bg-white p-10 flex flex-col gap-10">
    <h1 class="text-3xl font-bold border-b pb-4">Librería de Átomos</h1>

    <div class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold text-gray-500">1. Avatares</h2>
      <div class="flex items-end gap-4">
        <Avatar size="sm" />
        <Avatar size="md" src="https://i.pravatar.cc/150?img=33" />
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=47" />
        <Avatar size="xl" src="https://i.pravatar.cc/150?img=12" />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold text-gray-500">2. Iconos</h2>
      <div class="flex gap-4">
        <Icon name="home" size="lg" colorClass="text-twitter-black" />
        <Icon name="reply" size="lg" colorClass="text-gray-500" />
        <Icon name="retweet" size="lg" colorClass="text-green-500" />
        <Icon name="heart" size="lg" colorClass="text-red-500" />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold text-gray-500">3. Textarea de Tweet</h2>
      <div class="border border-gray-200 p-4 rounded-xl max-w-lg">
        <BaseTextarea v-model="tweetText" />
        <div class="flex justify-end mt-2">
          <span class="text-sm text-gray-400">{{ tweetText.length }}/280</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold text-gray-500">4. Spinners</h2>
      <div class="flex items-center gap-4">
        <Spinner size="sm" colorClass="text-white bg-twitter-blue p-1 rounded-full" />
        <Spinner size="md" colorClass="text-twitter-blue" />
        <Spinner size="lg" colorClass="text-twitter-black" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from './components/atoms/Avatar.vue';
import Icon from './components/atoms/Icon.vue';
import BaseTextarea from './components/atoms/BaseTextarea.vue';
import Spinner from './components/atoms/Spinner.vue';

const tweetText = ref('');
</script>