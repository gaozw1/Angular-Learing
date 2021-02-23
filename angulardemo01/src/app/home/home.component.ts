import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public picUrl='https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'

  public list:any[]=[{
    "title":"我是111"
  },{
    "title":"我是222"
  },{
    "title":"我是333"
  },{
    "title":"我是444"
  }]


  public flag:boolean=true

  public orderStatus:number=3

  public attr:string = 'green'

  public today:any = new Date();

  public title:string = 'angular'
  constructor() { }

  ngOnInit(): void {
  }

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

  runEvent(e:any){
    let dom:any = e.target
    dom.style.color='red'
  }
}

