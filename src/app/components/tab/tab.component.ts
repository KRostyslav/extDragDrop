import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http-service.service';
import {UserModel} from './user.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: [ './tab.component.scss' ]
})
export class TabComponent implements OnInit {

  users: UserModel[];
  toggleFriend: boolean = false;

  constructor( private _httpService: HttpService ) { }

  ngOnInit() {
    this.getData()
  }

  public getData() {
    this._httpService.getFakeJson()
      .subscribe(( response ) => {
        console.log('Res', response)
        this.users = response;
      })
  }

  public showFriends(i: number){
    console.log(i)
    this.toggleFriend = !this.toggleFriend;
  }

}
