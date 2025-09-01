# EmailJS 配置指南

这个网站已经集成了通过 EmailJS 服务发送表单邮件的功能。要让这个功能正常工作，您需要按照以下步骤在 EmailJS 官网进行注册和配置。

## 什么是 EmailJS？
EmailJS 是一个允许您直接从客户端 JavaScript 发送电子邮件的服务，无需设置服务器端代码。

## 配置步骤

### 1. 注册 EmailJS 账户
1. 访问 EmailJS 官网：https://www.emailjs.com/
2. 点击 "Sign Up" 注册一个免费账户
3. 验证您的邮箱地址

### 2. 创建 Email Service
1. 登录后，在控制面板中点击 "Email Services" 选项卡
2. 点击 "Add New Service" 按钮
3. 选择您要使用的电子邮件提供商（如 Gmail、Outlook 等）
4. 按照提示授权 EmailJS 访问您的邮箱账户
5. 成功配置后，您将获得一个 `service_id`（类似于 `service_xxxxxxxxxx`）

### 3. 创建 Email Template
1. 在控制面板中点击 "Email Templates" 选项卡
2. 点击 "Create New Template" 按钮
3. 设计您的邮件模板，可以使用以下变量来填充表单数据：
   - `{{to_email}}` - 接收邮件的地址（已设置为 dandancountertenor@gmail.com）
   - `{{from_name}}` - 发件人姓名
   - `{{from_email}}` - 发件人邮箱
   - `{{subject}}` - 邮件主题
   - `{{message}}` - 邮件内容
4. 保存模板，您将获得一个 `template_id`（类似于 `template_xxxxxxxxxx`）

### 4. 获取 User ID
1. 在控制面板中点击 "Account" 选项卡
2. 在 "Account Settings" 部分找到您的 `user_id`（类似于 `user_xxxxxxxxxxxxxxxxxxxx`）

### 5. 修改网站代码
1. 打开 `contact.html` 文件，找到以下代码：
   ```javascript
   emailjs.init('user_your_user_id_here');
   ```
   将 `user_your_user_id_here` 替换为您的实际 User ID

2. 打开 `js/main.js` 文件，找到以下代码：
   ```javascript
   emailjs.init('user_your_user_id_here');
   ```
   和
   ```javascript
   emailjs.send('service_your_service_id_here', 'template_your_template_id_here', emailParams)
   ```
   分别替换为您的实际 User ID、Service ID 和 Template ID

## 测试表单
1. 保存所有修改
2. 打开网站的 contact.html 页面
3. 填写并提交表单
4. 检查您的邮箱是否收到测试邮件

## 注意事项
- 免费账户有发送邮件数量的限制（通常每天 200 封）
- 确保您的邮箱账户允许第三方应用程序访问（可能需要在邮箱设置中启用 "不太安全的应用程序" 或生成应用专用密码）
- 如果在配置过程中遇到问题，请参考 EmailJS 官方文档：https://www.emailjs.com/docs/

## 备选方案
如果您不想使用 EmailJS，也可以考虑以下方法：
1. 设置服务器端脚本（如 PHP、Node.js 等）处理表单提交
2. 使用其他第三方服务，如 Formspree、Getform 等

如有任何疑问，请随时联系网站开发者。