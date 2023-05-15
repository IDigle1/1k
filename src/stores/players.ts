import { Player } from '../types/playerTypes'
import { ref, Ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const usePlayersStore = defineStore('usePlayersStore', () => {
    const players: Ref<Player[]> = ref([])

    loadPlayers()

    watch(players, () => savePlayers(), { deep: true} )

    function addPlayer() {
        let playerName = prompt('Введите имя игрока') || 'Игрок';

        players.value.push({
            name: playerName,
            scores: 0,
            lastAction: '-',
            misses: 0
        });
    }

    function savePlayers() {
        localStorage.setItem('players', JSON.stringify(players))
    }

    function deletePlayer(index: number) {
        players.value.splice(index, 1);
    }

    function changeAccount(index: number, action: number) {
        if (action === 0) {
            if (players.value[index].misses < 2) {
                players.value[index].misses++;
                players.value[index].lastAction = 'Болт';
            } else {
                players.value[index].misses = 0;
                players.value[index].scores += -120;
                players.value[index].lastAction = '-120';
            }

            return;
        } 
        
        if (action >= 0 || action <= 0) {
            players.value[index].scores += action;
            players.value[index].lastAction = (action > 0) ? (`+${action}`) : action;
        }
        
    }

    function loadPlayers() {
        if(!localStorage.getItem('players')) {
            localStorage.setItem('players', "[]");
            return;
        }

        let loadedRawPlayersData = localStorage.getItem('players')

        if (loadedRawPlayersData) {
            try {
                let loadedPlayersData = JSON.parse(loadedRawPlayersData)
                players.value = loadedPlayersData;
            } catch (error) {
                console.log('Сохраненные данные были повреждены')
            }
        }
    }

    return {
        players,
        addPlayer,
        changeAccount,
        deletePlayer
    }
})