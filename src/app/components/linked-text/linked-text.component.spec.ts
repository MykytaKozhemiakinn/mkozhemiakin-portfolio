import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedTextComponent } from './linked-text.component';

describe('LinkedTextComponent', () => {
  let component: LinkedTextComponent;
  let fixture: ComponentFixture<LinkedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
