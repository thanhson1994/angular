import {
  Component
} from '@angular/core';

@Component({
  selector: 'lts-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = `This message can be printable`;
  title = `Wellcome to my Angular`;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
  printable = true;
  contacts = [{
      name: 'thanhson',
      id: 1
    },
    {
      name: 'congvinh',
      id: 2
    },
    {
      name: 'congphuong',
      id: 3
    }



  ];
  isSpecial = true;
  isUnchanged = true;
  canSave = true;
  isActive = true;
  tabIndex = 2;






}
