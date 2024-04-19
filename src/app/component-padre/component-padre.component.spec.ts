import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPadreComponent } from './component-padre.component';

describe('ComponentPadreComponent', () => {
  let component: ComponentPadreComponent;
  let fixture: ComponentFixture<ComponentPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
