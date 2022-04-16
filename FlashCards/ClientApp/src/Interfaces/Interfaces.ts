export interface UserSettings {
  DailyFlashCards: number;
  MaximumBreak: number;
  PercentNew: number;
}
export interface AuthUser {
  Name: string;
  Settings: UserSettings;
  accessToken?: string;
}

export interface FlashCardsStatus {
  AllAmount: number;
  ToLearnAmount: number;
  NewAmount: number;
}

