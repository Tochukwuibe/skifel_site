import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCardComponent } from './why-card.component';

describe('WhyCardComponent', () => {
  let component: WhyCardComponent;
  let fixture: ComponentFixture<WhyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
