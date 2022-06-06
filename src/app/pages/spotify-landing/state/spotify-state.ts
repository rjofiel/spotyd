import { Injectable } from "@angular/core";
import { FamilySpotify } from "src/assets/interfaces/family-data";
import { SpotifyUser } from "src/assets/interfaces/user-data";
import { BaseStateProp } from "src/assets/shared/state/base-state-prop";

@Injectable({
  providedIn: 'root'
})

export class SpotifyState{

//Lists
private _spotifyUsersList = new BaseStateProp<SpotifyUser[]>();
private _spotifyFamilyList = new BaseStateProp<FamilySpotify[]>();

//One
private _spotifyUser = new BaseStateProp<SpotifyUser>();
private _spotifyFamily = new BaseStateProp<FamilySpotify>();

//User
readonly setSpotifyUser = this._spotifyUser.setValueFunction();
readonly getSpotifyUser$ = this._spotifyUser.getValueFunction();
readonly setSpotifyUserInProgress = this._spotifyUser.setInProgressFunction();
readonly getSpotifyUserInProgress = this._spotifyUser.getInProgressFunction();
readonly setSpotifyUserError = this._spotifyUser.setErrorFunction();
readonly getSpotifyUserError = this._spotifyUser.getErrorFunction();

//Family
readonly setSpotifyFamily = this._spotifyFamily.setValueFunction();
readonly getSpotifyFamily$ = this._spotifyFamily.getValueFunction();
readonly setSpotifyFamilyInProgress = this._spotifyFamily.setInProgressFunction();
readonly getSpotifyFamilyInProgress = this._spotifyFamily.getInProgressFunction();
readonly setSpotifyFamilyError = this._spotifyFamily.setErrorFunction();
readonly getSpotifyFamilyError = this._spotifyFamily.getErrorFunction();

//Users
readonly setSpotifyUserList = this._spotifyUsersList.setValueFunction();
readonly getSpotifyUserList$ = this._spotifyUsersList.getValueFunction();
readonly setSpotifyUserListInProgress = this._spotifyUsersList.setInProgressFunction();
readonly getSpotifyUserListInProgress = this._spotifyUsersList.getInProgressFunction();
readonly setSpotifyUserListError = this._spotifyUsersList.setErrorFunction();
readonly getSpotifyUserListError = this._spotifyUsersList.getErrorFunction();

//Families
readonly setSpotifyFamilyList = this._spotifyFamilyList.setValueFunction();
readonly getSpotifyFamilyList$ = this._spotifyFamilyList.getValueFunction();
readonly setSpotifyFamilyListInProgress = this._spotifyFamilyList.setInProgressFunction();
readonly getSpotifyFamilyListInProgress = this._spotifyFamilyList.getInProgressFunction();
readonly setSpotifyFamilyListError = this._spotifyFamilyList.setErrorFunction();
readonly getSpotifyFamilyListError = this._spotifyFamilyList.getErrorFunction();


}
