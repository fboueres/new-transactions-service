import { ulid } from "ulid";
import { Transaction } from "./transaction";
import { Account } from "./account";

describe("Transaction Entity", () => {
  it("should create a Transaction instance and return each attribute of it", () => {
    const transactionId = ulid();
    const sendingAccount = new Account(ulid(), "Sending Account");
    const receivingAccount = new Account(ulid(), "Receiving Account");
    const amount: Number = 500.0;

    const transaction = new Transaction(
      transactionId,
      sendingAccount,
      receivingAccount,
      amount,
    );

    expect(transaction).toBeInstanceOf(Transaction);
    expect(transaction.getSendingAccount()).toBeInstanceOf(Account);
    expect(transaction.getReceivingAccount()).toBeInstanceOf(Account);
    expect(transaction.getAmount()).toBe(amount);
  });
});
