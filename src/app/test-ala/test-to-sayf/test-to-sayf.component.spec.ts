import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestToSayfComponent } from './test-to-sayf.component';

describe('TestToSayfComponent', () => {
  let component: TestToSayfComponent;
  let fixture: ComponentFixture<TestToSayfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestToSayfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestToSayfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
