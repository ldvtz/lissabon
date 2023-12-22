import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LissabonSectionComponent } from './lissabon-section.component';

describe('LissabonSectionComponent', () => {
  let component: LissabonSectionComponent;
  let fixture: ComponentFixture<LissabonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LissabonSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LissabonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
