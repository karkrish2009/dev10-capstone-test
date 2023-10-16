import RectangularDimensions from './RectangularDimensions';
import TempSettings from './TempSettings';

export default function Room() {
    return (
        <div>
            <div>
                <img src='' alt='' />
            </div>
            <div>
                <h2>Name: </h2>
                <h3>Description:</h3>
                <h3>Shape</h3>
                <RectangularDimensions />
                <h3>Temperature Settings</h3>
                <TempSettings />
            </div>
            <div>
                <a href='/'>Edit</a>
                <a href='/'>Delete</a>
            </div>
        </div>
    );
}