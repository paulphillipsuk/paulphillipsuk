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

  async show() {
    let div = document.getElementById('menu') as HTMLDivElement;
    div.classList.add('visible');
    div.classList.add('fade-in');

    div.classList.remove('fade-out');

  }

  async hide() {
    let div = document.getElementById('menu') as HTMLDivElement;
  
    div.classList.add('fade-out');  
    await this.delay(1300);
    div.classList.add('hidden');
    div.classList.remove('visible','fade-in');
   
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
}