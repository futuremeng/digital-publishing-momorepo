<!--
 * @Author: be_loving@163.com 
 * @Date: 2024-12-22 13:04:59
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-25 09:39:07
 * @FilePath: /digital-publishing-monorepo/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 一栈式主分前端架构

## 项目简介

本项目旨在构建一个适用于数字出版场景的高效、可扩展的一栈式主分前端架构，特别适用于大型项目或微前端架构。通过结合 Monorepo、Federation 和 defineAsyncComponent 技术，我们创建了一个灵活且易于管理的开发环境。

目前本项目能够正常运行，但可能会发生较大的调整，不建议直接作为生产基础。

本项目文档因精力有限，不一定能保持同步更新，见谅。

非常欢迎加入开源共建团队。欢迎提issue和pr。

<img src="1750815463112.png"/>


## 目录结构
├── apps/ 
│ └── one-main/ # 主应用（门户） 
│ └── package.json 
├── packages/ 
│ ├── one-basic/ # 分应用之一 
│ │ └── package.json 
│ └── ... # 其他分应用 
├── package.json 

# 根 package.json └── pnpm-workspace.yaml # pnpm 工作区配置文件


### 主要模块说明

- **one-main**：作为主应用，提供最终用户访问的门面。
- **one-basic**：作为分应用之一，提供远程组件及其单独演示，方便调试。后续还会有更多分应用如 `one-beau` 等。
- **shared-components**：共享组件库（未来可能添加）。

## 技术栈

- **Monorepo**：使用 pnpm 进行多包管理，确保统一的代码风格和配置，简化跨项目依赖管理。
- **Federation**：基于 Webpack 5 的 Module Federation 插件实现模块联邦，允许多个独立的应用程序或微前端共享模块。
- **defineAsyncComponent**：利用 Vue 3 提供的异步组件 API 实现按需加载远程组件，优化初始加载时间和性能。

## 开发工具

- **pnpm**：用于管理多个 npm 包，提高依赖解析速度。
- **Nx**（可选）：提供丰富的工具链来优化构建和测试流程。
- **Vite**：用于构建和开发服务器，替代传统的 SSR 架构。

## 使用步骤

### 安装依赖

在项目根目录下运行以下命令以安装所有依赖：

```bash
pnpm install
```

### 启动开发服务器

#### 启动所有应用
``` bash
pnpm all run dev
```

#### 分别启动主应用和分应用的开发服务器：

##### 启动主应用
``` bash
cd apps/one-main
pnpm run dev
```
或
``` bash
pnpm main run dev
```

##### 启动分应用
``` bash
cd packages/one-basic
pnpm run dev
```

或
``` bash
pnpm basic run dev
```

### 构建项目
使用 Lerna 或 Nx 进行统一构建：

#### 使用 Lerna 构建
``` bash
lerna bootstrap
lerna run build --scope=one-main
lerna run build --scope=one-basic
```

#### 或者使用 Nx 构建
``` bash
nx build one-main
nx build one-basic
```

## 部署
可以分别部署主机应用和远程应用，确保每个应用可以独立更新和维护。

## 未来计划
将 UI 框架从 Vant 替换为 Naive UI，以获得更简洁的风格。
增加更多分应用，丰富系统功能。
进一步优化模块联邦配置，提升性能。

## 贡献指南
欢迎任何开发者参与贡献！如果您有任何问题或建议，请随时提交 Issue 或 Pull Request。

## 许可证
本项目采用 MIT 许可证，详情请参阅 LICENSE 文件。
