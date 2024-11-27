import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PraiasPage } from './praias.page';

describe('PraiasPage', () => {
  let component: PraiasPage;
  let fixture: ComponentFixture<PraiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PraiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
