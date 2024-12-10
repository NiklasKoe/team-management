import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { Social } from '../../models/social';
import { CommonModule } from '@angular/common';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatMenuModule, CommonModule, FontAwesomeModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  faXmark = faXmark;

  socials: Social[] = [
    {
      link: 'https://www.instagram.com/sglelbachrhena/',
      name: 'Instagram',
      iconPath: 'fa-brands fa-instagram'
    },
    {
      link: 'https://www.instagram.com/sglelbachrhena/',
      name: 'xmark',
      iconPath: 'fa-solid fa-xmark'
    }
  ];

}
