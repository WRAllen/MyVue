# 这个一个Vue作为前端的项目

刚刚开始学习前后端分离的开发模式，鉴于之前没有经验，特地用这个项目来锻炼一下自己。 里面的代码可能不规范，希望大神们看到后及时提出这样我好改正，这个项目的目的就是为了学习，并且希望也能帮助到其他正在使用Vue构建前端的同学。 

这个本项目使用了Vue-cli脚手架进行搭建，前端模板使用了BootstrapVue，与后端的认证机制使用了临时的Token，Token保存在浏览器，后面有机会再介绍 

与后端通过符合RESTful规范的api接口进行交互数据

本项目的后端是我另一个项目使用Flask作为框架，地址在[这里](https://github.com/WRAllen/FlaskRESTful)

PS：之前没有接触过Vue，现在接触感觉是个很棒的框架

现在打算后期维护成一个博客的形式

## 安装项目需要的包
```
npm install
```

### 在目录先通过下面语句进行运行项目
```
npm run serve
```

## 部署后-刷新页面出现404问题
由于router的`mode: "history",`会导致刷新出现问题，如果不用history的化url又会多一个#出来
下面是解决方法
```
server {
	listen 80;
	server_name localhost;
	location / {
        # 下面是dist的地址
		root /home/work/MyVue/dist;
        # 添加这一句
		try_files $uri $uri/ @router;
		index index.html;
	}  
    # 添加下面这个
	location @router {
		rewrite ^.*$ /index.html last;
	}  
}

```
然后重启nginx
```
nginx -s reload  
```