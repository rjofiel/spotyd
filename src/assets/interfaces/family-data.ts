import { SpotifyUser } from "./user-data";

export interface FamilySpotify {
  number: number | null;
  email: string;
  address: string;
  members?: SpotifyUser[];
  paidDate: string;
}
