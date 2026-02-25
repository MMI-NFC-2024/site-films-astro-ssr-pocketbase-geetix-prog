<script setup lang="ts">
import type Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import type { PersonnesResponse } from "../pocketbase-types";
import { ref } from "vue";
const props = defineProps<{
  personnes: PersonnesResponse[];
}>();
const personneId = ref();
console.log("Ici select", props.personnes);
</script>

<template>
  <Multiselect
    v-model="personneId"
    :options="personnes"
    label="nom"
    value-prop="id"
  />
</template>