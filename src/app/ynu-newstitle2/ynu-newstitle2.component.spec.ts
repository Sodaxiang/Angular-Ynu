import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNewstitle2Component } from './ynu-newstitle2.component';

describe('YnuNewstitle2Component', () => {
  let component: YnuNewstitle2Component;
  let fixture: ComponentFixture<YnuNewstitle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNewstitle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNewstitle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
