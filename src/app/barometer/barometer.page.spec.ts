import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarometerPage } from './barometer.page';

describe('BarometerPage', () => {
  let component: BarometerPage;
  let fixture: ComponentFixture<BarometerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarometerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarometerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
