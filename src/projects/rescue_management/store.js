import {createStore} from 'vuex';

export default createStore({
    state: {
        count: 0                 //救援状态   0：不在高速上  1：在高速上（可发起救援）   2：发起救援待相应   3：已相应救援车辆待发车   4：救援中
    },
    mutations: {
      setState(state,data){
        state.count = data;       //设置状态
      }
    }
});


