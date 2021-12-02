<script setup>
import { defineProps, ref, watch, defineEmits } from 'vue'

import Input from './Input.vue'
import ImageUploader from './ImageUploader.vue'
import Select from './Select.vue'
import Editor from './Editor.vue'

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

    <ImageUploader v-if="type === 'image'" v-model="modelValue" />

    <Select v-if="type === 'select'" :items="items" v-model="modelValue" />

    <Editor v-if="type === 'editor'" v-model="modelValue" />
</div>
</template>