import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { HomeComponent } from './home/home.component';
import {CalendarModule} from 'primeng/calendar';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedBackComponent } from './components/feed-back/feed-back.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ItemsListComponent,
    HomeComponent,
    ListItemComponent,
    FeedBackComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
