import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { FamilySpotify } from 'src/assets/interfaces/family-data';
import { SpotifyUser } from 'src/assets/interfaces/user-data';
import { mockFamilies, mockUsers } from 'src/assets/shared/mock';
import { SpotifyState } from './state/spotify-state';

@Injectable({
  providedIn: 'root'
})
export class SpotifyUsersService {

  constructor(
    private _spotifyState: SpotifyState
  ) {
    this.loadSpotifyFamilyList();
   }

  setSpotifyUser(spotifyUser: SpotifyUser | null): void {
    this._spotifyState.setSpotifyUser(spotifyUser);
  }

  getSpotifyUser(): Observable<SpotifyUser | null> {
    return this._spotifyState.getSpotifyUser$();
  }

  setSpotifyUsersList(spotifyUsers: SpotifyUser[]): void {
    this._spotifyState.setSpotifyUserList(spotifyUsers);
  }

  getSpotifyUserList(): Observable<SpotifyUser[] | null> {
    return this._spotifyState.getSpotifyUserList$();
  }

  setSpotifyFamily(spotifyFamily: FamilySpotify | null): void {
      this._spotifyState.setSpotifyFamily(spotifyFamily);
  }

  getSpotifyFamily(): Observable<FamilySpotify | null>{
    return this._spotifyState.getSpotifyFamily$();
  }

  setSpotifyFamilyList(familiesSpotify: FamilySpotify[]): void {
    this._spotifyState.setSpotifyFamilyList(familiesSpotify);
  }

  getSpotifyFamilyList$(): Observable<FamilySpotify[] | null> {
    return this._spotifyState.getSpotifyFamilyList$();
  }

  createNewSpotifyUser(spotifyUser: SpotifyUser): Observable<SpotifyUser> {
    return of(spotifyUser).pipe(
      map(spotifyUser => {
        spotifyUser.id = Math.floor(Math.random() * 100 + 1)
      return spotifyUser;
      }));
  }

  createNewSpotifyFamily(spotifyFamily: FamilySpotify): Observable<FamilySpotify> {
    return of(spotifyFamily).pipe(
      map(spotifyFamily => {
        spotifyFamily.number = Math.floor(Math.random() * 100 + 1);
      return spotifyFamily;
      }));
  }

  loadSpotifyFamilyList(): void {
    this.setSpotifyFamilyList(mockFamilies);
  }

  loadSpotifyUserList(): void {
    this.setSpotifyUsersList(mockUsers);
  }

  selectedSpotifyFamily(id: number): Observable<FamilySpotify | null> {
    return this.getSpotifyFamilyList$().pipe(
      filter(spotifyFamilyList => !!spotifyFamilyList),
      map(spotifyFamilyList =>{
        const spotifyFamilyFound = spotifyFamilyList?.filter(spotifyFamily => spotifyFamily.number === id);
        if (typeof spotifyFamilyFound !== 'undefined'){
          return spotifyFamilyFound[0];
        }
        return null;
      }),
      take(1)
    );
  }

  selectedSpotifyUser(id: number): Observable<SpotifyUser | null> {
   return this.getSpotifyUserList().pipe(
      filter(spotifyUserList => !!spotifyUserList),
      map(spotifyUserList =>{
        const spotifyUserFound = spotifyUserList?.filter(spotifyUser => spotifyUser.id === id);
        if (typeof spotifyUserFound !== 'undefined') return spotifyUserFound[0];
        return null;
      }),
      take(1));
  }

  removeSpotifyUser(id: number | null): void {
    if (id !== null){
      this._spotifyState.getSpotifyUserList$().pipe(
        map(spotifyUserList =>
          spotifyUserList?.filter(spotifyUser => spotifyUser.id !== id)),
        take(1)
      ).subscribe(spotifyUserList => {
        if (typeof spotifyUserList !== 'undefined') this._spotifyState.setSpotifyUserList(spotifyUserList); });
    }
  }

  removeFamilySpotify(id: number | null): void{
    if (id !== null){
      this._spotifyState.getSpotifyFamilyList$().pipe(
        map(spotifyFamilyList =>
          spotifyFamilyList?.filter(spotifyFamily => spotifyFamily.number !== id )),
        take(1)
      ).subscribe(spotifyFamiliesList => {
        if (typeof spotifyFamiliesList !== 'undefined') this._spotifyState.setSpotifyFamilyList(spotifyFamiliesList); })
    }
  }


}
