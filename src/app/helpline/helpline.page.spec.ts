import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelplinePage } from './helpline.page';

describe('HelplinePage', () => {
  let component: HelplinePage;
  let fixture: ComponentFixture<HelplinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelplinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
