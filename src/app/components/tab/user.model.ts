import {FriendModel} from './friend.model';

export interface UserModel {
  index: number,
  isActive: boolean,
  balance: string,
  picture: string,
  age: number,
  name: string,
  gender: 'female' | 'male',
  company: string,
  email: string,
  latitude:number,
  longitude:number,
  tag: string[],
  friends: FriendModel[]
}
