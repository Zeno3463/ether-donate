import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import { transactionAbi, transactionAddress } from '../lib/constants';

interface TransactionContextInterface {
	currentAccount: any,
	connectWallet: any,
	makeTransaction: any,
	createPage: any,
	pages: any
}

export const TransactionContext = React.createContext<TransactionContextInterface | null>(null);

let ethereum: any;
if (typeof window !== 'undefined') ethereum = window.ethereum;

const getTransactionContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const contract = new ethers.Contract(transactionAddress, transactionAbi, signer);
	return contract;
}

const TransactionProvider = ({ children }: any) => {
	const [currentAccount, setCurrentAccount] = useState();
	const [pages, setPages] = useState();

	const connectWallet = async () => {
		const accounts = await ethereum.request({method: 'eth_requestAccounts'});
		setCurrentAccount(accounts[0]);
	}

	const createPage = async (title: string, pageHash: string) => {
		const transactionContract = getTransactionContract();
		const transactionHash = await transactionContract.addPage(title, pageHash);
		await transactionHash.wait();
	}

	const getAllPages = () => {
		const transactionContract = getTransactionContract();
		transactionContract.getPages().then((pgs: any) => {
			setPages(pgs);
		});
	}

	const makeTransaction = async (receiver: string, amount: string, message: string, pageHash: string) => {
		await ethereum.request({
			method: 'eth_sendTransaction',
			params: [{
				from: currentAccount,
				to: receiver,
				gas: "0x5208",
				value: ethers.utils.parseEther(amount)._hex
			}]
		});

		const transactionContract = getTransactionContract();
		const transactionHash = await transactionContract.sendTransaction(receiver, amount, message, pageHash);
		await transactionHash.wait();
	}

	useEffect(() => {
		const checkAccount = async () => {
			const accounts = await ethereum.request({method: 'eth_accounts'});
			if (accounts.length) setCurrentAccount(accounts[0]);
		}
		getAllPages();
		checkAccount();
	}, [])

	return (
		<TransactionContext.Provider value={{
			currentAccount,
			connectWallet,
			makeTransaction,
			createPage,
			pages
		}}>
			{children}
		</TransactionContext.Provider>
	)
}

export default TransactionProvider