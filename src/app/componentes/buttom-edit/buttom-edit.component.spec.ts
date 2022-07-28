import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomEditComponent } from './buttom-edit.component';

describe('ButtomEditComponent', () => {
  let component: ButtomEditComponent;
  let fixture: ComponentFixture<ButtomEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
