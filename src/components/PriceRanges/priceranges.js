import './priceranges.css';
import { useAuth } from '../../authContext';
function PriceRanges() {
    const { changePrice, priceMax, priceMin, setPriceMax, setPriceMin } = useAuth();

    return (
        <>
            <h2 style={{ margin: '10px 10px' }}>Price Ranges</h2>
            <p className="prices" onClick={() => changePrice(10, 30)}>
                $10 to $30
            </p>
            <p className="prices" onClick={() => changePrice(40, 60)}>
                $40 to $60
            </p>
            <p className="prices" onClick={() => changePrice(70, 90)}>
                $70 to $90
            </p>
            <p className="prices" onClick={() => changePrice(100, 10000)}>
                $100 & Above
            </p>
            <div className="priceranges__input">
                <input type="number" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} />
                <input type="number" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
            </div>
        </>
    );
}

export default PriceRanges;
