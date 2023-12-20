import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SectionInfoDTO} from "../sectionInfoDTO";
import {SectionComponent} from "../section/section.component";
import {DataChangeService} from "../data-change.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  ngOnInit() {
    this.addSmoothScrolling();
  }

  constructor(private dataChangeService: DataChangeService) {
  }

  addSmoothScrolling() {
    // const links = document.querySelectorAll('nav a');
    //
    // links.forEach(link => {
    //   link.addEventListener('click', (event) => this.scrollToSection(event));
    // });
    this.dataChangeService.emitHeader(1).next();
  }
}
