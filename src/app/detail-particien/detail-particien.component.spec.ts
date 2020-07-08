import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailParticienComponent } from './detail-particien.component';

describe('DetailParticienComponent', () => {
  let component: DetailParticienComponent;
  let fixture: ComponentFixture<DetailParticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailParticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailParticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
