<template>
    <button 
        class="block text-center w-full bg-red-600 px-4 py-2 text-white shadow-sm rounded cursor-pointer"
        @click.prevent="addPlayer"
    >
        Добавить игрока
    </button>
</template>

<script lang="ts" setup> 
const emit = defineEmits(['addPlayer'])

function addPlayer() {
    emit('addPlayer')
}
</script>

<style lang="scss" scoped>
.button-group {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 10px;
    width: 500px;
    .add-player {
        width: 100%;
        cursor: pointer;
        text-align: center;
        color: #fff;
        display: block;
        padding: 5px;
        background: #FF7052;
        text-decoration: none;
    }
}

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