import { Component } from '@angular/core';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { PERFIL } from './data/portfolio';
import { Education } from './education/education';
import { Hero } from './hero/hero';
import { Nav } from './nav/nav';
import { Stack } from './stack/stack';
import { Trajectory } from './trajectory/trajectory';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, About, Stack, Trajectory, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly perfil = PERFIL;
}
