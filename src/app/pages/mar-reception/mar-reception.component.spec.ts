import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarReceptionComponent } from './mar-reception.component';

describe('MarReceptionComponent', () => {
  let component: MarReceptionComponent;
  let fixture: ComponentFixture<MarReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarReceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
