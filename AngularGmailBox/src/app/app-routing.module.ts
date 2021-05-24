import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { MailComponent } from './mail/mail.component';
import { SendmailComponent } from './sendmail/sendmail.component';

const routes: Routes = [
{path:'mail' , component:MailComponent},
{path:'',redirectTo:'mail',pathMatch:'full'},
{path:'compose' , component:ComposeComponent},
{path:'sendmail' ,component:SendmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule=[MailComponent,ComposeComponent,SendmailComponent]