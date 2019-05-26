import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGatoComponent } from './agregar-gato.component';

describe('AgregarGatoComponent', () => {
  let component: AgregarGatoComponent;
  let fixture: ComponentFixture<AgregarGatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarGatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
