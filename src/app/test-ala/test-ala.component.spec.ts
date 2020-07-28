import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAlaComponent } from './test-ala.component';

describe('TestAlaComponent', () => {
  let component: TestAlaComponent;
  let fixture: ComponentFixture<TestAlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
