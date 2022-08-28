<template>
    <!-- 通知公告 -->
    <div class="home-wrap">

        <div class="tab-box">
            <van-tabs v-model:active="tabActiveIndex" @change="tabChange">
                <van-tab title="公告信息"></van-tab>
                <van-tab title="节假日政策"></van-tab>
                <van-tab title="收费政策"></van-tab>
            </van-tabs>
        </div>

        <div class="content-box">
            <div
                    class="item"
                    v-for="(item,index) in noticeList"
                    :key="'notice'+index"
                    @click="noticeItemClick( item, index )"
            >
                <div class="item-title">{{ item.title }}</div>
                <div class="item-info">
                    <div class="item-info-view">浏览量：{{ item.views || 0 }}</div>
                    <div class="item-info-date">{{ item.issueTime }}</div>
                </div>
            </div>

            <empty v-if="!noticeList.length" text="暂无公告"></empty>
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
    import empty from '@/components/Empty.vue';
    import {load} from '../components/loading/loading.js';

    import {
        getNoticeList,
    } from '../api/index'

    export default defineComponent({
        name: 'home',
        props: {},
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            empty,
        },
        setup(props, ctx) {
            const $router = useRouter();
            const data = reactive({
                tabActiveIndex: 0,
                noticeList: [],
            });

            /**
             * 获取公告列表
             * @param index 类型下标
             */
            function getList(index) {
                load.show('拼命加载中...');

                getNoticeList(
                    {
                        type: ['GG', 'JJR', 'SF'][index],
                    }
                ).then((res) => {
                    if (res && res.code === 200) {
                        let list = res.data.list || [];
                        data.noticeList = list;
                    }
                    console.log("getList==>", res)
                }).finally(() => {
                    load.hide()
                })
            }

            /**
             * 公告点击事件
             * @param index
             */
            function noticeItemClick(item, index) {
                $router.push({
                    name: 'details',
                    params: {
                        id: item.id,
                    },
                });
            }

            /**
             * tab切换
             * @param index
             */
            function tabChange(index) {
                getList(index);
            }

            onMounted(() => {
                getList(data.tabActiveIndex);
            });

            return {
                ...toRefs(data),
                noticeItemClick,
                tabChange,
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

            :deep(.van-tabs__wrap) {
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
