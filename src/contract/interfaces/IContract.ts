export interface IContract {
  readonly contractOwnerId: number;
  readonly contractName: string;
  readonly contractDescription: string;
  readonly contractImageLink: string;
  readonly contractPrice: number;
  readonly contractType: number;
  readonly contractUuid: string;
  readonly contractStatus: number;
  readonly createAt: Date;
  readonly updateAt: Date;
}
