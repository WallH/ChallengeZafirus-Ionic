import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonBackButton, IonButtons, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonList, IonItem, IonLabel, IonAvatar, IonRouterLinkWithHref, IonNote } from '@ionic/angular/standalone';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonBackButton, IonButtons, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonList, IonItem, IonLabel, IonAvatar, IonNote ,IonRouterLinkWithHref
  ],
  exports: [IonBackButton, IonButtons, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonList, IonItem, IonLabel, IonAvatar, IonNote, IonRouterLinkWithHref]
})
export class IonicStandaloneModulesModule { }
