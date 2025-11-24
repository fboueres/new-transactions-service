import { TransactionService } from "./transaction_service";
import { CreateAccountDTO } from "../dtos/create_account_dto";
import { CreateTransactionDTO } from "../dtos/create_transaction_dto";
import { Account } from "../../domain/entities/account";
import { Transaction } from "../../domain/entities/transaction";

describe("TransactionService", () => {
  it("should create a transaction", async () => {
    const sendingAccountDTO: CreateAccountDTO = {
      name: "Sending Account",
    };
    const sendingAccount: Account =
      await accountService.createAccount(sendingAccountDTO);

    const receivingAccountDTO: CreateAccountDTO = {
      name: "Receiving",
    };
    const receivingAccount: Account =
      await accountService.createAccount(receivingAccountDTO);

    const transactionDTO: CreateTransactionDTO = {
      sendingAccountId: sendingAccount.getId(),
      receivingAccountId: receivingAccount.getId(),
      amount: 500,
    };

    const res = await transactionService.createTransaction(transactionDTO);

    expect(res).toBeInstanceOf(Transaction);
    expect(res.getId()).not.toBeNull();
    expect(res.getSendingAccount().getId()).toBe(
      transactionDTO.sendingAccountId,
    );
    expect(res.getReceivingAccount().getId()).toBe(
      transactionDTO.receivingAccountId,
    );
    expect(res.getAmount()).toBe(transactionDTO.amount);

    const savedTransaction = await transactionService.findTransactionById(
      res.getId(),
    );

    expect(savedTransaction).toBeInstanceOf(Transaction);
    expect(savedTransaction.getId()).toBe(res.getId());
    expect(savedTransaction.getSendingAccount().getId()).toBe(
      res.getSendingAccount().getId(),
    );
    expect(savedTransaction.getReceivingAccount().getId()).toBe(
      res.getReceivingAccount().getId(),
    );
    expect(savedTransaction.getAmount()).toBe(res.getAmount());
  });

  it("should update a transaction");

  it("should delete a transaction");
});
