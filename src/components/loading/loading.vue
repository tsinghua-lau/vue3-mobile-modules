<template>
    <div class="loading" v-show="msg.show">
        <div>
            <img src="@/assets/loading.gif" alt="" srcset="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: Object,
        aaa: Number
    }
}
</script>

<style scoped lang="less">
.loading {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        color: #fff;
        padding: 6px 15px;
    }
}
</style>
