import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNewstitle1Component } from './ynu-newstitle1.component';

describe('YnuNewstitle1Component', () => {
  let component: YnuNewstitle1Component;
  let fixture: ComponentFixture<YnuNewstitle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNewstitle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNewstitle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
