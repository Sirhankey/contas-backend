import { DataTypes, Model, Optional } from "sequelize";
import { AccountCategory, AccountGroup, AccountStatus, PaymentMethod } from "../enums";
import { sequelize } from "../database/connection";

interface IAccount {
    id: number;
    name: string;
    amount: number;
    dueDate: Date;
    isPaid: boolean;
    category: AccountCategory;
    group: AccountGroup;
    status: AccountStatus;
    paymentMethod?: PaymentMethod;
    paymentDate?: Date;
    discount?: number;
}

export type TaskCreationAttributes = Optional<IAccount, 'id'>;


export class Account extends Model<IAccount, TaskCreationAttributes> implements IAccount {
    declare id: number;
    declare name: string;
    declare amount: number;
    declare dueDate: Date;
    declare isPaid: boolean;
    declare category: AccountCategory;
    declare group: AccountGroup;
    declare status: AccountStatus;
    declare paymentMethod: PaymentMethod | undefined;
    declare paymentDate: Date | undefined;
    declare discount: number | undefined;
}

Account.init(
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
        tableName: 'accounts',
        modelName: 'account',
    }
);
