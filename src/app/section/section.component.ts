import {Component, Input} from '@angular/core';
import {SectionInfoDTO} from "../sectionInfoDTO";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() sectionInfo?: SectionInfoDTO;
}
