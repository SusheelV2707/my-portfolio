import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BodyModule } from './body/body.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './body/contact/contact.component';
import { SkillsComponent } from './body/skills/skills.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { EducationComponent } from './body/education/education.component';
import { HomeComponent } from './body/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BodyModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
