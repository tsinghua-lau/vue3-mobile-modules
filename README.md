# vue3.2移动端

# 客服项目
### svg
### less
### vant
### postcss-pxtorem
### 高德地图



# 目录结构


├─ config                  # 模块化配置
├─ public
│  ├─ favicon.ico
│  ├─ index.html
├─ src
│  ├─ assets               # 静态资源
│  ├─ components           # 全局组件
│  ├─ projects             # 子模块项目
│     ├─ ball_management   #开票管理
│     ├─ base_management   #基础管理
│     ├─ notace_management #通知管理
│     ├─ rescue_management #救援管理
│     └─ user_management   #用户管理
│  ├─ router               # 路由
│  ├─ store                # Vuex
│  ├─ styles               # 全局样式
│  ├─ SvgIcon              # svg图片
│  ├─ utils                # 全局公共方法
│  └─ views                # 所有页面
│  ├─ App.vue              # 入口页面
│  └─ main.js              # 入口文件
└─ vue.config.js           # vue-cli 配置

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
#### 启动用户管理
```
npm run dev:user 
```

### Compiles and minifies for production
```
npm run build:user
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).