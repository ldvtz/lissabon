import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SectionInfoDTO} from "./sectionInfoDTO";
import {DataChangeService} from "./data-change.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lissabon-webapp';
  public sectionArray: SectionInfoDTO[] = [];
  @ViewChild('sections', { static: false }) sections!: ElementRef;

  constructor(private dataChangeService: DataChangeService) {
  }

  ngOnInit(): void {
    this.initArray();

  }

  scrollToSection(sectionId: string) {
    if(sectionId == "section0") {
      window.document.body.scrollTop = 0;
    }
    const sectionElement = this.sections.nativeElement.querySelector(`#${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  private initArray() {
    let section1 = new SectionInfoDTO();
    section1.picturePath = "../../assets/horse_after.png";
    section1.isPictureLeft = true;
    section1.sectionId = 1;
    section1.text = "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "+
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet";
    section1.title = "Picture 1";

    let section2 = new SectionInfoDTO();
    section2.picturePath = "../../assets/horse_after.png";
    section2.isPictureLeft = false;
    section2.sectionId = 2;
    section2.text = "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "+
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet";
    section2.title = "Picture 2";


    let section3 = new SectionInfoDTO();
    section3.picturePath = "../../assets/horse_after.png";
    section3.isPictureLeft = true;
    section3.sectionId = 3;
    section3.text = "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "+
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet";
    section3.title = "Picture 3";

    let section4 = new SectionInfoDTO();
    section4.picturePath = "https://drive.google.com/file/d/1CIh70AtEN1II0GY8iBud-cKoIPzfMSDp/preview";
    section4.isPictureLeft = false;
    section4.sectionId = 4;
    section4.text = "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "+
    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet";
    section4.title = "Video";
    section4.isVideo = true;

    this.sectionArray = [section1, section2, section3, section4];
  }
}
