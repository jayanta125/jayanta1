import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Receipe1Component } from './receipe1.component';

describe('Receipe1Component', () => {
  let component: Receipe1Component;
  let fixture: ComponentFixture<Receipe1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receipe1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Receipe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
