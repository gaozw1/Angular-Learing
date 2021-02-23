# angular

## 一、流程

1. 安装

```sh
npm install -g @angular/cli
ng v
```

2. 新建项目

- 新建项目并安装依赖
```sh
ng new Project1
```
或
- 新建项目但不安装依赖
```sh
ng new Project1 --skip-install
```

3. 启动项目

- 启动项目并通过 http://localhost:4200/ 访问页面
```bash
ng serve
```
或
- 启动项目并自动打开页面
```bash
ng serve --open
```
4. 开发工具

本教程使用vscode，并且安装上angular插件。
## 二、目录解析

```
angulardemo01/
├── angular.json
├── e2e                         端对端测试文件
│   ├── protractor.conf.js      
│   ├── src
│   └── tsconfig.json
├── karma.conf.js       
├── package.json                
├── package-lock.json
├── README.md
├── src
│   ├── app                         组件和根模块
│   │   ├── app.component.scss
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts           根模块
│   ├── assets                      静态资源文件
│   ├── environments
│   ├── favicon.ico
│   ├── index.html                  显示页面
│   ├── main.ts                     项目入口
│   ├── polyfills.ts                填充库
│   ├── styles.scss                 公共样式文件
│   └── test.ts                     测试入口文件
├── .browserslistrc                 浏览器支持配置文件
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```
## 三、组件及模板

1. 查看创建项目命令
```bash
ng g
```

2. 创建组件，并设置文件夹,此时会在app文件夹中生成news，并且自动在`app.module.ts`中自动引入

```bash
ng g component news
```

3. 引入自定义组件

在`app.component.html`中引入
```html
<app-news></app-news>
```

### 模板里绑定数据

1. 定义属性

在`news.component.ts`的类中定义属性、对象等
```ts
public title:string="我是title"

public userinfo:any={
    username:"张三",
    age:"25"
}
```
在`news.component.html`中可以使用以下方式调用
```html
<h1>{{title}}</h1>

<h2>{{userinfo.username}}</h2>
```
> 声明属性的几种方式：
> public        公有（默认）         可以在类内、外使用
> protected     保护类型             在当前类和子类里可以访问
> private       私有                在当前类访问

2. 属性赋值

在`news.component.ts`的类中定义属性但不赋值，然后可以在方法或者构造函数中赋值
```ts
public message:any;

constructor(){
    this.message = '赋值新的属性'

    console.log(this.message);
    
}

```

### 模板里绑定属性
在`news.component.html`中的标签里加上：
title若是静态属性，则可以直接写`title`或`[title]`，若是动态属性，则写`[title]`

```html
<div title="我是悬浮属性">

  鼠标放上出现悬浮字幕
</div>

<div [title]="userinfo.age">
  年龄
</div>
```

### 模板里绑定HTML（可以解析HTML标签）

在`news.component.ts`中定义
```ts
public content="</h2>我是html标签</h2>"
```

在`news.component.html`中解析
```html
<span [innerHTML]="content"></span>
```

### 模板里允许做简单的运算
在`news.component.html`中
```html
1+2={{1+2}}
```

## 四、数据循环 【*ngFor】

在`news.component.ts`中定义数组
```ts
public arr:any[] = [11,'zhang',true]
//数组另一种定义方法
public items:Array<string>=['aa','bb','cc']

//定义userlist数组
  public userlist:any[]=[{
    name:'张三',
    age:'23'
},{
    name:'李四',
    age:'24'
},{
    name:'王五',
    age:'25'
}]

//定义phone数组
  public phone:any[]=[{
    cate:"iphone",
    list:[
      {
        title:'x',
        price:'1000'
    },{
      title:'11',
      price:'1100'
    },{
      title:'12',
      price:'1200'
    }]
  },{
    cate:"huawei",
    list:[
      {
        title:'p20',
        price:'2000'
    },{
      title:'p30',
      price:'3000'
    },{
      title:'p40',
      price:'4000'
    }]
  }]
```

在`news.component.html`中循环输出

```html
<ul>
  <li *ngFor="let item of arr">
    {{item}}
  </li>
</ul>

<ol>
  <li *ngFor="let item of items">
    {{item}}
  </li>
</ol>

<!-- 循环userlist数组 -->
<ol>
  <li *ngFor="let item of userlist">
    {{item.name}}----{{item.age}}
  </li>
</ol>


<!-- 循环phone数组 -->
<ul>
  <li *ngFor="let item of phone">
    <h2>{{item.cate}}</h2>
    <ol>
      <li *ngFor="let info of item.list">
          {{info.title}}--{{info.price}}
      </li>
    </ol>
  </li>
</ul>
```
**解释**：将`arr`中的元素赋值给`item`

## 五、模板中引入图片

1. 创建一个`home`组件

```bash
ng g component home
```
2. 在`home.component.html`中引入`home`组件

```html
<app-home></app-home>
```

3. 引用本地图片：

在`src/assets/image`中添加图片，并在`app.component.html`中引用

```html
<img src="assets/image/home.jpeg" alt="home">
```

4. 引用外部图片：

