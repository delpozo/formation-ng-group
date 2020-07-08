import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticienComponent } from './particien.component';

describe('ParticienComponent', () => {
  let component: ParticienComponent;
  let fixture: ComponentFixture<ParticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
