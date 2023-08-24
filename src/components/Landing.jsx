import { useEffect, useState } from 'react';

// API
import { getData } from '../services/api';
import Loader from './Loader';
import Crypto from './Crypto';

// Style
import styles from '../styles/Landing.module.css'


const Landing = () => {

    const [data , setData] = useState([])
    const [search , setSearch] = useState('')

    useEffect(() => {
        const fetchApi = async () => {
            const apiData = await getData()
            setData(apiData)
        }

        fetchApi()
    }, [])


    // Filter on Search
    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    const searchedData = data.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <>
            <input className={styles.input} type='text' placeholder='Search...' value={search} onChange={searchHandler} />
            {data.length ?
                <div className={styles.coinContainer}>
                    {searchedData.map((crypto) => <Crypto
                        key = {crypto.id}
                        symbol = {crypto.symbol}
                        name = {crypto.name}
                        image = {crypto.image}
                        price = {crypto.current_price}
                        marketCap = {crypto.market_cap}
                        priceChange = {crypto.price_change_percentage_24h}
                    />)}
                </div>  
                :
                <Loader/>  
            }
            
        </>
    );
};

export default Landing;