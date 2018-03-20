import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNewstitle5Component } from './ynu-newstitle5.component';

describe('YnuNewstitle5Component', () => {
  let component: YnuNewstitle5Component;
  let fixture: ComponentFixture<YnuNewstitle5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNewstitle5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNewstitle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
