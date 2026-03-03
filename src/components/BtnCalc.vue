<script setup lang="ts">
    const props = defineProps<{
        chiffre:number;
        modeDecimal: boolean;
        rang: number;
    }>()
    const nombre = defineModel<number>();
</script>

<template>
    <button @click="nombre=!modeDecimal?(nombre!*10+chiffre):">{{ chiffre }}</button>
</template>