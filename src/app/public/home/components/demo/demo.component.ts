import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackPage } from '../../modals/feedback/feedback.page';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }


  public async onFeedback() {
    const modal = await this.modal.create({
      component: FeedbackPage
    });

    await modal.present();
  }

  public onDemo() {
    window.open('https://novadev-4af34.firebaseapp.com', '_blank');
  }

}
