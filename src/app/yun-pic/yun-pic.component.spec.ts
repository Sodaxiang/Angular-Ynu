import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YunPicComponent } from './yun-pic.component';

describe('YunPicComponent', () => {
  let component: YunPicComponent;
  let fixture: ComponentFixture<YunPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YunPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YunPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
