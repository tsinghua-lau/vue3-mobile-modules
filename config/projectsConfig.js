const config = {
  //茉莉管家
  app_mlgj: {
    pages: {
      index: {
        entry: "src/applications/app_mlgj/main.js",
        template: "public/index.html",
        filename: "index.html",
        title: '茉莉管家',
      }
    },
    devServer: {
      port: 8080, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      overlay: {
        warnings: true,
        errors: true
      },
      // 设置代理
      proxy: {
        '^/api': {
          target: 'https://zhfwq.jchc.cn/isa_server/services',
          ws: false,
          pathRewrite: {
            '^/api': '/'
          },
          logLevel: 'debug'
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
  //用户管理
  user_management: {
    pages: {
      index: {
        entry: "src/projects/user_management/main.js",
        template: "public/index.html",
        filename: "index.html",
        title: 'Index Page',
      }
    },
    devServer: {
      port: 8080, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      overlay: {
        warnings: true,
        errors: true
      },
      // 设置代理
      proxy: {
        '^/api': {
          target: 'https://zhfwq.jchc.cn/isa_server/services',
          ws: false,
          pathRewrite: {
            '^/api': '/'
          },
          logLevel: 'debug'
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
  //通知公告管理
  notice_management: {
    pages: {
      index: {
        entry: "src/projects/notice_management/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    },
    devServer: {
      port: 8081, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      // 设置代理
      proxy: {
        "/eopenhapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
  //开票管理
  bill_management: {
    pages: {
      index: {
        entry: "src/projects/bill_management/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    },
    devServer: {
      port: 8082, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      // 设置代理
      proxy: {
        "/eopenhapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
  //救援管理
  rescue_management: {
    pages: {
      index: {
        entry: "src/projects/rescue_management/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    },
    devServer: {
      port: 8082, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      // 设置代理
      proxy: {
        "/eopenhapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
  //基础服务管理
  base_management: {
    pages: {
      index: {
        entry: "src/projects/base_management/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    },
    devServer: {
      port: 8080, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      // 设置代理
      proxy: {
        "/eopenhapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
};
module.exports = config;