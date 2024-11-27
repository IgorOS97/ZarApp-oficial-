import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuilhermePage } from './guilherme.page';

describe('GuilhermePage', () => {
  let component: GuilhermePage;
  let fixture: ComponentFixture<GuilhermePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuilhermePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
