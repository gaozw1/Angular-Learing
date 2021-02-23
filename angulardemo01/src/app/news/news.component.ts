import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public title:string = '新闻组件'

  public arr:any[] = [11,'zhang',true]

  public items:Array<string>=['aa','bb','cc']

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

  public content="<h2>我是html标签</h2>"

  public userinfo:any={
    username:"张三",
    age:"25"
}

  public message:string;
  constructor() {
    this.message = '新的属性'

    console.log(this.message);
  }

  ngOnInit(): void {
  }

}
