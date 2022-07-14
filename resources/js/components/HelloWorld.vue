<template>
    <div>
        <h1>Hello World!</h1>
        <button @click="$emit('clicked')"></button>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'clicked'): void;
}>();
</script>
