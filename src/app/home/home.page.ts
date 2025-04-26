import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  async logout() {
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.authService.logout();
    await loading.dismiss();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
