import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantClienteListaComponent } from './mant-cliente-lista.component';

describe('MantClienteListaComponent', () => {
  let component: MantClienteListaComponent;
  let fixture: ComponentFixture<MantClienteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantClienteListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
