import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantClienteRegistroComponent } from './mant-cliente-registro.component';

describe('MantClienteRegistroComponent', () => {
  let component: MantClienteRegistroComponent;
  let fixture: ComponentFixture<MantClienteRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantClienteRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantClienteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
