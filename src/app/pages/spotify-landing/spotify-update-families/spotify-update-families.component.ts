import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter, map, take } from 'rxjs/operators';
import { BtnSize } from 'src/assets/directives/model';
import { FamilySpotify } from 'src/assets/interfaces/family-data';
import { SpotifyUsersService } from '../spotify-users.service';

@Component({
  selector: 'app-spotify-update-families',
  templateUrl: './spotify-update-families.component.html',
  styleUrls: ['./spotify-update-families.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotifyUpdateFamiliesComponent implements OnInit {

  formSpotifyFamily = this._fb.group({
    id: ['', Validators.required],
    email: ['', Validators.email],
    address: [''],
    members: [''],
    paidDate: ['', Validators.required]
  });

  columnsToShow: string[] = ['id', 'name', 'email', 'status', 'action'];

  btnSize = BtnSize;
  spotifyFamily$ = this._spotifyUsersSvc.getSpotifyFamily();

  constructor(
    private _fb: FormBuilder,
    private _spotifyUsersSvc: SpotifyUsersService
  ) { }

  ngOnInit(): void {
    this.loadSpotifyFamilyForm();
  }

  onSpotifyFamilyClickSave(): void {
    if (this.formSpotifyFamily.valid){
      const spotifyFamily = this.createSpotifyFamilyFromForm();
      console.log('CREATED', spotifyFamily);
    }
  }

  onSpotifyUserClickedRemove(id: string): void {
    console.log('REMOVE USER FROM FAMILY', id);
    this._spotifyUsersSvc.getSpotifyFamily().pipe(
      filter(spotifyFamily => !!spotifyFamily),
      map(spotifyFamily => {
        if (spotifyFamily) spotifyFamily.members = spotifyFamily?.members?.filter(member => member?.id !== +id)
        return spotifyFamily;
      }),
      take(1)
    ).subscribe(spotifyFamily => this._spotifyUsersSvc.setSpotifyFamily(spotifyFamily));
  }

  private loadSpotifyFamilyForm(): void {
    this.spotifyFamily$.pipe(
      take(1)
    ).subscribe(spotifyFamily => {
      this.formSpotifyFamily.patchValue({
        id: spotifyFamily?.number,
        email: spotifyFamily?.email,
        address: spotifyFamily?.address,
        members: spotifyFamily?.members,
        paidDate: spotifyFamily?.paidDate
      });
    });
  }

  private createSpotifyFamilyFromForm(): FamilySpotify {
    return {
      number: this.formSpotifyFamily.get('id')?.value,
      email: this.formSpotifyFamily.get('email')?.value,
      address: this.formSpotifyFamily.get('address')?.value,
      members: this.formSpotifyFamily.get('members')?.value,
      paidDate: this.formSpotifyFamily.get('paidDate')?.value
    };
  }

}
