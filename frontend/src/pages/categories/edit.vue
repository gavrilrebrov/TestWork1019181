<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import Field from '@/components/Field.vue'
import Loader from '@/components/Loader.vue'
import Icon from '@/components/Icon.vue'

const store = useStore()
const route = useRoute()

const fields = ref({
    name: ''
})

const item = computed(() => store.state.categories.item)
const loading = computed(() => store.state.categories.loading)
const notice = ref(null)

const save = e => {
    e.preventDefault()
    notice.value = null

    if (fields.value.name === '') {
        notice.value = 'Название не должно быть пустым'
    } else {
        store.dispatch('categories/save', {
            id: route.params.categoryId,
            fields: fields.value
        })
    }
}

onMounted(() => {
    if (route.name === 'categories-edit') store.dispatch('categories/get.item', route.params.categoryId)
})

watch(item, value => {
    if (value) {
        fields.value.name = value.name
    }
})

const destroy = () => store.dispatch('categories/destroy', route.params.categoryId)
</script>

<template>
<Loader v-if="loading.get" />

<div v-if="notice" class="bg-red-100 text-red-500 text-sm px-3 py-2 rounded mb-3">
    {{ notice }}
</div>

<form id="categories_form" @submit="save" v-if="!loading.get">
    <Field type="input" v-model="fields.name" label="Название" />

    <div v-if="route.params.categoryId" class="mt-6">
        <button class="button button_red" @click="destroy">
            <Icon v-if="loading.destroy" class="w-5 h-5 animate-spin" icon="loader" />
            Удалить
        </button>
    </div>
</form>
</template>