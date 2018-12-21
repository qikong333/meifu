import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyerComponent } from './bodyer.component';

describe('BodyerComponent', () => {
  let component: BodyerComponent;
  let fixture: ComponentFixture<BodyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
