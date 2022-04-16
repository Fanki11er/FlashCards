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
  AllAmount: number;
  ToLearnAmount: number;
  NewAmount: number;
}
