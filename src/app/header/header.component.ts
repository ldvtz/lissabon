import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SectionInfoDTO} from "../sectionInfoDTO";
import {SectionComponent} from "../section/section.component";
import {DataChangeService} from "../data-change.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() elementClicked = new EventEmitter<string>();


  ngOnInit() {
    this.addSmoothScrolling();
  }

  onElementClick(sectionId: string) {
    this.elementClicked.emit(sectionId);
  }

  constructor(private dataChangeService: DataChangeService) {
  }

  addSmoothScrolling() {
    // const links = document.querySelectorAll('nav a');
    //
    // links.forEach(link => {
    //   link.addEventListener('click', (event) => this.scrollToSection(event));
    // });

  }
  public scrollToSection(sectionId: number): void {
    this.dataChangeService.emitHeader().next(sectionId);
  }
}
