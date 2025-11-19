import { Account } from "./account";

export class Transaction {
  constructor(
    private id: string,
    private sendingAccount: Account,
    private receivingAccount: Account,
    private amount: Number,
  ) {}

  getId(): string {
    return this.id;
  }

  getSendingAccount(): Account {
    return this.sendingAccount;
  }

  getReceivingAccount(): Account {
    return this.receivingAccount;
  }

  getAmount(): Number {
    return this.amount;
  }
}
