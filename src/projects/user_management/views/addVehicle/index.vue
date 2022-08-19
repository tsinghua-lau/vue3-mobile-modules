<template>
    <!-- 添加车辆 -->
    <div class="add-vehicle-wrap">

        <!--行驶证车辆照片-->
        <van-uploader
                class="add-item-box vehicle-img"
                v-model="fileList[0]"
                :max-count="1"
                :after-read="(file)=> afterRead(file, 1)">
            <div class="add-item-info">
                <div class="btn-add"></div>
                <div class="add-item-text">行驶证车辆照片</div>
            </div>
        </van-uploader>

        <!--行驶证正本照片-->
        <van-uploader
                class="add-item-box driving-license-img-1"
                v-model="fileList[1]"
                :max-count="1"
                :after-read="(file)=> afterRead(file, 2)">
            <div class="add-item-info">
                <div class="btn-add"></div>
                <div class="add-item-text">行驶证正本照片</div>
            </div>
        </van-uploader>

        <!--行驶证副本照片-->
        <van-uploader
                class="add-item-box driving-license-img-2"
                v-model="fileList[2]"
                :max-count="1"
                :after-read="(file)=> afterRead(file, 3)">
            <div class="add-item-info">
                <div class="btn-add"></div>
                <div class="add-item-text">行驶证副本照片</div>
            </div>
        </van-uploader>

        <div class="prompt-text">请确保照片清晰完整</div>

        <div class="btn-save is-disable" @click="handleSave()">保存</div>
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
    import {Toast, Uploader} from "vant";
    import {useRoute, useRouter} from 'vue-router';


    export default defineComponent({
        name: 'addVehicle',
        props: {},
        components: {
            [Uploader.name]: Uploader,
        },
        setup(props, ctx) {

            const data = reactive({
                fileList: [
                    [],
                    [],
                    [],
                ]
            });
            const $router = useRouter();

            /**
             * 文件上传
             */
            function afterRead(file, index) {
                console.log(file);
                file.status = 'uploading';
                file.message = '上传中...';

                setTimeout(() => {
                    file.status = 'success';
                    file.message = '上传成功';

                    console.log(data.fileList);
                }, 1000);
            }

            /**
             * 保存车辆
             */
            function handleSave() {
                Toast('保存成功');
                $router.back();
            }

            onMounted(() => {

            });

            return {
                ...toRefs(data),
                afterRead,
                handleSave,
            };
        },
    });
</script>

<style lang="less" scoped>
    .add-vehicle-wrap {
        width: 100%;
        min-height: 100%;
        background-color: #F6F7F8;
        overflow: hidden;
        overflow-y: auto;
        padding: 10.7px 7.6px 45px;
        box-sizing: border-box;

        > .add-item-box {
            width: 100%;
            height: 184.03px;
            border-radius: 14.58px;
            margin-bottom: 7px;
            padding: 17px 26px;
            box-sizing: border-box;
            background-color: #ffffff;

            /deep/ .van-uploader__wrapper {
                width: 100%;
                height: 100%;
                background-size: auto 148.61px !important;
                position: relative;

                .van-uploader__input-wrapper {
                    width: 100px;
                    height: 96px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                }

                .van-uploader__preview {
                    width: 100%;
                    height: 100%;
                    margin: 0;

                    .van-image {
                        width: 100%;
                        height: 100%;
                    }

                    .van-uploader__mask {
                        background-color: rgba(0, 0, 0, 0.5);
                    }
                }
            }

            .add-item-info {
                background-color: transparent;
                text-align: center;

                .btn-add {
                    display: inline-block;
                    width: 67px;
                    height: 67px;
                    background: url("../../images/btn-add.png") no-repeat center center;
                    background-size: 100% 100%;
                }

                .add-item-text {
                    color: #898E97;
                    font-size: 12px;
                    line-height: 16px;
                }
            }

            &.vehicle-img /deep/ .van-uploader__wrapper {
                background: url("../../images/img-vehicle.png") no-repeat center center;
            }

            &.driving-license-img-1 /deep/ .van-uploader__wrapper {
                background: url("../../images/img-driving-license-1.png") no-repeat center center;
            }

            &.driving-license-img-2 /deep/ .van-uploader__wrapper {
                background: url("../../images/img-driving-license-2.png") no-repeat center center;
            }
        }

        > .prompt-text {
            color: rgba(0, 0, 0, 0.5);
            font-size: 12.5px;
            text-align: center;
            line-height: 20px;
            margin-top: 44px;
        }

        > .btn-save {
            width: 100%;
            height: 41.67px;
            line-height: 41.67px;
            background: #4287fe;
            border-radius: 20.83px;
            font-size: 15.28px;
            color: #ffffff;
            font-weight: 600;
            margin-top: 15px;
            text-align: center;

            &.is-disable {
                background-color: #83B1FF;
            }
        }
    }
</style>