import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTareaComponent } from './listar-tarea.component';

describe('ListarTareaComponent', () => {
  let component: ListarTareaComponent;
  let fixture: ComponentFixture<ListarTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
