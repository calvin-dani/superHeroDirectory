import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroBioTemplate } from '../../../dataModels/herobioTemplate';
import { GetSuperheroesService } from '../../../services/get-superheroes.service';

@Component({
  selector: 'app-hero-bio-card',
  templateUrl: './hero-bio-card.component.html',
  styleUrls: ['./hero-bio-card.component.css']
})
export class HeroBioCardComponent implements OnInit {

  @Input() heroName: string = '';

  isVisible: boolean = false;
  invalid: boolean = true;
  loading: boolean = true;


  hero: HeroBioTemplate = {
    name: '',
    fullname: '',
    aliases: [],
    "place-of-birth": '',
    alignment: '',
    base: '',
    image: '',
    powerstats: {
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: ''
    },
    gender: '',
    height: '',
    weight: '',
    race: '',
    occupation: '',
    relatives: '',
  };

  heroes: HeroBioTemplate[] = [];
  powerstatKeys: string[] = [];

  @Output() sendInvalidInput = new EventEmitter();
  @Output() sendNotFound = new EventEmitter();
  @Output() beenClicked = new EventEmitter<any>();

  constructor(private heroService: GetSuperheroesService) { }

  ngOnInit(): void {
  }

  getHeroes(heroName: string): void {

    this.heroService.getHeroes(heroName).subscribe((result: { [x: string]: any; }) => {
      if (result && Array.isArray(result['results'])) {
        this.sendNotFound.emit("true");
        console.log("Results fetched succesfully");
        for (let tempHero of result['results']) {
          let tempHeroTemp = { ...this.hero };
          tempHeroTemp.name = tempHero.name;
          tempHeroTemp.fullname = tempHero.biography['full-name'];
          tempHeroTemp.aliases = tempHero.biography['aliases'];
          tempHeroTemp['place-of-birth'] = tempHero.biography['place-of-birth'];
          tempHeroTemp.alignment = tempHero.biography.alignment;
          tempHeroTemp.base = tempHero.work.base;
          tempHeroTemp.image = tempHero.image.url;
          tempHeroTemp.powerstats.intelligence = tempHero.powerstats.intelligence;
          tempHeroTemp.powerstats.strength = tempHero.powerstats.strength;
          tempHeroTemp.powerstats.speed = tempHero.powerstats.speed;
          tempHeroTemp.powerstats.durability = tempHero.powerstats.durability;
          tempHeroTemp.powerstats.power = tempHero.powerstats.power;
          tempHeroTemp.powerstats.combat = tempHero.powerstats.combat;
          tempHeroTemp.gender = tempHero.appearance.gender;
          tempHeroTemp.height = tempHero.appearance.height[1];
          tempHeroTemp.race = tempHero.appearance.race;
          tempHeroTemp.weight = tempHero.appearance.weight[1];
          tempHeroTemp.occupation = tempHero.work.occupation;
          tempHeroTemp.relatives = tempHero.connections.relatives;

          this.getRelativesData(tempHeroTemp);
          this.heroes.push(tempHeroTemp);


        }

        this.loading = false;
      }
      else {
        console.log(`No user ${heroName} exist in database`);
        this.sendNotFound.emit("false");
      }
    }
      ,
      (error: any) => console.log(error));
  }

  onSubmit(form: NgForm): void {
    console.log("been clicked");
    this.heroes = [];
    if (!form.valid) {
      this.sendInvalidInput.emit("false");
      return;
    }
    this.sendInvalidInput.emit("true");
    this.getHeroes(this.heroName);
  }


  clickCard(hero: HeroBioTemplate) {
    console.log("clicked");

    this.beenClicked.emit(hero);

  }

  getRelativesData(data: any) {
    let allRelatives = data.relatives.split(',');
    data.relatives = allRelatives;
  }
}
