<template>
  <div class="w-full player">
        <button class="close-button" @click="deletePlayer(index)"><i class="close-icon"></i></button>
        <h2 class="player-name">{{ props.player.name }}</h2>
        <div class="display-scores">
            <span class="rounded-sm scores">{{ props.player.scores }}</span>
            <span class="rounded-sm last-action">{{ props.player.lastAction }}</span>
            <span class="rounded-sm misses">{{ props.player.misses }}</span>
        </div>
        <div class="input-group">
            <input class="rounded-sm" type="text" placeholder="Введите очки" @input="setAction">
            <button class="bg-red-500 text-white border-0 px-2 py-1 rounded" @click="changeAccount(index)">Изменить</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { Ref, ref } from 'vue';
    import { Player } from '../types/playerTypes';

    const props = defineProps<{
        player: Player,
        index: number
    }>()

    const emit = defineEmits(['deletePlayer', 'changeAccount'])

    const action: Ref<number> = ref(0)

    function deletePlayer(index: number) {
        emit('deletePlayer', index)
    }

    function changeAccount(index: number) {
        emit('changeAccount', index, action.value)

        action.value = 0
    }

    function setAction(event: Event) {
        const value = (event.target as HTMLInputElement)?.value
        if (!value) return

        action.value = +value
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
                flex-grow: 1;
                border: 1px solid #d7d7d7;
                background: #f3f3f3;
            }
        }
    }


</style>
