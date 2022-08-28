<template>
  <div class="box">
    <div class="pdf" style="font-size:13px;">
      pdf地址:
      <br>
      {{url}}
      <br>
      待调试
          <!-- <pdf ref="pdf" :src="url"></pdf> -->

    </div>
    
    <van-button round block type="primary" native-type="submit" class="btn"> 确认 </van-button>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, defineProps , getCurrentInstance, onMounted } from 'vue';
import { Toast, Popup } from 'vant';
import { useRoute } from 'vue-router';
import {getPdfUrl} from '../../api/index'


const route = useRoute();
const { proxy } = getCurrentInstance();
onMounted(()=>{
  //获取pdf的url
    getPdfUrl({id:route.query.id}).then(res=>{
      console.log(res,'@@@@@@@@');
      if(res && res.code == 200){
        url.value = res.data;
      }
    })

})
  const url = ref('https://sh1a.qingstor.com/jsjicha//JSGS/GZH/FILE/BILL/15150038735001vbq90000.pdf?access_key_id=XMSIHRFFBUGQNDGBBUMK&expires=1661163210&signature=D4%2BC4dNYHOWwMjgC%2B71Nj8bvYAuUW5VI0l%2FmH04ISPs%3D')

</script>
<style lang="less" scopde>
.box{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .pdf{
    width: 100%;
    height: 50%;
  }
  .btn{
    width:85%;
    margin-left:5%;
    position: absolute;
    bottom: 10%;
  }
}
</style>
