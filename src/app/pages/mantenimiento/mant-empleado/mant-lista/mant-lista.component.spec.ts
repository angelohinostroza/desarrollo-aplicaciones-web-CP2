import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantListaComponent } from './mant-lista.component';

describe('MantListaComponent', () => {
  let component: MantListaComponent;
  let fixture: ComponentFixture<MantListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
