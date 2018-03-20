import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YunTopComponent } from './yun-top.component';

describe('YunTopComponent', () => {
  let component: YunTopComponent;
  let fixture: ComponentFixture<YunTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YunTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YunTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
