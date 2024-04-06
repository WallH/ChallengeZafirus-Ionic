import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);

    Device.getLanguageCode().then((language) => {
      let lang = language.value;
      this.translate.setDefaultLang(lang);
    });
  }
}
