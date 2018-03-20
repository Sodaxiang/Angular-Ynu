import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNews4Component } from './ynu-news4.component';

describe('YnuNews4Component', () => {
  let component: YnuNews4Component;
  let fixture: ComponentFixture<YnuNews4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNews4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNews4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
