<template>
  <div class="player">
        <button class="close-button" @click="deletePlayer(index)"><i class="close-icon"></i></button>
        <h2 class="player-name">{{ props.player.name }}</h2>
        <div class="display-scores">
            <span class="scores">{{ props.player.scores }}</span>
            <span class="last-action">{{ props.player.lastAction }}</span>
            <span class="misses">{{ props.player.misses }}</span>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Введите очки" v-model="action">
            <button class="change-account" @click="changeAccount(index)">Изменить</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { Ref, ref, defineEmits } from 'vue';
    import { Player } from '../types/playerTypes';

    interface Props {
        player: Player,
        index: number
    }

    const props = defineProps<Props>()

    const emit = defineEmits(['deletePlayer', 'changeAccount'])

    const action: Ref<string | number> = ref('')

    function deletePlayer(index: number) {
        emit('deletePlayer', index)
    }

    function changeAccount(index: number) {
        emit('changeAccount', index, action)

        action.value = ''
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    $red: #FF7052;

    .player {
        position: relative;
        background: #fff;
        box-sizing: border-box;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #e5e5e5;
        .close-button {
            background: none;
            border: 0;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            top: 0;
            width: 25px;
            padding: 0;
            height: 25px;
            cursor: pointer;
            .close-icon {
                transform: rotate(45deg);
                border-radius: 5px;
                display: block;
                width: 12px;
                height: 2px;
                background: #a5a5a5;
                &:after {
                    content: '';
                    border-radius: 5px;
                    transform: rotate(-90deg);
                    position: absolute;
                    display: block;
                    width: 12px;
                    height: 2px;
                    background: #a5a5a5;
                }
            }
        }

        .player-name {
            line-height: 18px;
            margin: 10px 0 20px;
        }

        .display-scores {
            display: flex;
            margin-bottom: 10px;
            margin-right: -2.5px;
            margin-left: -2.5px;
            span {
                color: #808080;
                margin: 0 2.5px;
                flex-grow: 1;
                text-align: center;
                border: 1px solid #d7d7d7;
                background: #f3f3f3;
            }
        }

        .input-group {
            display: flex;
            input[type=text] {
                padding-left: 10px;
                margin-right: 5px;
                outline: none;
                border-radius: 0;
                flex-grow: 1;
                border: 1px solid #d7d7d7;
                background: #f3f3f3;
            }
            .change-account {
                padding: 5px 10px;
                border: 0;
                color: #fff;
                background: $red;
            }
        }
    }


</style>
