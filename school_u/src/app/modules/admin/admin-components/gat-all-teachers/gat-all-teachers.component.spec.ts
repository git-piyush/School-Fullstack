import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatAllTeachersComponent } from './gat-all-teachers.component';

describe('GatAllTeachersComponent', () => {
  let component: GatAllTeachersComponent;
  let fixture: ComponentFixture<GatAllTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GatAllTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GatAllTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
