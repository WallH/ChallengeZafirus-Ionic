import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SuperheroService } from '../../../services/superhero.service';
import { Character, CharacterDataWrapper, DataDetailHero } from '../../../models/generalmodel';
import { Router, RouterLinkWithHref } from '@angular/router';
import { IonicStandaloneModulesModule } from 'src/app/shared/ionic-standalone-modules/ionic-standalone-modules.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-superherolist',
  templateUrl: './superherolist.page.html',
  styleUrls: ['./superherolist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLinkWithHref, IonicStandaloneModulesModule, TranslateModule]
})
export class SuperherolistPage implements OnInit {
  public superherolist:Character[] = new Array<Character>();

  constructor(superHeroService: SuperheroService, private router: Router) {
    superHeroService.getSuperheroes().then((result) => {
      this.superherolist = result;
    });

   }

  ngOnInit() {
  }

  testButton(character:Character)
  {
    console.log(character);
    const data:DataDetailHero =
    {
      name: character.name,
      image: `${character.thumbnail?.path}.${character.thumbnail?.extension}`,
      comics: character.comics?.available,
      series: character.series?.available,
      stories: character.stories?.available
    };
    this.router.navigate(['/detail'], { queryParams: data });
    console.log("Button Clicked for " + character.name);
  }
}
