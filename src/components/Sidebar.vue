<template>
    <div class="fixed top-0 left-0 z-20 h-full w-0">
        <div 
            class="bg-white h-full w-screen transition-all pt-14 shadow-md"
            :class="{ '-translate-x-full': !sidebarStore.sidebarExpanded }"
        >
            <div class="py-2 px-4">
                <div class="text-center font-bold text-lg text-slate-600">Меню</div>

                <div class="grid grid-cols-1 gap-2">
                    <div>Правила игры</div>
                    <div>Настройки</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useSidebarStore } from '../stores/sidebar'

    const sidebarStore = useSidebarStore()
</script>

<style scoped>
</style>