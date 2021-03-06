import React from 'react'

const RecentDonationCard = ({data}: {data: any}) => {
	const link = `https://ropsten.etherscan.io/tx/${data._id}`

	return (
		<div className='md:p-5 mx-10 my-5 shadow-2xl rounded-lg transition-all hover:scale-110'>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<div className='flex justify-center my-5'>
					<h1 className='gradient-text my-5 overflow-hidden text-2xl'>
						{data.sender}
					</h1>
					<h1 className='my-6 w-full text-center'>Has Donated To</h1>
					<h1 className='gradient-text my-5 overflow-hidden text-2xl'>
						{data.receiver}
					</h1>
				</div>
				<div>
					<h1>Amount: {data.amount} ETH</h1>
					<h1>Date/Time: {data.timestamp}</h1>
					<h1>Message: {data.message}</h1>
				</div>
			</a>
		</div>
	)
}

export default RecentDonationCard