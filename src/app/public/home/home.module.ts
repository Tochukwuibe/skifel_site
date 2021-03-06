import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { HeaderComponent } from './components/header/header.component';
import { WhyComponent } from './components/why/why.component';
import { WhyCardComponent } from './components/why-card/why-card.component';
import { HowComponent } from './components/how/how.component';
import { DemoComponent } from './components/demo/demo.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { FeedbackPage } from './modals/feedback/feedback.page';
import { UsersCardsComponent } from './components/users-cards/users-cards.component';

import { InViewportModule } from '@thisissoon/angular-inviewport';
import { SupportComponent } from './components/support/support.component';


const homeRoutes: Routes = [
  {
    path: '',
    component: HomePage
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(homeRoutes),
    ReactiveFormsModule,
    InViewportModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    WhyComponent,
    WhyCardComponent,
    HowComponent,
    DemoComponent,
    TeamComponent,
    ContactComponent,
    TeamCardComponent,
    FeedbackPage,
    UsersCardsComponent,
    SupportComponent
  ],
  entryComponents: [
    FeedbackPage
  ]
})
export class HomePageModule { }
