import React from 'react'
import TradingViewWidget, { themes } from 'react-tradingview-widget'

const Chart = () => {
	return (
		<div className="bg-purple-900 h-screen flex justify-center w-full mb-20 container">
			<div className="pt-2 w-full mb-20">
			<TradingViewWidget
			symbol="BTCUSDT"
			theme="Dark"
			autosize />
			</div>
		</div>
	)
}

export default Chart