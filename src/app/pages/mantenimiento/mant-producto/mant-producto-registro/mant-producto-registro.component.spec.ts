import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantProductoRegistroComponent } from './mant-producto-registro.component';

describe('MantProductoRegistroComponent', () => {
  let component: MantProductoRegistroComponent;
  let fixture: ComponentFixture<MantProductoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantProductoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantProductoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
