import React from 'react'
import TradingViewWidget, { themes } from 'react-tradingview-widget'
import { useState } from 'react'

const Chart = () => {
	return (
		<div className="bg-purple-900 h-screen pb-2 md:flex fixed w-full">
			<div className="w-full h-5/6">
			<TradingViewWidget
			symbol="BTCUSDT"
			theme="Dark"
			autosize />
			</div>
				<div className="flex-col invisible md:visible">
				<div className="p-16">item 1 chart</div>
				<div className="p-16">item 1 chart</div>
			</div>
		</div>
	)
}

export default Chart