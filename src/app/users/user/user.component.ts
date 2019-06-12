import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // user: {id: number, name: string};
  name: string;
  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params);

    this.route.params.subscribe(params => {
      this.name = params.name;
      this.id = params.id;
    });
  }

}
