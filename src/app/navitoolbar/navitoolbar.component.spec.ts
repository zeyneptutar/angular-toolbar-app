import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavitoolbarComponent } from './navitoolbar.component';

describe('NavitoolbarComponent', () => {
  let component: NavitoolbarComponent;
  let fixture: ComponentFixture<NavitoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavitoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavitoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
