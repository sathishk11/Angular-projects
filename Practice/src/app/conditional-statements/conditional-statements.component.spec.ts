import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalStatementsComponent } from './conditional-statements.component';

describe('ConditionalStatementsComponent', () => {
  let component: ConditionalStatementsComponent;
  let fixture: ComponentFixture<ConditionalStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalStatementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
