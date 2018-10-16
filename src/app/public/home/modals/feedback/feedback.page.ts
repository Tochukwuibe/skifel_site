import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  public form: FormGroup;
  public options = [1, 2, 3, 4, 5];

  constructor(
    public modal: ModalController,
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      excitement: ['', Validators.required],
      comment: ['', Validators.required]
    });

  }


  public async onSubmit() {
    const feedback = this.db.list('feedback');
    console.log('the value ', this.form.value);
    feedback.push(this.form.value);
    await this.modal.dismiss();

    await this.showMessage('Thank you for your feedback');
  }


  private async showMessage(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000 });
    await toast.present();
  }

}
