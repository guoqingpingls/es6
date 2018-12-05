
mock部分
├── app.js // express 主程序脚本
├── bin
│   └── www // express 主程序执行文件
├── package.json
├── public
│   ├── css // 这里是构建后的css 文件
│   │   ├── index.css
│   │   ├── layout.css
│   │   ├── lottery.css
│   │   └── reset.css
│   └── js // 这里是构建后的js 文件
│       ├── cp.min.js
│       └── index.js
├── routes // 是 web 服务器的路由
│   ├── index.js // 这是主路由文件
│   └── users.js
└── views // 这里是构建后的ejs 文件
    ├── error.ejs
    └── index.ejs