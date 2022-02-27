import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'ang1';
v = true
old = 'ძველი მნიშვნელობა'
new1= 'ახალი მნიშვნელობა'
videosrc = {
vid: '../assets/video/mov_bbb.mp4'

}


change1(){
this.v = !this.v
  }
}
