import { User } from "./User";

export class OnDonationEvent {
  constructor(
    public user: string,
    public amount: number,
    public message: string,
    public twitchUser?: User,
  ) { }
}