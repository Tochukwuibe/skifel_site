import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: 'header',
      icon: 'home'
    },
    {
      title: 'Why',
      url: 'why',
      icon: 'help-circle'
    },
    {
      title: 'Plan',
      url: 'plan',
      icon: 'bulb'
    },
    {
      title: 'Demo',
      url: 'demo',
      icon: 'construct'
    },
    {
      title: 'Team',
      url: 'team',
      icon: 'people'
    },
    {
      title: 'Contact',
      url: 'contact',
      icon: 'call'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  public navigate(fragment: string) {
    console.log('navigating to ', fragment);
    this.router.navigate(['/home'], { fragment });
  }
}
