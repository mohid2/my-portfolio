import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursoModalComponent } from './curso-modal/curso-modal.component';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    PortafolioComponent,
    ContactoComponent,
    CursoModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
