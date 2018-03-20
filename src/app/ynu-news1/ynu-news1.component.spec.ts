import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuNews1Component } from './ynu-news1.component';

describe('YnuNews1Component', () => {
  let component: YnuNews1Component;
  let fixture: ComponentFixture<YnuNews1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuNews1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuNews1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
