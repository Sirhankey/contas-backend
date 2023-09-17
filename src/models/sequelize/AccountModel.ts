import { Model, DataTypes, Sequelize } from 'sequelize';
import {AccountCategory, AccountGroup, AccountStatus, PaymentMethod} from "../../enums/";


class AccountModel extends Model {

    public static initialize(sequelize: Sequelize) {
        this.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                amount: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: false,
                },
                dueDate: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                isPaid: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                category: {
                    type: DataTypes.ENUM(...Object.values(AccountCategory)),
                    allowNull: false,
                },
                group: {
                    type: DataTypes.ENUM(...Object.values(AccountGroup)),
                    allowNull: false,
                },
                status: {
                    type: DataTypes.ENUM(...Object.values(AccountStatus)),
                    allowNull: false,
                },
                paymentMethod: {
                    type: DataTypes.ENUM(...Object.values(PaymentMethod)),
                    allowNull: true,
                },
                paymentDate: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
                discount: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: true,
                },
            },
            {
                sequelize,
                modelName: 'Accounts', // Nome do modelo
            }
        );
    }
}

export default AccountModel;
