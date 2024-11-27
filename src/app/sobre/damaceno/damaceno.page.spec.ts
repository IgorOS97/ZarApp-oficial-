import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DamacenoPage } from './damaceno.page';

describe('DamacenoPage', () => {
  let component: DamacenoPage;
  let fixture: ComponentFixture<DamacenoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DamacenoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
