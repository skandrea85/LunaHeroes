import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDatailComponent } from './heroes-datail.component';

describe('HeroesDatailComponent', () => {
  let component: HeroesDatailComponent;
  let fixture: ComponentFixture<HeroesDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
