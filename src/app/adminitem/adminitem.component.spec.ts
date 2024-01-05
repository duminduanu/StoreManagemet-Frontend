import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitemComponent } from './adminitem.component';

describe('AdminitemComponent', () => {
  let component: AdminitemComponent;
  let fixture: ComponentFixture<AdminitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
