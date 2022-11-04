import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantRegistroComponent } from './mant-registro.component';

describe('MantRegistroComponent', () => {
  let component: MantRegistroComponent;
  let fixture: ComponentFixture<MantRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
