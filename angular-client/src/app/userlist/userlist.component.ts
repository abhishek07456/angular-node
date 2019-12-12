import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UserdataService} from '../shared/userdata.service';
import {Signup} from '../shared/signup.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UserdataService]

})
export class UserlistComponent implements OnInit {
  public users = [];
  constructor(private userdata: UserdataService) { }

  ngOnInit() {
      this.userdata.getusers().subscribe(
        data => { this.users = data; },
        () => {console.log('data fetched successfully'); }
      );
  }

}
