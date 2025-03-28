import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomulareComponent } from './fomulare.component';

describe('FomulareComponent', () => {
  let component: FomulareComponent;
  let fixture: ComponentFixture<FomulareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomulareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomulareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
