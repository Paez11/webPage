import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDarkTheme: boolean;

  constructor(private theme: ThemeService){
    this.theme.initTheme();
    this.isDarkTheme = this.theme.isDarkMode();
  }

  ngOnInit(): void {
  }

  public toggleTheme(){
    this.theme.update(this.isDarkTheme ? 'light-theme' : 'dark-theme')
      .then(() => {
        this.isDarkTheme = this.theme.isDarkMode();
      });
  }

}
