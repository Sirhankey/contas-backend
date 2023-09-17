import { Request, Response } from 'express';
import AccountService from '../service/AccountService';
import { PaymentMethod } from '../enums';
import { AccountClass } from '../models/Account';

class AccountController {
    static async createAccount(req: Request, res: Response) {
        try {
            const { name, amount, dueDate, category, group, status } = req.body;

            const newAccount = new AccountClass(name,
                amount,
                dueDate,
                category,
                group,
                status)
            await AccountService.createAccount(newAccount)



            res.status(201).json(newAccount);
        } catch (error) {
            res.status(500).json({ error: 'Error creating account' });
        }
    }

    static async getAccountById(req: Request, res: Response) {
        try {
            const accountId = parseInt(req.params.id, 10);

            const account = await AccountService.getAccountById(accountId);

            if (!account) {
                return res.status(404).json({ error: 'Account not found' });
            }

            res.json(account);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching account' });
        }
    }

    static async updateAccount(req: Request, res: Response) {
        try {
            const accountId = parseInt(req.params.id, 10);
            const { name, amount, dueDate, category, group, status } = req.body;

            const updatedAccount = await AccountService.updateAccount(accountId, {
                name,
                amount,
                dueDate,
                category,
                group,
                status,
            });

            if (!updatedAccount) {
                return res.status(404).json({ error: 'Account not found' });
            }

            res.json(updatedAccount);
        } catch (error) {
            res.status(500).json({ error: 'Error updating account' });
        }
    }

    static async deleteAccount(req: Request, res: Response) {
        try {
            const accountId = parseInt(req.params.id, 10);

            const deletedAccount = await AccountService.deleteAccount(accountId);

            if (!deletedAccount) {
                return res.status(404).json({ error: 'Account not found' });
            }

            res.json({ message: 'Account deleted' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting account' });
        }
    }

}

export default AccountController;
