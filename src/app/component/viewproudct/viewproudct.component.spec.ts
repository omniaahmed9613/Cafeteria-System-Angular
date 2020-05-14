import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproudctComponent } from './viewproudct.component';

describe('ViewproudctComponent', () => {
  let component: ViewproudctComponent;
  let fixture: ComponentFixture<ViewproudctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproudctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproudctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
