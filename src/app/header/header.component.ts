import {Component, ElementRef, ViewChild} from '@angular/core';
import {SectionInfoDTO} from "../sectionInfoDTO";
import {SectionComponent} from "../section/section.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('sections') sections!: ElementRef;
  public sectionArray: SectionInfoDTO[] = [];

  ngOnInit() {
    this.addSmoothScrolling();
    this.initArray();
  }

  private initArray() {
    let section1 = new SectionInfoDTO();
    section1.picturePath = "../../assets/horse_after.png";
    section1.isPictureLeft = true;

    let section2 = new SectionInfoDTO();
    section2.picturePath = "../../assets/horse_after.png";
    section2.isPictureLeft = false;

    let section3 = new SectionInfoDTO();
    section3.picturePath = "../../assets/horse_after.png";
    section3.isPictureLeft = true;

    let section4 = new SectionInfoDTO();
    section4.picturePath = "../../assets/horse_after.png";
    section4.isPictureLeft = false;

    this.sectionArray = [section1, section2, section3, section4];
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
