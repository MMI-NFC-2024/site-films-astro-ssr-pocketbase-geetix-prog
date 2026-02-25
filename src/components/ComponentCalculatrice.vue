<script setup lang="ts">
import { ref } from 'vue';
import BtnCalc from './BtnCalc.vue';

const nombre = ref(0);
const modeDecimal = ref(false);
const rang = 
</script>

<template>
    <h1/>Calculatrice<h1/>
    <p>afficheur : {{nombre}}</p>
    <BtnCalc v-model="nombre" :chiffre="1" />
    <div class="flex flex-col">
        <button @click="nombre+=1">incrémene</button>
        <button @click="nombre-=1">décrémenter</button>
    </div>
    <div class="grid grid-cols-3 grid-rows-3">
        <BtnCalc class="bg-amber-400 w-20 rounded-full py-5 cursor-pointer mx-auto hover:bg-amber-500 transition-colors" v-for="chiffre in 9" v-model="nombre" :chiffre="chiffre" />
        <button class="bg-orange-500 w-20 rounded-full py-5 cursor-pointer mx-auto hover:bg-amber-600 transition-colors" @click="nombre=0">Clear</button>
        <BtnCalc class="bg-amber-400 w-20 rounded-full py-5 cursor-pointer mx-auto hover:bg-amber-500 transition-colors" v-model="nombre" :chiffre="0" />
        <button class="bg-orange-500 w-20 rounded-full py-5 cursor-pointer mx-auto hover:bg-amber-600 transition-colors" @click="nombre=Math.floor(nombre/10)"><-</button>
    </div>

</template>