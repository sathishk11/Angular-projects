import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeatherComponent } from './weeather.component';

describe('WeeatherComponent', () => {
  let component: WeeatherComponent;
  let fixture: ComponentFixture<WeeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
