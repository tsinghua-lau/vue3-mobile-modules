<template>
    <!-- 车主信息 -->
    <div class="vehicle-owner-info-wrap">
        <div class="page-title" v-if="vehicleList.length">已添加车辆</div>

        <div class="vehicle-box">
            <div
                    class="vehicle-item"
                    v-for="(item,index) in vehicleList"
                    :key="'vehicle'+index"
            >
                <div :class="`licence-plate licence-plate-${item.fVcVehicleColor}`">
                    {{ slicePlate(item.fVcSvehicle,0) }}<span class="blank"></span>{{ slicePlate(item.fVcSvehicle,1) }}
                </div>
                <div class="btn-delete">删除</div>
                <div class="btn-view">查看行驶证</div>
            </div>

            <empty v-if="!vehicleList.length" text="未添加任何车辆"></empty>
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
    import empty from '@/components/Empty.vue';
    import {
        getVehicleList,
    } from '../../api/vehicleOwnerInfo/index'
    import {load} from "../../components/loading/loading";

    export default defineComponent({
        name: 'index',
        props: {},
        components: {
            empty,
        },
        setup(props, ctx) {

            const data = reactive({
                vehicleList: [],
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

            /**
             * 获取车辆列表
             */
            function getData(account) {
                load.show('拼命加载中...');

                getVehicleList(
                    {
                        account: account
                    }
                ).then((res) => {
                    if (res && res.code === 200) {
                        data.vehicleList = res.data || [];
                    }
                }).finally(() => {
                    load.hide();
                })
            }

            /**
             * 拆分车牌
             */
            function slicePlate(plate, type) {
                if (!plate) {
                    return '';
                }

                if (type === 0) {
                    return plate.slice(0, 2)
                } else {
                    return plate.slice(2)
                }
            }

            onMounted(() => {
                getData('15850501445');
            });

            return {
                ...toRefs(data),
                handleAdd,
                slicePlate,
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

            > .vehicle-item {
                width: 100%;
                height: 72px;
                background: rgba(255, 255, 255, 0.90);
                border-radius: 14.58px;
                /*display: flex;*/
                /*justify-content: space-between;*/
                padding: 15px 18.7px;
                box-sizing: border-box;
                margin-bottom: 7px;
                line-height: 42px;

                > .licence-plate {
                    display: inline-block;
                    vertical-align: top;
                    width: 115px;
                    height: 100%;
                    text-align: center;
                    font-size: 16.67px;
                    background-size: 100% 100%;
                    font-weight: 600;
                    color: #000000;
                    box-sizing: border-box;

                    > .blank {
                        display: inline-block;
                        vertical-align: top;
                        width: 10px;
                    }

                    &.licence-plate-0 {
                        background-image: url("../../images/plate/licence-plate-0.png");
                        color: #ffffff;
                    }

                    &.licence-plate-1 {
                        background-image: url("../../images/plate/licence-plate-1.png");
                    }

                    &.licence-plate-2 {
                        background-image: url("../../images/plate/licence-plate-2.png");
                        color: #ffffff;
                    }

                    &.licence-plate-3 {
                        background-image: url("../../images/plate/licence-plate-3.png");
                    }

                    &.licence-plate-4 {
                        background-image: url("../../images/plate/licence-plate-4.png");
                    }

                    &.licence-plate-5 {
                        background-image: url("../../images/plate/licence-plate-5.png");
                        padding-right: 5px;
                    }

                    &.licence-plate-6 {
                        background-image: url("../../images/plate/licence-plate-6.png");
                    }

                    &.licence-plate-7 {
                        background-image: url("../../images/plate/licence-plate-7.png");
                    }

                    &.licence-plate-10 {
                        background-image: url("../../images/plate/licence-plate-10.png");
                    }

                    &.licence-plate-11 {
                        background-image: url("../../images/plate/licence-plate-11.png");
                    }
                }

                > .btn-view {
                    float: right;
                    color: #4287FE;
                    font-size: 12.5px;
                    margin-right: 17px;
                }

                > .btn-delete {
                    float: right;
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
