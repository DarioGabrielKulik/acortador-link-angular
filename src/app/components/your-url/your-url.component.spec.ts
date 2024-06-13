import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourUrlComponent } from './your-url.component';

describe('YourUrlComponent', () => {
  let component: YourUrlComponent;
  let fixture: ComponentFixture<YourUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourUrlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
