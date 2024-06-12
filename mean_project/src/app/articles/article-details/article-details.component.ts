import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  ngOnInit() { }
  constructor(private router:Router){
    if(localStorage.getItem('Loginuser')){
      router.navigate(['/']);
    }
  }
}
