export interface UserSettings {
  dailyFlashCards: number;
  maximumBreak: number;
  percentNew: number;
}
export interface AuthUser {
  id: number;
  name: string;
  settings: UserSettings;
  accessToken?: string;
}

export interface FlashCardsStatus {
  allAmount: number;
  toLearnAmount: number;
  newAmount: number;
}
