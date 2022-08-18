<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item>
      <span>高速地图</span>
      <template #icon="props">
        <img :src="props.active ? icon.earth_active : icon.earth_inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span>路况预约</span>
      <template #icon="props">
        <img :src="props.active ? icon.time_active : icon.time_inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o">
      <span>救援服务</span>
      <template #icon="props">
        <img :src="props.active ? icon.rescue_active : icon.rescue_inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o">
      <span>驾车路线</span>
      <template #icon="props">
        <img :src="props.active ? icon.route_active : icon.route_inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o">
      <span>周边生活</span>
      <template #icon="props">
        <img :src="props.active ? icon.around_active : icon.around_inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { proxy } = getCurrentInstance();
const router = useRouter();



const active = ref(0);
const icon = {
  earth_active: require('../../images/earth-active.png'),
  earth_inactive: require('../../images/earth.png'),

  rescue_active: require('../../images/rescue-active.png'),
  rescue_inactive: require('../../images/rescue.png'),
  route_active: require('../../images/route-active.png'),
  route_inactive: require('../../images/route.png'),
  time_active: require('../../images/time-active.png'),
  time_inactive: require('../../images/time.png'),
  around_active: require('../../images/around-active.png'),
  around_inactive: require('../../images/around.png'),
};
const onChange = index => {
const path = ['/map','/appointment','/rescue','/route','around'];
router.push({
        path: path[index]
      });
    console.log(index);
}
onMounted(() => {});
</script>

<style scoped lang="less">
.van-badge__wrapper img {
  width: 30px;
  height: 30px;
}
:deep(.van-tabbar-item__text) {
  font-size: 12px;
  font-weight: 600;
}

.footer {
  display: flex;
  width: 100%;
  li {
    width: 20%;
    text-align: center;
    font-size: 12px;
  }
}
</style>
