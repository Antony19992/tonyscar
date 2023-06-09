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
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandComponent } from './pages/brand/brand.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { IncludeComponent } from './pages/include/include.component';
import { FormsModule } from '@angular/forms';
import { DialogElementsDialog } from './pages/brand/dialog.component';
import { DialogChoiceDialog } from './pages/choice/dialog.choice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChoiceComponent,
    FooterComponent,
    BrandComponent,
    IncludeComponent,
    DialogElementsDialog,
    DialogChoiceDialog
  ],
  imports: [
    BrowserModule,
    VirtualScrollerModule,
    MaterialModule,
    MenubarModule,
    FormsModule,
    TabMenuModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
