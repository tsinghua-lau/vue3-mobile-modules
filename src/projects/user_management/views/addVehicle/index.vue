<template>
    <!-- 添加车辆 -->
    <div class="add-vehicle-wrap">

        <div class="vehicle-box">
            <input type="text" v-model="vehicleNum" placeholder="填写车牌号码"/>
        </div>

        <div class="vehicle-color-box">
            <van-field
                    v-model="vehicleColor"
                    is-link
                    readonly
                    label=""
                    placeholder="填写车牌号码"
                    @click="showVehicleColorPicker = true"
            />
        </div>

        <!--行驶证车辆照片-->
        <div class="add-item-box vehicle-img">
            <div class="add-item-img"
                 :style="`${ fileList[0] ? ('background-image: url('+fileList[0]+')') : '' }`"></div>
            <div class="add-item-info" @click="uploadBtnChange(0)">
                <div class="btn-add"></div>
                <div class="add-item-text">行驶证车辆照片</div>
            </div>
        </div>

        <!--行驶证正本照片-->
        <div class="add-item-box driving-license-img-1">
            <div class="add-item-img"
                 :style="`${ fileList[1] ? ('background-image: url('+fileList[1]+')') : '' }`"></div>
            <div class="add-item-info" @click="uploadBtnChange(1)">
                <div class="btn-add"></div>
                <div class="add-item-text">行驶证正本照片</div>
            </div>
        </div>

        <!--行驶证副本照片-->
        <div class="add-item-box driving-license-img-2">
            <div class="add-item-img"
                 :style="`${ fileList[2] ? ('background-image: url('+fileList[2]+')') : '' }`"></div>
            <div class="add-item-info" @click="uploadBtnChange(2)">
                <div class="btn-add"></div>
                <div class="add-item-text">行驶证副本照片</div>
            </div>
        </div>

        <div class="prompt-text">请确保照片清晰完整</div>

        <div :class="`btn-save ${ !saveBtnStatus? 'is-disable' : '' }`" @click="handleSave()">保存</div>

        <!--车牌颜色选择弹出窗-->
        <van-popup v-model:show="showVehicleColorPicker" round position="bottom">
            <van-picker
                    :columns="vColorCheckList"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
            />
        </van-popup>
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
    import wx from 'weixin-js-sdk'
    import {
        getWxConfig,
        uploadImg,
        getImgUrl,
        addUserVehicle,
    } from '../../api/addVehicle/index';


    export default defineComponent({
        name: 'addVehicle',
        props: {},
        components: {
            [Uploader.name]: Uploader,
        },
        setup(props, ctx) {

            const data = reactive({
                vehicleNum: '',
                vehicleColor: '',
                fileList: [
                    '',
                    '',
                    '',
                ],
                ossPathList: [],
                saveBtnStatus: false,
                showVehicleColorPicker: false,
                vColorCheckList: [
                    '蓝色',
                    '黄色',
                    '黑色',
                    '白色',
                    '渐变绿色',
                    '黄绿双拼色',
                    '蓝白渐变色',
                    '临时牌照',
                    '绿色',
                    '红色'
                ],
                vColorList: [
                    '蓝色',
                    '黄色',
                    '黑色',
                    '白色',
                    '渐变绿色',
                    '黄绿双拼色',
                    '蓝白渐变色',
                    '临时牌照',
                    '',
                    '未确定',
                    '',
                    '绿色',
                    '红色'
                ],
            });
            const $router = useRouter();

            /**
             * 加载微信api
             */
            function initConfig() {
                let url = window.location.href.split("#")[0];

                getWxConfig(url).then((res) => {
                    if (res && res.code === 200) {
                        let info = res.data || {};

                        wx.config({
                            debug: false,
                            appId: info.appId,
                            timestamp: info.timestamp,
                            nonceStr: info.nonce,
                            signature: info.signature,
                            jsApiList: [
                                "chooseImage",
                                "previewImage",
                                "uploadImage",
                                "downloadImage"
                            ]
                        });
                    }
                })
            }

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
             * 上传图片
             * @param index 图片下标
             */
            function uploadBtnChange(index) {
                wx.ready(function () {
                    wx.chooseImage({
                        count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                        success: (res) => {
                            const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                            // _this.handleUpload(localIds,key)
                            console.log('chooseImage==>', res)
                            handleUpload(localIds, index)
                        },
                        fail: (error) => {

                        }
                    })
                })
            }

            function handleUpload(localIds, index) {
                let i = 0;
                let length = localIds.length;
                console.log('localIds[i]==>', localIds[i])

                function upload() {
                    wx.uploadImage({
                        localId: localIds[i],
                        success: res => {

                            uploadImg(
                                {
                                    // id: res.serverId
                                    id: [
                                        '7lwQbHhXR95yicTJtBWak-STkb73l6Zh4HLOGcT6U9HnuSK9qy76_VmqNWq7GemZ',
                                        '7lwQbHhXR95yicTJtBWakxjlXLzG0YANrrhm-94G5flkfVZlkL1A8yJt45lSvkEN',
                                        '7lwQbHhXR95yicTJtBWakxjlXLzG0YANrrhm-94G5flkfVZlkL1A8yJt45lSvkEN',
                                    ][index]
                                }
                            ).then((res) => {
                                console.log("uploadImg==>", res)
                                if (res && res.code === 200) {
                                    getPreviewImageUrl(res.detail);
                                    data.ossPathList[index] = res.detail;
                                }
                            })
                        },
                        fail: error => {
                        }
                    });
                }

                // 获取图片预览地址
                function getPreviewImageUrl(path) {
                    getImgUrl(
                        {
                            ossPath: path
                        }
                    ).then((res) => {
                        if (res && res.code === 200) {
                            console.log("getImgUrl==>", res)
                            data.fileList[index] = res.detail;

                            checkUserInput();
                        }
                    })
                }

                upload();
            }

            /**
             * 保存车辆
             */
            function handleSave() {

                addUserVehicle(
                    {
                        "fVcAccount": "15850501445",
                        "fVcVehicle": "苏A9H70F_0",
                        "fVcSvehicle": "苏A9H70F",
                        "fVcVehicleColor": "0",
                        "fVcDlvObjecid": "TEST/JSGS/GZH/FILE/IMG/86abc462255e4924b147c01e74602435.jpg",
                        "fVcDlaObjecid": "TEST/JSGS/GZH/FILE/IMG/313355f2006c4f838eae029d6c29188e.jpg",
                        "fVcDlbObjecid": "TEST/JSGS/GZH/FILE/IMG/313355f2006c4f838eae029d6c29188e.jpg"
                    }
                ).then((res) => {
                    if (res && res.code === 200) {
                        console.log("addUserVehicle==>", res)
                    }
                })
                // Toast('保存成功');
                // $router.back();
            }

            /**
             * 校验保存按钮状态
             */
            function checkUserInput() {
                if (data.fileList[0] && data.fileList[1] && data.fileList[2]) {
                    data.saveBtnStatus = true;
                } else {
                    data.saveBtnStatus = false;
                }
            }

            /**
             * 选择车牌颜色
             */
            function onConfirm(value) {
                console.log("value==>", value)
                data.vehicleColor = value;
                data.showVehicleColorPicker = false;
            }

            onMounted(() => {
                initConfig();
            });

            return {
                ...toRefs(data),
                afterRead,
                handleSave,
                uploadBtnChange,
                onConfirm,
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
        padding: 10.7px 7.6px 21.8px;
        box-sizing: border-box;

        > .vehicle-box {
            height: 50px;
            background: rgba(255, 255, 255, 0.90);
            border: 0.5px solid #e8e8e8;
            border-radius: 14.58px;
            box-shadow: -1.74px 0px 6.94px 1.74px rgba(59, 118, 239, 0.10);
            box-sizing: border-box;
            margin-bottom: 7px;

            > input {
                width: 100%;
                height: 100%;
                border: 0;
                background-color: transparent;
                padding-left: 14px;
                font-size: 15.28px;
                color: #000000;
                line-height: 49px;

                &::placeholder {
                    color: #a0a0a0;
                }
            }
        }

        > .vehicle-color-box {
            height: 50px;
            background: rgba(255, 255, 255, 0.90);
            border: 0.5px solid #e8e8e8;
            border-radius: 14.58px;
            box-shadow: -1.74px 0px 6.94px 1.74px rgba(59, 118, 239, 0.10);
            box-sizing: border-box;
            margin-bottom: 7px;

            .van-cell {
                width: 100%;
                height: 100%;
                border: 0;
                background-color: transparent;
                padding: 0;
                padding-left: 14px;
                font-size: 15.28px;
                color: #000000;
                line-height: 49px;

                :deep(.van-field__control) {
                    border: 0;
                    background-color: transparent;
                    font-size: 15.28px;
                    color: #000000;
                    line-height: 49px;

                    &::placeholder {
                        color: #a0a0a0;
                    }
                }

                :deep(.van-badge__wrapper) {
                    height: 100%;
                    line-height: 49px;
                    width: 30px;
                }

            }
        }

        > .add-item-box {
            width: 100%;
            height: 166.67px;
            border-radius: 14.58px;
            margin-bottom: 7px;
            padding: 15px 26px;
            box-sizing: border-box;
            background-color: #ffffff;
            position: relative;

            .add-item-img {
                width: 100%;
                height: 100%;
                background-size: contain !important;
                position: relative;
            }

            .add-item-info {
                position: absolute;
                width: 180px;
                height: 87px;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                text-align: center;
                cursor: pointer;

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
                    line-height: 20px;
                }
            }

            &.vehicle-img .add-item-img {
                background: url("../../images/img-vehicle.png") no-repeat center center;
            }

            &.driving-license-img-1 .add-item-img {
                background: url("../../images/img-driving-license-1.png") no-repeat center center;
            }

            &.driving-license-img-2 .add-item-img {
                background: url("../../images/img-driving-license-2.png") no-repeat center center;
            }
        }

        > .prompt-text {
            color: rgba(0, 0, 0, 0.5);
            font-size: 12.5px;
            text-align: center;
            line-height: 32.3px;
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
            margin-top: 7px;
            text-align: center;

            &.is-disable {
                background-color: #83B1FF;
            }
        }
    }
</style>
