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
    section1.text = "Die Statue auf dem Praça da Figueira, einem zentralen Platz in Lissabon, Portugal, " +
      "repräsentiert Dom João I, einen bedeutenden Monarchen des 14. Jahrhunderts. Das imposante Denkmal, " +
      "umgeben von lebendigem Treiben und historischem Flair, dient als markanter Treffpunkt und erinnert " +
      "an die reiche Geschichte der Stadt";
    section1.title = "Praça da Figueira";

    let section2 = new SectionInfoDTO();
    section2.picturePath = "../../assets/tramm_edited.png";
    section2.isPictureLeft = false;
    section2.sectionId = 2;
    section2.text = "Die Straßenbahnen in Lissabon sind ein charakteristisches Merkmal der Stadt, insbesondere " +
      "die gelben Trams der Linie 28, die durch malerische Viertel und enge Gassen schlängeln. Diese nostalgischen " +
      "Transportmittel bieten nicht nur eine praktische Fortbewegungsmöglichkeit, sondern auch eine charmante " +
      "Gelegenheit, die historische Architektur und die lebendige Atmosphäre der portugiesischen Hauptstadt zu " +
      "erleben.";
    section2.title = "Tram";


    let section3 = new SectionInfoDTO();
    section3.picturePath = "../../assets/post_edit.png";
    section3.isPictureLeft = true;
    section3.sectionId = 3;
    section3.text = "Der Marktplatz in Lissabon, auch bekannt als der Mercado da Ribeira oder Time Out Market, " +
      "ist ein lebendiger Treffpunkt für kulinarische Genüsse. Hier erlebt man die Vielfalt der portugiesischen " +
      "Küche, von frischen Meeresfrüchten bis zu köstlichen Pastéis de Nata. Die Mischung aus traditionellen Märkten " +
      "und modernem Flair macht diesen Ort zu einem pulsierenden Zentrum für Gastronomie und lokales Lebensgefühl.";
    section3.title = "Marktplatz";

    let section4 = new SectionInfoDTO();
    section4.picturePath = "https://drive.google.com/file/d/1CIh70AtEN1II0GY8iBud-cKoIPzfMSDp/preview";
    section4.isPictureLeft = false;
    section4.sectionId = 4;
    section4.text = "Im Video wird meine Reise nach Lissabon gezeigt!";
    section4.title = "Reise nach Lissabon";
    section4.isVideo = true;

    this.sectionArray = [section1, section2, section3, section4];
  }
}
