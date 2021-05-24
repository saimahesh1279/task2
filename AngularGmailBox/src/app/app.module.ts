import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule ,routingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { ComposeComponent } from './compose/compose.component';
import { MailComponent } from './mail/mail.component';



@NgModule({
  declarations: [
    AppComponent,
    SendmailComponent,
    ComposeComponent,
    MailComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
