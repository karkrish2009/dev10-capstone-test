import RectangularDimensions from './RectangularDimensions';
import TempSettings from './TempSettings';
import { useParams, Link } from 'react-router-dom';


export default function Room() {
    const { id } = useParams();

    const backgroundColorStyles = {
        backgroundColor: '#B5C689',
        padding: '20px',
    
    }

    const largerTextStyles = {
        fontSize: '25px',
    };

    const smallerTextStyles = {
        fontSize: '15px',
    };

    return (
        <div>
            <p>I am here {id}</p>
        </div>
    );
}