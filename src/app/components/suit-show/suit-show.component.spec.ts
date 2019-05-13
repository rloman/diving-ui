import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitShowComponent } from './suit-show.component';

describe('SuitShowComponent', () => {
  let component: SuitShowComponent;
  let fixture: ComponentFixture<SuitShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
