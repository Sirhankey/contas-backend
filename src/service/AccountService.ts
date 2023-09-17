import { Account } from "../models/Account";
import AccountModel from "../models/sequelize/AccountModel";

class AccountService {
    static async createAccount(accountData: Account) {
        try {
            const newAccount = await AccountModel.create({accountData});
            return newAccount;
        } catch (error) {
            throw new Error('Error creating account');
        }
    }

    static async getAccountById(accountId: number) {
        try {
            const account = await AccountModel.findByPk(accountId);
            return account;
        } catch (error) {
            throw new Error('Error fetching account');
        }
    }

    // ... outros métodos relacionados à lógica de negócios das contas


}

export default AccountService;