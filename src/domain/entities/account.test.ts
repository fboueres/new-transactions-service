import { ulid } from "ulid";
import { Account } from "./account";

describe("Account Entity", () => {
  it("should create a Account instace and return each attribute of it", () => {
    const accountId = ulid();
    const accountName = "Account";

    const account = new Account(accountId, accountName);

    expect(account).toBeInstanceOf(Account);
    expect(account.getId()).toBe(accountId);
    expect(account.getName()).toBe(accountName);
  });
});
