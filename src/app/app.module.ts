import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormResultsComponent } from './form-results/form-results.component';
@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    TetiereComponent,
    FormulaireComponent,
    FormResultsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
