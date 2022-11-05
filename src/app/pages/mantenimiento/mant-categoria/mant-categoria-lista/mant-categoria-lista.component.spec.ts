import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCategoriaListaComponent } from './mant-categoria-lista.component';

describe('MantCategoriaListaComponent', () => {
  let component: MantCategoriaListaComponent;
  let fixture: ComponentFixture<MantCategoriaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantCategoriaListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantCategoriaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
