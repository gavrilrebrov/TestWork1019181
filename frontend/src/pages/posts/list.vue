<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'

import Loader from '@/components/Loader.vue'
import Icon from '@/components/Icon.vue'

const store = useStore()
const router = useRouter()

const list = computed(() => store.state.posts.list)
const loading = computed(() => store.state.posts.loading.get)

onMounted(() => store.dispatch('posts/get.list'))

const go = path => router.push(path)
</script>

<template>
<div>
    <Loader v-if="loading" />

    <div v-if="!loading" class="divide-y -mx-6 -my-4">
        <div v-for="item in list" :key="item.id"
            class="flex justify-between px-6 items-center py-3 gap-x-5"
        >
            <div style="width:60px" v-if="item.thumbnail">
                <img :src="`${apiUrl}${item.thumbnail.url}`" width="60" height="60">
            </div>

            <div class="w-full">
                <div class="font-semibold">
                    {{ item.title }}
                </div>

                <div class="text-sm text-gray-400" v-if="item.category">
                    {{ item.category.name }}
                </div>
            </div>

            <div>
                <button class="flex items-center justify-center" @click="go(`/${item.id}`)">
                    <Icon icon="pencil" class="w-6 h-6 text-blue-500" />
                </button>
            </div>
        </div>
    </div>
</div>
</template>