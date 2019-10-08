import React,{useEffect,useState} from 'react'
import Chart from '../../components/Chart/Chart.cmp'
import BitcoinService from '../../services/BitcoinService'
import './StatisticPage.style.scss'

const StatisticPage =()=>{

    const [marketPriceData,setMarketPriceData]=useState('')
    useEffect(() => {
        (async () => {
            const marketPriceData = await BitcoinService.getMarketPrice()
            setMarketPriceData({ marketPriceData })
        })();
    }, [])


   return marketPriceData&&(
       <div>
           <Chart marketPriceData={marketPriceData}/>
       </div>
   )
}

export default StatisticPage