在`home.component.ts`中定义外部图片
```ts
public picUrl='https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'
```
在`home.component.html`中添加文件
```html
<img [src]="picUrl" alt="baidu" class='blue'>
```

在`home.component.scss`中添加图片样式
```scss
.blue {
  background-color: blue;
}
```

## 六、循环数据，显示数据的索引
在`home.component.ts`中定义外部图片
```ts
  public list:any[]=[{
    "title":"我是111"
  },{
    "title":"我是222"
  },{
    "title":"我是333"
  },{
    "title":"我是444"
  }]
```

在`home.component.html`中
```html
<ul>
  <li *ngFor="let item of list;let key = index">
    {{key}}---{{item.title}}
  </li>
</ul>
```

## 七、条件判断【*ngIf】

在`home.component.ts`中
```ts
   public flag:boolean=true
```
在`home.component.html`中
```html
<div *ngIf="flag">
  <img src="assets/image/safari.jpg">
</div>

<div *ngIf="!flag">
  <img src="assets/image/home.jpeg">
</div>

```

## 八、【*ngSwitch】
在`home.component.ts`中
```ts
  public orderStatus:number=3
```
在`home.component.html`中输入`ngs`即可自动填充
```html
<div [ngSwitch]="orderStatus">
  <div *ngSwitchCase="1">已经支付</div>
  <div *ngSwitchCase="2">支付并发货</div>
  <div *ngSwitchCase="3">已经收货</div>
  <div *ngSwitchDefault>无效</div>
</div>

```

## 九、其他属性【ngClass】、【ngStyle】

**ngClass**

在`home.component.scss`中
```scss
.red {
  color: red;
}

.green {
  color: green;
}

.pink {
  color: pink;
}

```

在`home.component.html`中
```html
<div class="red">
  使用class="red"，颜色固定
</div>
<div [ngClass]="{'green':true,'yellow':false}">
  使用true和false控制样式
</div>
<div [ngClass]="{'green':!flag,'pink':flag}">
  使用一个变量来控制样式
</div>
```

**循环数组，让数组的第一个元素的样式为red**

```html
<li *ngFor="let item of list;let key=index" [ngClass]="{'red': key==0,'pink':key==1}">
  {{key}}---{{item.title}}
</li>
```

**ngStyle**
在`home.component.ts`中
```ts
  public attr:string = 'green'
```

在`home.component.html`中
```html
<!-- 一般写法 -->
<p style="color: red;">这是个p</p>

<!-- 使用[ngStyle]，常量都要用引号 -->
<p [ngStyle]="{'color': 'red'}">这是个p</p>

<!-- 变量则不需要引号 -->
<p [ngStyle]="{'color': attr}">这是p标签</p>

```
## 十、管道
在`home.component.ts`中
```ts
  public today:any = new Date();
```

在`home.component.html`中
```html
<!-- 格式化时间 -->
{{today | date:'yyyy-MM-dd HH:mm:ss'}}
```

[其他参考](http://bbs.itying.com/topic/5bf519657e9f5911d41f2a34)

## 十一、事件

1. 执行事件
在`home.component.ts`中
```ts
  public title:string = 'angular'

  run(){
    alert('执行方法')
  }

  getDate(){
    alert(this.title)
  }

  setDate(){
    this.title = 'typescript';
    alert(this.title);
  }
```

在`home.component.html`中
```html
<button (click)='run()'>执行事件</button>
<br>

<button (click)='getDate()'>获取数据</button>
<button (click)='setDate()'>改变数据</button>
{{title}}
```

2. 表单事件 事件对象

在`home.component.ts`中
```ts

```

在`home.component.html`中
```html

```
- 键盘监听
在`home.component.ts`中
```ts
  public key:any;
  public keydown:any;
  public keyup:any;
  keyDown(e: any){
    this.key = e
    this.keydown = e.target.value
    console.log(e)
  }

  keyUp(e: any){
    this.key = e
    this.keyup = e.target.value
    console.log(e)
  }
```

在`home.component.html`中
```html
键盘监听：{{key.key}}---{{key.keyCode}}
<br>
<p *ngIf="key.keyCode==13">按了一下回车</p>
keyDown:按下接收
<input type="text" (keydown)="keyDown($event)">
{{keydown}}
<br>
keyUp:松开接收
<input type="text" (keyup)="keyUp($event)">
{{keyup}}
```

a. 在输入框中可以监听到键盘按键，在控制台中可以监听到键盘输入信息。
b. 回车键对应的keyCode为13，可通过keyCode判断是否按下回车
c. 在输入中文时，keydown按下键盘监听会慢一拍，此时使用keyup可以松开键盘监听。按住某个字符连续输入就会发现不同
d. key.target获取dom对象


- 事件监听
在`home.component.ts`中
```ts
  runEvent(e:any){
    let dom:any = e.target
    dom.style.color='red'
  }
```

在`home.component.html`中
```html
<button (click)='runEvent($event)'>改变颜色</button>

```

## 十二、双向数据绑定MVVM   只是针对表单 
在`app.module.ts`中引入,并在imports节点中声明
```ts
improt { FormsModule } from '@angular/froms';


@NgModule({

  imports: [

    FormsModule
  ]

})
```