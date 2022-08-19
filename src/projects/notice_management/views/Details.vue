<template>
    <!-- 公告详情 -->
    <div class="details-wrap">
        <div class="header-box">
            <div class="header-title">{{ detailsInfo.title }}</div>
            <div class="header-info">
                <div class="header-info-date">{{ detailsInfo.date }}</div>
                <div class="header-info-view">浏览量：{{ detailsInfo.view }}</div>
            </div>
        </div>

        <div class="content-box">
            <div class="row" v-for="(item, index) in detailsInfo.text" :key="'details'+index">{{ item }}</div>
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
    import {useRoute} from "vue-router";

    export default defineComponent({
        name: 'index',
        props: {},
        components: {},
        setup(props, ctx) {
            const data = reactive({
                detailsInfo: {
                    title: '尖于丁伙枢纽部分匝道扩建施工期间限车辆通知公告',
                    view: '6000',
                    date: '2022-08-10',
                    text: [
                        '凡是用来宣布有关国家的政治、经济、军事、科技、教育人事、外交等方面需要告知全民的重要事项的，都属此类公告。常见的有国家重要领导岗位的变动，领导人的出访或其他重大活动，重要科技成果的公布，重要军事行动等等。如中国人大常务委员会关于确认中国人大代表资格的公告，新华社受权宣布中国将进行向太平洋发射运载火箭试验的公告，都属此类公告。',
                        '凡是用来宣布有关国家的政治、经济、军事、科技、教育人事、外交等方面需要告知全民的重要事项的，都属此类公告。常见的有国家重要领导岗位的变动，领导人的出访或其他重大活动，重要科技成果的公布，重要军事行动等等。如中国人大常务委员会关于确认中国人大代表资格的公告，新华社受权宣布中国将进行向太平洋发射运载火箭试验的公告，都属此类公告。 ',
                        '凡是用来宣布有关国家的政治、经济、军事、科技、教育人事、外交等方面需要告知全民的重要事项的，都属此类公告。常见的有国家重要领导岗位的变动，领导人的出访或其他重大活动，重要科技成果的公布，重要军事行动等等。如中国人大常务委员会关于确认中国人大代表资格的公告，新华社受权宣布中国将进行向太平洋发射运载火箭试验的公告，都属此类公告。 ',
                    ]
                }
            });
            const $route = useRoute();

            onMounted(() => {
                console.log($route.params);
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

            .row {
                color: #333333;
                font-size: 13.19px;
                line-height: 21px;
                text-align: justify;
            }

        }
    }
</style>