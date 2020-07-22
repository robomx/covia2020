import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MythsPage } from './myths.page';

describe('MythsPage', () => {
  let component: MythsPage;
  let fixture: ComponentFixture<MythsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MythsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MythsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
