<template>
    <div class="flex bg-white fixed left-0 right-0 top-0 p-3 z-30 shadow shadow-slate-200">
        <button @click="sidebarStore.toggleSidebar"><img :src="burgerIcon" alt=""></button>
        <div class="text-lg/2 font-bold px-2">
            1<span class="text-red-600">K</span> 
        </div>
    </div>
</template>

<script lang="ts" setup>
    import burgerIcon from '../assets/icons/burger.svg'
    import { useSidebarStore } from '../stores/sidebar'

    const sidebarStore = useSidebarStore()
</script>