import { Component, OnInit } from '@angular/core';
import { icon, IconName } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  template: `
      <div class="icon-container"></div>
      <button (click)="generateRandomIconDelayed()">Get Random Icon</button>
  `
})
export class AppComponent implements OnInit {
  myLibrary: any;
  fasArray: string[];
  iconContainer: HTMLElement | null;

  constructor() {
    library.add(fas);
    this.myLibrary = library;
    this.fasArray = Object.keys(this.myLibrary.definitions.fas);
    this.iconContainer = document.querySelector('.icon-container');
  }

  ngOnInit() {
    this.iconContainer = document.querySelector('.icon-container');
    this.generateRandomIcon();
  }

  generateRandomIcon() {
      const randomIconName: IconName = this.fasArray[Math.floor(Math.random() * this.fasArray.length)] as IconName;
      const randomIcon = icon({ prefix: 'fas', iconName: randomIconName });
      const iconElement = randomIcon.node[0];
      console.log(`generated ${randomIconName}`);
      if (this.iconContainer) {
        this.iconContainer.innerHTML = iconElement.outerHTML;
      }
    
  }

  generateRandomIconDelayed() {
    setTimeout(() => {
      this.generateRandomIcon();
    }, 3000);
  }
}