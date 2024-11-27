import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CachoeirasPage } from './cachoeiras.page';

describe('CachoeirasPage', () => {
  let component: CachoeirasPage;
  let fixture: ComponentFixture<CachoeirasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CachoeirasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
