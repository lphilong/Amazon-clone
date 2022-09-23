import './priceranges.css';
import { useAuth } from '../../authContext';
function PriceRanges() {
    const { changePrice, priceMax, priceMin, setPriceMax, setPriceMin } = useAuth();

    return (
        <div>
            <h2 style={{ margin: '10px 10px' }}>Price Ranges</h2>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                <li className="prices" onClick={() => changePrice(10, 30)}>
                    $10 to $30
                </li>
                <li className="prices" onClick={() => changePrice(40, 60)}>
                    $40 to $60
                </li>
                <li className="prices" onClick={() => changePrice(70, 90)}>
                    $70 to $90
                </li>
                <li className="prices" onClick={() => changePrice(100, 10000)}>
                    $100 & Above
                </li>
            </ul>

            <div className="priceranges__input">
                <input type="number" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} />
                <input type="number" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
            </div>
        </div>
    );
}

export default PriceRanges;
