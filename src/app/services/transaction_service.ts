import { Transaction } from "../../domain/entities/transaction";
import type { CreateTransactionDTO } from "../dtos/create_transaction_dto";

export class TransactionService {
    constructor(
        private readonly transactionRepository: TransactionRepository,
        private readonly accountService: AccountService,
    ) {}

    async createTransaction(dto: CreateTransactionDTO): Promise<Transaction> {
        const sendingAccount = await this.accountService.findAccountById(dto.sendingAccountId);
        const receivingAccount = await this.accountService.findAccountById(dto.receivingAccountId);

        const transaction = new Transaction(
            "id",
            sendingAccount,
            receivingAccount,
            dto.amount,
        );

        await this.transactionRepository.save(transaction);

        return transaction;
    }
}