import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuristicosPage } from './turisticos.page';

describe('TuristicosPage', () => {
  let component: TuristicosPage;
  let fixture: ComponentFixture<TuristicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
