import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipExamplesComponent } from './chip-examples.component';

describe('ChipExamplesComponent', () => {
  let component: ChipExamplesComponent;
  let fixture: ComponentFixture<ChipExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
