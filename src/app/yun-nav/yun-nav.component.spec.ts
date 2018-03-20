import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YunNavComponent } from './yun-nav.component';

describe('YunNavComponent', () => {
  let component: YunNavComponent;
  let fixture: ComponentFixture<YunNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YunNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YunNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
