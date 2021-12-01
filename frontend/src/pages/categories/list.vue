<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import Loader from '@/components/Loader.vue'
import Icon from '@/components/Icon.vue'

const store = useStore()
const router = useRouter()

const list = computed(() => store.state.categories.list)
const loading = computed(() => store.state.categories.loading.get)

onMounted(() => store.dispatch('categories/get.list'))

const go = path => router.push(path)
</script>

<template>
<div>
    <Loader v-if="loading" />

    <div v-if="!loading" class="divide-y -mx-6 -my-4">
        <div v-for="item in list" :key="item.id"
            class="flex justify-between px-6 items-center py-3"
        >
            <div>
                {{ item.name }}
            </div>

            <div>
                <button class="flex items-center justify-center" @click="go(`/categories/${item.id}`)">
                    <Icon icon="pencil" class="w-6 h-6 text-blue-500" />
                </button>
            </div>
        </div>
    </div>
</div>
</template>