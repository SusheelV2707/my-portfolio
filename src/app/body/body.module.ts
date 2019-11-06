import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';

const appRoutes = [
    { path: 'app-home', component: HomeComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: 'app-skills', component: SkillsComponent },
    { path: 'app-projects', component: ProjectsComponent },
    { path: 'app-education', component: EducationComponent },
];

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes, {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: []
})
export class BodyModule { }
