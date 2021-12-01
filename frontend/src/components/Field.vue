<script setup>
import { defineProps, ref, watch, defineEmits } from 'vue'

import Input from './Input.vue'

const props = defineProps(['modelValue', 'label', 'type', 'items'])

let modelValue = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

watch(modelValue, value => {
    emit('update:modelValue', value)
})

watch(() => props.modelValue, value => {
    modelValue.value = value
})
</script>

<template>
<div>
    <div class="text-sm font-medium text-gray-500 mb-2">
        {{ label }}
    </div>
    
    <Input v-if="type === 'input'" v-model="modelValue" />
</div>
</template>