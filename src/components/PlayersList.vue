<template>
    <div class="players-list" >
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

    interface Props {
        players: Player[]
    }

    const emit = defineEmits(['deletePlayer', 'changeAccount'])

    const props = defineProps<Props>()

    function deletePlayer(index: number) {
        emit('deletePlayer', index);
    }

    function changeAccount(index: number, action: string | number) {
        emit('changeAccount', index, action);
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .players-list {
        max-height: calc(100vh - 60px);
        padding: 10px;
        overflow: auto;
    }
</style>
