import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AruComponent } from './aru.component';

describe('AruComponent', () => {
  let component: AruComponent;
  let fixture: ComponentFixture<AruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
