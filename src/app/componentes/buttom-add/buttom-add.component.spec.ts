import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomAddComponent } from './buttom-add.component';

describe('ButtomAddComponent', () => {
  let component: ButtomAddComponent;
  let fixture: ComponentFixture<ButtomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
