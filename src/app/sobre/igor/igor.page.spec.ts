import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IgorPage } from './igor.page';

describe('IgorPage', () => {
  let component: IgorPage;
  let fixture: ComponentFixture<IgorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IgorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
