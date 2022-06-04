import { FaQuoteLeft} from 'react-icons/fa';
import './App.css';

function Test(props){
    return (
        <div id="quote">
            <h2 id="text"> <FaQuoteLeft /> {props.num}</h2>
            <p id="author">{`-${props.author}`}</p>
        </div>
    );
}

export default Test;