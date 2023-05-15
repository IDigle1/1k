import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('useSidebarStore', () => {
    const sidebarExpanded = ref(false)

    function toggleSidebar() {
        sidebarExpanded.value = !sidebarExpanded.value
    }

    return {
        sidebarExpanded,
        toggleSidebar
    }
})