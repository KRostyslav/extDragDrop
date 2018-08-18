import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../services/http-service.service';
import {UserModel} from './user.model';
import {DragulaService} from 'ng2-dragula';
import {merge, Subscription} from 'rxjs';
import {mapTo, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: [ './tab.component.scss' ]
})
export class TabComponent implements OnInit, OnDestroy {

  users: UserModel[];
  toggleFriend: boolean = false;
  k: number;
  subs = new Subscription();

  constructor( private _httpService: HttpService,
               private dragulaService: DragulaService ) {

    dragulaService.createGroup('Users', {
      removeOnSpill: false
    });

    console.log(this.dragulaService);
    this.dragulaService.drag('Users')
      .subscribe(( el ) => {
        // console.log('start :: ', el);
      });
    this.dragulaService.dragend('Users')
      .subscribe(( e ) => {
        // console.log('end :: ', e);
      });

    this.subs.add(this.dragulaService.drop()
      .subscribe(( {name, el, target, source, sibling} ) => {
        if (sibling === null) {
          console.log(el.id, 'last element');
        }
        else {
          console.log(name, el, target, source, sibling, el.id, ' before ', sibling.id);
        }
      })
    );
  }

  ngOnInit() {
    this.getData();

  }

  public getData() {
    this._httpService.getFakeJson()
      .subscribe(( response ) => {
        console.log('Res', response);
        this.users = response;
      });


  }

  public showFriends( i: number ) {

    let model = this.dragulaService.find('Users');
    console.log('model', model);
    this.k = i;
    this.toggleFriend = !this.toggleFriend;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
