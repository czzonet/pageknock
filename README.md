# Template Full Stack

Typescript 全栈模板，包含前端、后端、数据库、测试、部署，开箱即用。

- Vue
- Express
- Postgresql
- Jest
- Jenkins

前端大体用 vue-cli 新建的配置，而后添加丰富了项目文件架构。后端挂载在`server`文件夹下。

## 安装

### 方式一

使用对应的[node-cli-startup](https://github.com/czzonet/node-cli-startup)脚手架自动下载本仓库并创建新项目

```sh
yarn global add node-cli-startup
node-cli-startup create your-new-project
```

### 方式二

直接克隆项目，并自行修改新项目信息。

## 使用

项目使用 VScode 作为 IDE，以其为例：

### 前端

新建一个终端进行调试：

```sh
yarn serve
```

### 后端

- 监听并编译 Typescript

  ```
  Menu--Terminal--Run Task...
  ```

* 启动新的终端进行调试

  ```
  Menu--Run--Start Debugging
  ```
