import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNews2Component } from './ynu-news2.component';

describe('YnuNews2Component', () => {
  let component: YnuNews2Component;
  let fixture: ComponentFixture<YnuNews2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNews2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNews2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
