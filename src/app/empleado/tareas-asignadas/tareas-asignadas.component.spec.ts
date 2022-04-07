import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasAsignadasComponent } from './tareas-asignadas.component';

describe('TareasAsignadasComponent', () => {
  let component: TareasAsignadasComponent;
  let fixture: ComponentFixture<TareasAsignadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasAsignadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasAsignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
