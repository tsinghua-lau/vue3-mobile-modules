<template>
    <!-- 公告详情 -->
    <div class="details-wrap">
        <div class="header-box">
            <div class="header-title">{{ detailsInfo.title || ' ' }}</div>
            <div class="header-info">
                <div class="header-info-date">{{ detailsInfo.issueTime || ' ' }}</div>
                <div class="header-info-view" v-show="detailsInfo.views">浏览量：{{ detailsInfo.views || '' }}</div>
            </div>
        </div>

        <div class="content-box" v-html="detailsInfo.issueContent"></div>
        <empty v-if="!detailsInfo.issueContent && !loading" text="暂无公告详情"></empty>
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
    import {useRoute} from "vue-router";
    import {
        getNoticeInfo,
    } from '../api/index'
    import {load} from "../components/loading/loading";
    import empty from '@/components/Empty.vue';

    export default defineComponent({
        name: 'index',
        props: {},
        components: {
            empty
        },
        setup(props, ctx) {
            const data = reactive({
                detailsInfo: {},
                loading: false,
            });
            const $route = useRoute();

            /**
             * 获取公告详情
             * @param id
             */
            function getData(id) {
                if (!id) {
                    return
                }

                load.show('拼命加载中...');
                data.loading = true;

                getNoticeInfo(
                    {
                        id: id,
                    }
                ).then((res) => {
                    if (res && res.code === 200) {
                        let info = res.data || {};
                        data.detailsInfo = info;
                    }
                    console.log("getInfo==>", res)
                }).finally(() => {
                    load.hide()
                    data.loading = false;
                })
            }

            onMounted(() => {
                getData($route.params.id);
            });

            return {
                ...toRefs(data),
            };
        },
    });
</script>

<style lang="less" scoped>
    .details-wrap {
        width: 100%;
        /*height: 100%;*/
        min-height: 100%;
        background-color: #F9F9FA;
        padding: 23px 18px;
        box-sizing: border-box;

        > .header-box {

            .header-title {
                color: #333333;
                font-size: 18.75px;
                font-weight: 600;
                line-height: 27px;
                text-align: justify;
            }

            .header-info {
                line-height: 28px;
                display: flex;
                justify-content: space-between;

                .header-info-date {
                    color: #666666;
                    font-size: 12px;
                }

                .header-info-view {
                    color: #666666;
                    font-size: 12px;
                }
            }
        }

        > .content-box {
            margin-top: 5px;
            color: #333333;
            font-size: 13.19px;
            line-height: 21px;
            text-align: justify;

        }
    }
</style>
