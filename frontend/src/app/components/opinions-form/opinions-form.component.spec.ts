import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionsFormComponent } from './opinions-form.component';

describe('OpinionsFormComponent', () => {
  let component: OpinionsFormComponent;
  let fixture: ComponentFixture<OpinionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
