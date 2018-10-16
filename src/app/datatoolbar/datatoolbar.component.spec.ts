import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatoolbarComponent } from './datatoolbar.component';

describe('DatatoolbarComponent', () => {
  let component: DatatoolbarComponent;
  let fixture: ComponentFixture<DatatoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
