import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

import {MenubarModule} from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {CardModule} from 'primeng/card';
import { ChoiceComponent } from './pages/choice/choice.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    TabMenuModule,
    ButtonModule,
    CardModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
