<script setup>
import PlayersList from './components/PlayersList.vue';
import AddPlayer from './components/AddPlayer.vue';
import { usePlayersStore } from './stores/players'

const playersStore = usePlayersStore()

</script>

<template>
  <div id="app">
    <div class="container">
        <players-list 
          :players="playersStore.players" 
          @delete-player="playersStore.deletePlayer" 
          @change-account="playersStore.changeAccount" 
        />
    </div>

    <add-player @add-player="playersStore.addPlayer" />
  </div>
</template>

<style scoped>
</style>
