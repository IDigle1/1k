<template>
    <div class="grid grid-rows-1 gap-3 overflow-auto" >
        <player-component 
            v-for="(player, index) in props.players" 
            :key="index"
            @delete-player="deletePlayer"
            @change-account="changeAccount"
            :player="player" :index="index" />
    </div>
</template>

<script lang="ts" setup>
    import { defineProps, defineEmits } from 'vue'
    import { Player } from '../types/playerTypes';
    import PlayerComponent from './Player.vue';

    const emit = defineEmits(['deletePlayer', 'changeAccount'])

    const props = defineProps<{
        players: Player[]
    }>()

    function deletePlayer(index: number) {
        emit('deletePlayer', index);
    }

    function changeAccount(index: number, action: string | number) {
        emit('changeAccount', index, action);
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
