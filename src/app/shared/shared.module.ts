import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


const appRoutes = [];

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
export class SharedModule { }