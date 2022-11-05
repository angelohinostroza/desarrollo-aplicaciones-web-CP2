import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantProductoListaComponent } from './mant-producto-lista.component';

describe('MantProductoListaComponent', () => {
  let component: MantProductoListaComponent;
  let fixture: ComponentFixture<MantProductoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantProductoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantProductoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
