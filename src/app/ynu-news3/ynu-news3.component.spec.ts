import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNews3Component } from './ynu-news3.component';

describe('YnuNews3Component', () => {
  let component: YnuNews3Component;
  let fixture: ComponentFixture<YnuNews3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNews3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNews3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
