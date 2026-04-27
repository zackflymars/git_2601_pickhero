# 王者荣耀英雄选择器 🎮

> 一个基于 Vue.js 3 构建的王者荣耀英雄筛选工具

简体中文 | [English](README.en.md)

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/zackflymars/git_2601_pickhero)](https://github.com/zackflymars/git_2601_pickhero)
[![GitHub forks](https://img.shields.io/github/forks/zackflymars/git_2601_pickhero)](https://github.com/zackflymars/git_2601_pickhero)

## 📖 项目简介

这是一个使用 Vue.js 3 构建的王者荣耀英雄选择器应用。用户可以通过不同的筛选条件快速找到想要的英雄，并查看英雄详情。

**在线演示**：即将上线

## ✨ 功能特点

### 🔍 英雄筛选

- **综合筛选**：本周免费、新手推荐
- **定位筛选**：全部、坦克、战士、刺客、法师、射手、辅助
- **实时过滤**：根据选中的条件即时显示匹配的英雄
- **智能高亮**：筛选按钮自动切换，不同分类互不影响

### 🔎 英雄搜索

- **关键词搜索**：输入英雄名称实时搜索
- **高亮显示**：搜索结果中关键词以红色高亮显示
- **智能匹配**：搜索时自动重置筛选条件
- **防污染处理**：使用独立的 `highlightName` 属性，避免数据污染

### 🖼️ 英雄展示

- 展示英雄头像和名称
- 点击英雄卡片跳转到王者荣耀官网详情页
- 响应式布局，适配不同屏幕尺寸

### 🎨 界面设计

- 简洁直观的用户界面
- 清晰的分类标签
- 流畅的交互体验

## 🛠️ 技术栈

- **前端框架**：Vue.js 3 (Composition API)
- **HTTP 客户端**：Axios
- **样式**：原生 CSS3
- **构建工具**：原生 JavaScript（无需构建工具）

## 📁 项目结构

```
git_2601_pickhero/
├── index.html              # 主页面
├── src/
│   ├── js/
│   │   └── index.js        # Vue 应用主逻辑
│   └── assets/
│       └── index.css       # 样式文件
├── package.json            # 项目配置文件
├── LICENSE                 # MIT 许可证
├── README.md               # 项目说明文档（中文）
└── README.en.md            # 项目说明文档（英文）
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动项目

由于使用原生 JavaScript，无需构建，可直接在浏览器中打开 `index.html` 文件。

或者使用本地服务器：

```bash
# 使用 npx（推荐）
npx serve .

# 或使用 Python
python -m http.server 8080

# 或使用 Node.js
npx http-server
```

然后访问：
- npx serve: http://localhost:3000
- Python: http://localhost:8080
- http-server: http://localhost:8080

## 💡 使用说明

### 筛选英雄

1. **综合筛选**
   - 点击"本周免费"：显示本周免费英雄
   - 点击"新手推荐"：显示新手推荐英雄

2. **定位筛选**
   - 点击"全部"：显示所有英雄
   - 点击具体职业（坦克、战士、刺客、法师、射手、辅助）：显示对应职业的英雄

### 搜索英雄

1. 在搜索框中输入英雄名称
2. 搜索结果中关键词会以红色高亮显示
3. 搜索会自动重置筛选条件为"定位-全部"
4. 清除搜索内容后恢复筛选状态

### 查看英雄详情

点击任意英雄卡片，将跳转到王者荣耀官网的英雄详情页面。

## 🔌 数据来源

英雄数据通过第三方 API 获取：

- **API 地址**：`http://project.x-zd.net:3001/apis/herolist`
- **英雄头像**：`https://game.gtimg.cn/images/yxzj/img201606/heroimg/{ename}/{ename}.jpg`
- **英雄详情**：`https://pvp.qq.com/web201605/herodetail/{ename}.shtml`

## 📝 开发笔记

### 核心逻辑

1. **状态管理**
   - `heroList`：存储所有英雄数据
   - `query`：存储当前筛选条件 `{key, value}`
   - `keyword`：存储搜索关键词
   - `typeList`：定义所有筛选类型和选项
   - `fillterHeroList`：计算属性，综合筛选和搜索过滤

2. **筛选逻辑**
   - `key='zonghe'`：按 `pay_type` 筛选（本周免费、新手推荐）
   - `key='dingwei'`：按 `hero_type` 或 `hero_type2` 筛选（职业分类）
   - 筛选时自动清除搜索关键词

3. **搜索逻辑**
   - 搜索时使用 `highlightName` 属性存储高亮版本
   - 使用 `new RegExp(keyword, 'g')` 全局匹配关键词
   - 避免数据污染：不在原始 `cname` 属性上修改

4. **按钮高亮逻辑**
   - 同时检查 `query.key` 和 `query.value`
   - 确保只有当前分类的按钮高亮
   - 不同分类的按钮互不影响

5. **响应式设计**
   - 使用 CSS Flexbox 实现响应式布局
   - 英雄列表自动换行显示

### API 调用

```javascript
async getHeroList() {
  const res = await axios.get('http://project.x-zd.net:3001/apis/herolist')
  this.heroList = res.data.data
}
```

## 🎯 后续优化方向

- [ ] 实现英雄详情弹窗
- [ ] 添加英雄技能介绍
- [ ] 支持皮肤筛选
- [ ] 添加收藏功能
- [ ] 优化移动端体验
- [ ] 添加英雄出装推荐
- [ ] 支持铭文推荐

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

**免责声明**：本项目仅供学习交流使用，英雄素材和版权归腾讯公司所有。

## 👤 作者

**Zack Mars**

- GitHub: [zackflymars](https://github.com/zackflymars)
- Gitee: [Zack1206](https://gitee.com/Zack1206)

## 🙏 致谢

- 腾讯公司 - 王者荣耀游戏及 API
- Vue.js 团队 - 优秀的前端框架
- 字节跳动 - Trae IDE 开发工具

## ⭐ 支持

如果这个项目对你有帮助，请给我一个 Star！

[![Star History](https://api.star-history.com/svg?repo=zackflymars/git_2601_pickhero&type=Timeline)](https://star-history.com/#zackflymars/git_2601_pickhero&Timeline)

---

**Made with ❤️ by Zack Mars**
