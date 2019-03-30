import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {AdduserComponent} from './user/adduser/adduser.component';
import {UserModule} from './user/user.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {UserserviceService} from './user/userservice.service';

const routes: Routes = [
   { path: 'adduser', component: AdduserComponent }

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),UserModule,FormsModule,HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
