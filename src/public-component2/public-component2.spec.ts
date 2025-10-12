import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicComponent2 } from './public-component2';

describe('PublicComponent2', () => {
  let component: PublicComponent2;
  let fixture: ComponentFixture<PublicComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
