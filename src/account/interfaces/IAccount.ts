export interface IAccountContactInfo {
  readonly skype: string;
  readonly vk: string;
  readonly fb: string;
  readonly email: string;
  readonly phone: string;
}

export interface IAccountPersonalInfo {
  readonly firstName: string;
  readonly surName: string;
  readonly lastName: string;
  readonly sex: number;
  readonly region: string;
  readonly city: string;
  readonly birthDate: Date;
  readonly passportSerial: number;
  readonly passportNumber: number;
  readonly passportDateIssue: Date;
  readonly passportWhomIssue: string;
  readonly passportDivisionCode: string;
}

export interface IAccountPrivateInfo {
  readonly bic: number;
  readonly bankName: string;
  readonly correspondentAccount: number;
  readonly paymentAccount: number;
  readonly cardNumber: number;
  readonly cardHolder: number;
  readonly payDetail: string;
  readonly inn: string;
  readonly pfr: string;
}

export interface IAccountBalance {
  readonly balanceOwnerId: number;
  readonly balanceAmount: number;
}
