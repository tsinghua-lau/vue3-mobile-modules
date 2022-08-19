<template>
    <!-- 通知公告 -->
    <div class="home-wrap">

        <div class="tab-box">
            <van-tabs v-model:active="tabActiveIndex">
                <van-tab title="公告信息"></van-tab>
                <van-tab title="节假日政策"></van-tab>
                <van-tab title="收费政策"></van-tab>
            </van-tabs>
        </div>

        <div class="content-box">
            <div
                    class="item"
                    v-for="(item,index) in noticeList[tabActiveIndex]"
                    :key="'notice'+index"
                    @click="noticeItemClick( index )"
            >
                <div class="item-title">{{ item.title }}</div>
                <div class="item-info">
                    <div class="item-info-view">浏览量：{{ item.view }}</div>
                    <div class="item-info-date">{{ item.date }}</div>
                </div>
            </div>
        </div>
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
    import {Tab, Tabs} from 'vant';
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: 'home',
        props: {},
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        setup(props, ctx) {

            const data = reactive({
                tabActiveIndex: 0,
                noticeList: [
                    [
                        {
                            title: '尖于丁伙枢纽部分匝道扩建施工期间限车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道扩限车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道扩建施工期间限车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道扩建施工辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                    ],
                    [
                        {
                            title: '尖于丁伙枢纽部分匝道扩建施工期间限车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道扩限车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道扩建施工期间限车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道扩建施工辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                    ],
                    [
                        {
                            title: '尖于丁伙枢纽部分匝道扩建施工期间限车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道扩建施工辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                        {
                            title: '尖于丁伙枢纽部分匝道车辆通知公告',
                            view: '6000',
                            date: '2022-08-10',
                        },
                    ]
                ],
            });
            const $router = useRouter();

            /**
             * 公告点击事件
             * @param index
             */
            function noticeItemClick(index) {
                console.log(index);
                $router.push({
                    name: 'details',
                    params: {
                        id: 'queryId',
                    },
                });
            }

            onMounted(() => {

            });

            return {
                ...toRefs(data),
                noticeItemClick,
            };
        },
    });
</script>

<style lang="less" scoped>
    .home-wrap {
        width: 100%;
        height: 100%;
        background-color: #F9F9FA;
        padding: 3px 7.6px 15px 7.6px;
        box-sizing: border-box;

        > .tab-box {
            height: 57px;
            width: 100%;

            /deep/ .van-tabs__wrap {
                height: 100%;

                .van-tabs__nav {
                    background-color: transparent;
                    padding-bottom: 0;

                    .van-tab__text {
                        font-size: 15.28px;
                        color: #333333;
                        line-height: 57px;
                    }

                    .van-tab--active {

                        .van-tab__text {
                            font-weight: 600;
                        }
                    }

                    .van-tabs__line {
                        width: 25.69px;
                        height: 4.17px;
                        background: linear-gradient(#1a72f8 0%, #1ca7ff 100%);
                        border-radius: 2.08px;
                        border: 0;
                        bottom: 12px;
                    }
                }
            }
        }

        > .content-box {
            height: calc(100% - 57px);
            width: 100%;
            overflow: hidden;
            overflow-y: auto;
            background: #ffffff;
            border-radius: 6.94px;
            box-shadow: 0px 3.47px 6.94px 0px rgba(200, 200, 200, 0.30);
            padding: 6px 20.5px 6px 21px;
            box-sizing: border-box;

            .item {
                line-height: 20px;
                margin-bottom: 15px;

                .item-title {
                    font-size: 14px;
                    color: #333333;
                    font-weight: 600;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 30px;
                }

                .item-info {
                    display: flex;
                    justify-content: space-between;

                    .item-info-view {
                        color: #666666;
                        font-size: 12px;
                    }

                    .item-info-date {
                        color: #666666;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
