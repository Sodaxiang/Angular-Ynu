import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YnuFooterComponent } from './ynu-footer.component';

describe('YnuFooterComponent', () => {
  let component: YnuFooterComponent;
  let fixture: ComponentFixture<YnuFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnuFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
