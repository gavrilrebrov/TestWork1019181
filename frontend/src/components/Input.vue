<script setup>
import { ref, watch, defineEmits } from 'vue'
const props = defineProps(['modelValue', 'type'])
let modelValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])
watch(modelValue, value => emit('update:modelValue', value))
const getType = () => {
    return props.type === undefined ? 'text' : props.type
}
watch(() => props.modelValue, value => {
    modelValue.value = value
})
</script>

<template>
<input :type="getType()" v-model="modelValue"
    class="
        rounded-md
        w-full
        shadow-sm
        border-gray-300
        focus:ring-blue-500 focus:border-blue-500
        text-sm
    "
/>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>