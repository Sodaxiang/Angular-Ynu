import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YunNewstitle3Component } from './yun-newstitle3.component';

describe('YunNewstitle3Component', () => {
  let component: YunNewstitle3Component;
  let fixture: ComponentFixture<YunNewstitle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YunNewstitle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YunNewstitle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
