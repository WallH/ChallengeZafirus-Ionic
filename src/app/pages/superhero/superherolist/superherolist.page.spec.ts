import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperherolistPage } from './superherolist.page';

describe('SuperherolistPage', () => {
  let component: SuperherolistPage;
  let fixture: ComponentFixture<SuperherolistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperherolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
