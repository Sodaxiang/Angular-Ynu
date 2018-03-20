import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNewstitle4Component } from './ynu-newstitle4.component';

describe('YnuNewstitle4Component', () => {
  let component: YnuNewstitle4Component;
  let fixture: ComponentFixture<YnuNewstitle4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNewstitle4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNewstitle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
