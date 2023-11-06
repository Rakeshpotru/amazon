import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon';
  isHomeMenuOpen: boolean = false;
  ngOnInit(): void {
    console.log('home page- app')
  }

  // Function to toggle the "Home" submenu
  toggleHomeMenu() {
    this.isHomeMenuOpen = !this.isHomeMenuOpen;
  }

  
}
