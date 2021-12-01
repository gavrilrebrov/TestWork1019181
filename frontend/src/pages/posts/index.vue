<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const go = path => router.push(path)
</script>

<template>
<div class="py-4 px-6 bg-white rounded shadow">
    <div class="border-b -mx-6 -mt-4 px-6 py-4 flex justify-between items-center">
        <div class="font-semibold">
            Все посты
        </div>

        <div class="-my-4 -mr-4">
            <button class="button" @click="go('/create')">
                Создать
            </button>
        </div>
    </div>

    <div class="mt-4">
        <router-view />
    </div>
</div>
</template>