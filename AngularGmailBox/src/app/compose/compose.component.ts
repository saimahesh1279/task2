import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../global';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  email = '';
  subject = '';

  emaillist: any = [];
  form: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {



    this.form = new FormGroup(
      {
        email: new FormControl("", Validators.required),
        subject: new FormControl("", Validators.required)

      });

  }
  ngOnInit(): void {

  }
  addData() {
    let emailObj: any = {
      data: this.form.value,

    };
    console.log(emailObj);
    Global.emailList.push(emailObj);
    this.emaillist.push(emailObj);
    // console.log(Global.emailList);

  }

  savemail() {

    this.addData();
    this.router.navigate(['./sendmail'], {
      queryParams: { info: JSON.stringify(Global.emailList) }
    })
  }

}
