import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  show() {
    let div = document.getElementById('menu') as HTMLDivElement;
    div.classList.add('fade-in');
    div.classList.remove('fade-out');
  }

  hide() {

    let div = document.getElementById('menu') as HTMLDivElement;
    div.classList.add('fade-out');
    div.classList.remove('fade-in');
  }
}