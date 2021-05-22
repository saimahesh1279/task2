import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposemailComponent } from './composemail/composemail.component';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { SendMailComponent } from './send-mail/send-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposemailComponent,
    ComposeMailComponent,
    MailBoxComponent,
    SendMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
