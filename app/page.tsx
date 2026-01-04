import React from 'react'
import Image from 'next/image'
import DataTable from './components/DataTable'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown } from 'lucide-react'

const trendingCoinsData: TrendingCoin[] = [
	{
		item: {
			id: 'bitcoin',
			name: 'Bitcoin',
			symbol: 'BTC',
			market_cap_rank: 1,
			thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png',
			large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
			data: {
				price: 89113.00,
				price_change_percentage_24h: {
					usd: 5.42,
				},
			},
		},
	},
	{
		item: {
			id: 'ethereum',
			name: 'Ethereum',
			symbol: 'ETH',
			market_cap_rank: 2,
			thumb: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
			large: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
			data: {
				price: 3250.75,
				price_change_percentage_24h: {
					usd: 3.18,
				},
			},
		},
	},
	{
		item: {
			id: 'ripple',
			name: 'XRP',
			symbol: 'XRP',
			market_cap_rank: 3,
			thumb: 'https://assets.coingecko.com/coins/images/44/thumb/xrp.png',
			large: 'https://assets.coingecko.com/coins/images/44/large/xrp.png',
			data: {
				price: 2.45,
				price_change_percentage_24h: {
					usd: -1.25,
				},
			},
		},
	},
	{
		item: {
			id: 'solana',
			name: 'Solana',
			symbol: 'SOL',
			market_cap_rank: 4,
			thumb: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png',
			large: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
			data: {
				price: 195.42,
				price_change_percentage_24h: {
					usd: 8.76,
				},
			},
		},
	},
	{
		item: {
			id: 'cardano',
			name: 'Cardano',
			symbol: 'ADA',
			market_cap_rank: 5,
			thumb: 'https://assets.coingecko.com/coins/images/975/thumb/cardano.png',
			large: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
			data: {
				price: 0.95,
				price_change_percentage_24h: {
					usd: -2.33,
				},
			},
		},
	},
]

const columns: DataTableColumn<TrendingCoin>[] = [
	{
		header: 'Name',
		cellClassName: 'name-cell',
		cell: (coin) => {
			const item = coin.item

			return (
				<Link href={`/coin/${item.id}`}>
					<Image
						src={item.large}
						alt={item.name}
						width={24}
						height={24}
					/>
					<p>{item.name}</p>
				</Link>
			)
		},
	},
	{
		header: '24h Change',
		cellClassName: 'price-change',
		cell: (coin) => {
			const item = coin.item
			const isTrendingUp = item.data.price_change_percentage_24h.usd > 0

			return (
				<div
					className={cn(
						'price-change',
						isTrendingUp ? 'text-green-500' : 'text-red-500'
					)}
				>
					{isTrendingUp ? (
						<TrendingUp width={16} height={16} />
					) : (
						<TrendingDown width={16} height={16} />
					)}
					<p>{item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
				</div>
			)
		},
	},
	{
		header: 'Price',
		cellClassName: 'price-cell',
		cell: (coin) => `$${coin.item.data.price.toFixed(2)}`,
	},
]

const page = () => {
	return (
		<main className='main-container'>
			<section className='home-grid'>
				<div id='coin-overview'>
					<div className='header pt-2'>
						<Image
							src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
							alt='Bitcoin'
							width={56}
							height={56}
						/>
						<div className='info'>
							<p>BitCoin / BTC</p>
							<h1>$89,113.00</h1>
						</div>
					</div>
				</div>

				<p>Trending Coins</p>
				<DataTable
					data={trendingCoinsData}
					columns={columns}
					rowKey={(row) => row.item.id}
				/>
			</section>

			<section className='w-full mt-7 space-y-4'>
				<p>Categories</p>
			</section>
		</main>
	)
}

export default page

