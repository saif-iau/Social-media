// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

// Create stubs for other components like AboutComponent and ContactComponent
@Component({
  selector: 'app-about',
  standalone: true,
  template: `<h2>About</h2>`,
})
export class AboutComponent {}

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `<h2>Contact</h2>`,
})
export class ContactComponent {}

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
