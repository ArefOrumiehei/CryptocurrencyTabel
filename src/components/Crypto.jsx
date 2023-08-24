import PropTypes from 'prop-types'

// Style
import styles from '../styles/Crypto.module.css'


const Crypto = ({name , symbol , image , price , marketCap , priceChange}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

Crypto.propTypes = {
    name : PropTypes.string,
    symbol : PropTypes.string,
    image : PropTypes.string,
    price : PropTypes.number,
    marketCap : PropTypes.number,
    priceChange : PropTypes.number,
}

export default Crypto;