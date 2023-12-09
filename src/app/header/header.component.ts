import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('sections') sections!: ElementRef;

  ngOnInit() {
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
      link.addEventListener('click', (event) => this.scrollToSection(event));
    });
  }

  scrollToSection(event: Event) {
    event.preventDefault();

    const targetId = (event.target as HTMLAnchorElement)?.getAttribute('href')?.substring(1);
    const targetSection = document.getElementById(targetId!);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}
