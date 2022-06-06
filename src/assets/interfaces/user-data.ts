/* eslint-disable @typescript-eslint/naming-convention */
export interface UserData {
  email: string;
  displayName: string;
  photoURL: string;
}

export enum StatusUser {
  PAID = 'PAID',
  PENDING = 'PENDING',
  CANCEL = 'CANCEL'
}

export interface SpotifyUser {
  id: number | null;
  name: string;
  email: string;
  password: string;
  phone: string;
  startDate: string;
  status: StatusUser;
  belongsToFamily: string;
}
