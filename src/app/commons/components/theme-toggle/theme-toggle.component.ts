import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  public mode:'LIGHT' | 'DARK' = 'LIGHT';

  constructor() { }

  toggleMode() {
    if (this.mode === 'LIGHT') {
      this.mode = 'DARK';
      this.darkMode();
    } else {
      this.mode = 'LIGHT';
      this.lightMode();
    }
  }

  lightMode() {
    document.documentElement.style.setProperty('--grandBg', '#e7e7e9');
    document.documentElement.style.setProperty('--bg', '#ffffff');
    document.documentElement.style.setProperty('--color300', '#d3d3d3');
    document.documentElement.style.setProperty('--color400', '#9d9d9f');
    document.documentElement.style.setProperty('--color500', '#646466');
    document.documentElement.style.setProperty('--color600', '#494949');
    document.documentElement.style.setProperty('--color700', '#1c1c25');
    document.documentElement.style.setProperty('--border-color', '#f4f4f6');
  }

  darkMode() {
    document.documentElement.style.setProperty('--grandBg', '#181818');
    document.documentElement.style.setProperty('--bg', '#29282b');
    document.documentElement.style.setProperty('--color300', '#1c1c25');
    document.documentElement.style.setProperty('--color400', '#494949');
    document.documentElement.style.setProperty('--color500', '#646466');
    document.documentElement.style.setProperty('--color600', '#9d9d9f');
    document.documentElement.style.setProperty('--color700', '#d3d3d3');
    document.documentElement.style.setProperty('--border-color', '#404040');
  }

  ngOnInit(): void {
  }
}
