import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNews5Component } from './ynu-news5.component';

describe('YnuNews5Component', () => {
  let component: YnuNews5Component;
  let fixture: ComponentFixture<YnuNews5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNews5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNews5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
