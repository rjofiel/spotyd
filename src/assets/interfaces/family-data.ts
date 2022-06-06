import { SpotifyUser } from "./user-data";

export interface FamilySpotify {
  number: number;
  email: string;
  address: string;
  members?: SpotifyUser[];
  paidDate: string;
}
