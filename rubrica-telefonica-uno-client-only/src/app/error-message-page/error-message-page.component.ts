import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-message-page',
  templateUrl: './error-message-page.component.html',
  styleUrls: ['./error-message-page.component.css']
})
export class ErrorMessagePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  tornaLoginPage(){
    console.log("siamo in tornaLoginPage()");
    this.router.navigateByUrl("/login");
  }

}
