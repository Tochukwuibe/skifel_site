import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {

  public view = 'ios';

  public androidLink = "https://play.google.com/apps/testing/com.jaynus.nova";
  public iosLink = "https://testflight.apple.com/join/t1fOYfJi";

  constructor(
    private Ar: ActivatedRoute,
    private router: Router,
    private platform: Platform
  ) { }

  ngOnInit() {
    
    this.view = this.Ar.snapshot.paramMap.get('id');

    if(this.view !== 'ios' && this.view !== 'android') { 
      this.view = this.platform.is('ios') ? 'ios' : 'android';
    }

  }



  onGetSkiffel() {
    window.open(this.view === 'ios' ? this.iosLink : this.androidLink, '_blank');
  }


  onSwitchPlatform() {
    const view = this.view === 'ios'? 'android': 'ios';
    console.log('the new view ', view);
    this.router.navigate(['/testing', view]);
  }

}
