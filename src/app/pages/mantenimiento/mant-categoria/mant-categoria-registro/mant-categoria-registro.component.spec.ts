import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCategoriaRegistroComponent } from './mant-categoria-registro.component';

describe('MantCategoriaRegistroComponent', () => {
  let component: MantCategoriaRegistroComponent;
  let fixture: ComponentFixture<MantCategoriaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantCategoriaRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantCategoriaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
