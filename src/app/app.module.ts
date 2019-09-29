import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { HomeComponent } from './home/main/home.component';
import {CalendarModule} from 'primeng/calendar';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedBackComponent } from './components/feed-back/feed-back.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from './components/modal/modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {InputTextModule} from 'primeng/inputtext';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from './components/shared/footer/footer.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { UserSnackBarComponent } from './components/user-snack-bar/user-snack-bar.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ItemsListComponent,
    HomeComponent,
    ListItemComponent,
    FeedBackComponent,
    ModalComponent,
    SnackBarComponent,
    FooterComponent,
    UserSnackBarComponent,

  ],
  imports: [
    BsDatepickerModule.forRoot(),
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    InputTextModule,
    MatSnackBarModule,
    MatDialogModule,
    ModalModule,
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
  entryComponents: [
    SnackBarComponent,
    FeedBackComponent,
    UserSnackBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
