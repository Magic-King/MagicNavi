# Magic Navigation



个人使用的一个导航页面。

利用json存储数据，静态页面展示。

## 运行指南

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

启动后访问 http://localhost:5173/

### 构建生产版本

```bash
npm run build
```

构建产物输出至 `dist/` 目录。

### 预览构建结果

```bash
npm run preview
```

### 自定义配置

搜索引擎配置：`src/config/searchEngines.ts`

网站路由配置：`src/config/sites.ts`

按照文件中已有的数据格式添加、修改或删除条目即可。`icon` 和 `description` 字段留空字符串 `""` 表示省略。

[^_^]:  http://www.dmaku.com/demo-jquery-1556.html
[^_^]:  http://www.dmaku.com/demo/jquery/2017080297102505/
