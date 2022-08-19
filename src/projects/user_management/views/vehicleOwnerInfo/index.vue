<template>
    <!-- 车主信息 -->
    <div class="vehicle-owner-info-wrap">
        <div class="page-title">已添加车辆</div>

        <div class="vehicle-box">
            <div
                    class="vehicle-item"
                    v-for="(item,index) in vehicleList"
                    :key="'vehicle'+index"
            >
                <div :class="`licence-plate licence-plate-${item.color}`">{{ item.licencePlate }}</div>
                <div class="btn-delete">删除</div>
            </div>

            <div class="is-empty" v-if="!vehicleList.length">未添加任何车辆</div>
        </div>

        <div class="btn-add-vehicle" @click="handleAdd()">添加车辆</div>
    </div>
</template>

<script>
    import {
        defineComponent,
        onMounted,
        reactive,
        ref,
        toRefs,
    } from 'vue';
    import {useRoute, useRouter} from 'vue-router'

    export default defineComponent({
        name: 'index',
        props: {},
        components: {},
        setup(props, ctx) {

            const data = reactive({
                vehicleList: [
                    {
                        licencePlate: '苏A 123456',
                        color: 1,
                    },
                    {
                        licencePlate: '苏A 123456',
                        color: 2,
                    },
                ],
            });
            const $router = useRouter();

            /**
             * 添加车辆
             */
            function handleAdd() {
                $router.push(
                    {
                        name: 'addVehicle',
                        params: {
                            id: 'userId',
                        },
                    }
                )
            }

            onMounted(() => {

            });

            return {
                ...toRefs(data),
                handleAdd,
            };
        },
    });
</script>

<style lang="less" scoped>
    .vehicle-owner-info-wrap {
        width: 100%;
        height: 100%;
        background-color: #F6F7F8;
        padding: 3px 7.6px 45px;
        box-sizing: border-box;
        text-align: center;

        > .page-title {
            font-size: 12.5px;
            color: #333333;
            line-height: 39px;
            padding-left: 20px;
            text-align: left;
        }

        > .vehicle-box {
            width: 100%;
            height: calc(100% - 39px - 50px);
            overflow: hidden;
            overflow-y: auto;
            text-align: left;
            position: relative;

            > .is-empty {
                width: 135px;
                height: 80px;
                background-image: url("../../images/img-empty.png");
                background-size: 135px auto;
                background-repeat: no-repeat;
                background-position: center top;
                padding-top: 58px;
                box-sizing: border-box;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                color: #676767;
                font-size: 13.89px;
                text-align: center;
                line-height: 24px;
            }

            > .vehicle-item {
                width: 100%;
                height: 72px;
                background: rgba(255, 255, 255, 0.90);
                border-radius: 14.58px;
                display: flex;
                justify-content: space-between;
                padding: 15px 18.7px;
                box-sizing: border-box;
                margin-bottom: 7px;
                line-height: 42px;

                > .licence-plate {
                    width: 115px;
                    height: 100%;
                    text-align: center;
                    font-size: 16.67px;
                    background-size: 100% 100%;
                    font-weight: 600;

                    &.licence-plate-1 {
                        background-image: url("../../images/licence-plate-1.png");
                        color: #ffffff;
                    }

                    &.licence-plate-2 {
                        background-image: url("../../images/licence-plate-2.png");
                        color: #000000;
                    }
                }

                > .btn-delete {
                    color: #FF0D0D;
                    font-size: 12.5px;
                }
            }
        }

        > .btn-add-vehicle {
            display: inline-block;
            width: 336.81px;
            height: 41.67px;
            line-height: 41.67px;
            background: #4287fe;
            border-radius: 20.83px;
            font-size: 15.28px;
            color: #ffffff;
            font-weight: 600;
            margin-top: 8.5px;
        }
    }
</style>