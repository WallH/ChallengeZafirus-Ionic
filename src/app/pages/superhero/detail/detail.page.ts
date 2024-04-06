import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Character, DataDetailHero } from 'src/app/models/generalmodel';
import { IonicStandaloneModulesModule } from 'src/app/shared/ionic-standalone-modules/ionic-standalone-modules.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicStandaloneModulesModule, TranslateModule]
})

export class DetailPage implements OnInit {

  character:DataDetailHero = new DataDetailHero();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.character = params as DataDetailHero;
    });
  }

}
