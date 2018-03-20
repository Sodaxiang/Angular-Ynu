import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuBottomComponent } from './ynu-bottom.component';

describe('YnuBottomComponent', () => {
  let component: YnuBottomComponent;
  let fixture: ComponentFixture<YnuBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
