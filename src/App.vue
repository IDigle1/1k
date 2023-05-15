<template>
  <div class="grid h-screen">
    <v-header />

    <sidebar />

    <div class="container max-h-full pt-12 pb-16">
      <div class="min-h-full h-full p-3 overflow-auto">
        <players-list 
          v-if="playersStore.players.length"
          :players="playersStore.players" 
          @delete-player="playersStore.deletePlayer" 
          @change-account="playersStore.changeAccount" 
        />

        <players-placeholder v-if="!playersStore.players.length" />
      </div>
    </div>

    <div class="container fixed left-0 right-0 bottom-0 p-3 bg-white shadow shadow-slate-500">
      <add-player @add-player="playersStore.addPlayer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import PlayersList from './components/PlayersList.vue';
  import PlayersPlaceholder from './components/PlayersPlaceholder.vue';
  import AddPlayer from './components/AddPlayer.vue';
  import { usePlayersStore } from './stores/players'
  import VHeader from './components/VHeader.vue';
  import Sidebar from './components/Sidebar.vue';

  const playersStore = usePlayersStore()
</script>

<style scoped>
</style>
