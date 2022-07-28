import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomDelComponent } from './buttom-del.component';

describe('ButtomDelComponent', () => {
  let component: ButtomDelComponent;
  let fixture: ComponentFixture<ButtomDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
