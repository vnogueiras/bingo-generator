import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkModelComponent } from './uk-model.component';

describe('UkModelComponent', () => {
  let component: UkModelComponent;
  let fixture: ComponentFixture<UkModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
