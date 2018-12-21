import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment} from '../environments/environment';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './component/index/index.component';
import { HttpClientModule} from '@angular/common/http'
import { SmartphoneService } from './service/smartphone.service';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [SmartphoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
