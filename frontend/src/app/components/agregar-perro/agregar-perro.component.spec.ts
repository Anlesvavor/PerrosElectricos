import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPerroComponent } from './agregar-perro.component';

describe('AgregarPerroComponent', () => {
  let component: AgregarPerroComponent;
  let fixture: ComponentFixture<AgregarPerroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPerroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
