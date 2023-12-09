import {Component, Input} from '@angular/core';
import {SectionInfoDTO} from "../sectionInfoDTO";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() sectionInfo?: SectionInfoDTO;
}
