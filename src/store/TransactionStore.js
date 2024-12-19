import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import {
    HISTORY_ALL, TRANSACTION_PAY, TRANSACTION_TRANSFER_CHILD
} from "../constants/endpoints/endpointConst.js";

class TransactionStore {
    parentBalance;
    childBalance;
    transactions;
    transactionStatus;
    transactionAmount;
    constructor() {
        this.parentBalance = 0;
        this.childBalance = 0;
        this.transactions = [];
        makeAutoObservable(this, {}, { autoBind: true });
    }

    pay = async (data) => {
        let errorMessage;
        let response;
        try {
            response = await api.post(TRANSACTION_PAY, {...data});
            this.transactionStatus = response?.data?.status;
            this.transactionAmount = response?.data?.sum;
        } catch(err) {
            errorMessage = err.response?.data?.message;
        }
        return errorMessage || response?.data?.status;
    }

    transferToChild = async (amount) => {
        let errorMessage;
        let response;
        try {
            response = await api.post(TRANSACTION_TRANSFER_CHILD, {sum: amount});
        } catch(err) {
            errorMessage = err.response?.data?.message;
        }
        return errorMessage || response;
    }

    getLastOperations = async () => {
        let errorMessage;
        try {
            const response = await api.get(BALANCE_CHILD);
            runInAction(() => {
                this.childBalance = response.data.balance;
            });
        } catch(err) {
            errorMessage = err.response?.data?.message;
        }
        return errorMessage || null;
    }

    getAllOperations = async () => {
        let errorMessage;
        try {
            const response = await api.get(HISTORY_ALL);
            runInAction(() => {
                this.transactions = response.data;
            });
        } catch(err) {
            errorMessage = err.response?.data?.message;
        }
        return errorMessage || null;
    }


}
export default new TransactionStore();
