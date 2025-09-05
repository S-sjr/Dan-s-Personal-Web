# 个人网站管理指南

这个文档将帮助你管理和更新这个个人网站，包括添加新的相册图片、演出条目等内容。即使你是编程新手，也能按照本指南轻松操作。

## 网站文件结构

首先，让我们了解一下网站的基本文件结构：

```
Dan_WebDesign/
├── index.html       # 网站首页
├── about.html       # 关于页面
├── media.html       # 媒体页面
├── schedule.html    # 演出页面（对应Calendar）
├── contact.html     # 联系页面
├── performance-gallery.html # 演出相册页面
├── personal-gallery.html    # 个人相册页面
├── css/
│   └── style.css    # 网站样式表
├── js/
│   ├── main.js      # 主要JavaScript代码
│   └── language.js  # 多语言功能代码
├── img/             # 图片文件夹
│   ├── Calendar/    # 演出图片文件夹
│   ├── Photo/       # 照片文件夹
│   └── ...
└── doc/             # 文档文件夹
```

## 如何添加新的相册图片

### 1. 添加个人相册图片

**步骤1：准备图片**
- 将你要添加的个人照片放入 `img/Photo/` 文件夹中（对应名称的文件夹，如：首页轮播图就放入LandingPageSlides文件夹中，相册图片就放入Photo文件夹的对应文件夹内）
- 建议图片尺寸适中（例如800x600像素，不超过2k,占用空间不超过10mb，太大的图片会影响加载速度），格式为JPG或PNG
- 图片名称建议使用英文，避免使用中文或特殊字符

**步骤2：更新个人相册页面**
- 打开 `personal-gallery.html` 文件
- 在页面中找到相册区域的代码，一般是一组 `<img>` 标签
- 在现有图片代码的适当位置添加新的图片标签，例如：

```html
<div class="gallery-item">
    <img src="img/Photo/你的图片名称.jpg" alt="图片描述">
</div>
```

### 2. 添加演出**相册**图片

**步骤1：准备图片**
- 将你要添加的演出照片放入 `img/Calendar/` 文件夹中
- 建议图片尺寸适中，格式为JPG或PNG
- 图片名称建议使用英文，避免使用中文或特殊字符

**步骤2：更新演出相册页面**
- 打开 `performance-gallery.html` 文件
- 找到相册区域的代码
- 添加新的图片标签，格式与上面相同

## 如何添加新的演出条目

### 步骤1：准备演出图片
- 将演出相关的图片放入 `img/Calendar/` 文件夹中
- 图片名称建议与演出名称相关，方便识别

### 步骤2：更新演出页面
- 打开 `schedule.html` 文件
- 在 `<div class="schedule-content-container">` 标签内添加新的演出条目
- 每个演出条目的代码格式如下：

```html
<!-- 演出名称 -->
<div class="about-content">
    <div class="about-image">
        <img src="img/Calendar/演出图片名称.png" alt="演出名称">
    </div>
    <div class="about-text">
        <h3>演出名称</h3>
        <p><strong>Date:</strong> <span>演出日期</span></p>
        <p><strong>Location:</strong> <span>演出地点</span></p>
        <a href="演出详情链接" class="btn-sm" target="_blank" data-i18n="schedule.detailsButton" style="font-style: normal;">Event Details</a>
    </div>
</div>
```

### 步骤3：注意事项
- 所以添加新条目时，要注意观察现有的排列顺序，保持交替效果
- 如果没有详情链接，可以将 `<a>` 标签的 `href` 属性改为 `"#"`，并添加 `btn-disabled` 类

## 如何修改网站文本内容

### 1. 修改页面上的固定文本
- 直接打开对应的HTML文件（如 `about.html`、`contact.html` 等）
- 找到要修改的文本内容，直接进行编辑即可
- 注意：如果文本内容旁边有 `data-i18n="xxx"` 属性，说明这是支持多语言的文本，请参考下面的多语言修改方法

### 2. 修改多语言文本
- 打开 `js/language.js` 文件
- 找到 `translations` 对象，里面包含了中文（'cn'）、英文（'en'）和德语（'de'）的翻译
- 根据需要修改对应的语言文本
- 例如，要修改首页标题的中文翻译：

```javascript
const translations = {
    'cn': {
        'hero.title': '这里是新的中文标题',  // 修改这里的文本
        // 其他翻译...
    },
    'en': {
        // 英文翻译...
    },
    'de': {
        // 德文翻译...
    }
};
```

## 如何更改网站样式

### 修改基本样式
- 打开 `css/style.css` 文件
- 这个文件包含了网站的所有样式定义
- 你可以修改颜色、字体大小、间距等样式

### 常见样式修改示例

1. **修改主题颜色**
在 `style.css` 文件开头的 `:root` 部分可以修改主题颜色：

```css
:root {
    --primary-color: #C8A97E;  /* 主色调 - 可以改为你喜欢的颜色 */
    --dark-color: #2C2C2C;     /* 深色 - 主要用于文字 */
    --white-color: #FFFFFF;    /* 白色 - 主要用于背景 */
    /* 其他颜色... */
}
```

2. **修改字体大小**
可以在相应的CSS选择器中修改 `font-size` 属性

3. **修改间距**
可以修改 `margin`（外边距）和 `padding`（内边距）属性

## 如何测试网站

网站使用了简单的HTTP服务器来运行。如果你想在本地预览网站的更改效果：

1. 打开文件资源管理器，进入 `Dan_WebDesign` 文件夹
2. 在地址栏输入 `cmd` 并按回车键，打开命令提示符
3. 在命令提示符中输入 `python -m http.server 8000` 并按回车键
4. 打开浏览器，访问 `http://localhost:8000` 即可查看网站

## 常见问题解答

**问：为什么我添加的图片不显示？**
答：请检查图片路径是否正确，确保文件名的大小写与HTML中的引用一致。

**问：如何添加新的页面？**
答：你可以复制现有的HTML文件，然后修改内容。记得更新导航菜单，使其能链接到新页面。

**问：如何修改网站的导航菜单？**
答：导航菜单在每个HTML文件中都有，你需要在所有文件中保持一致地修改。

## 重要提示

- 在修改任何文件之前，建议先备份原始文件
- 如果你不确定如何修改，可以先在一个文件上小范围测试
- 保存文件后，刷新浏览器即可看到更改效果
- 对于复杂的修改，可能需要了解基本的HTML、CSS和JavaScript知识

希望这个指南能帮助你轻松管理和更新你的个人网站！如果有任何问题，可以参考相关的Web开发教程或寻求专业帮助。