import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SectionInfoDTO} from "./sectionInfoDTO";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lissabon-webapp';
  public sectionArray: SectionInfoDTO[] = [];
  @ViewChild('sections') sections!: ElementRef;


  ngOnInit(): void {
    this.initArray();
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
}
