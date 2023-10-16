import RectangularDimensions from './RectangularDimensions';
import TempSettings from './TempSettings';

export default function Room() {
    const room = {
        roomId: 1,
        name: 'Family Room',
        description: 'TV post-dinner gathering place',
        length: 20,
        breadth: 10,
        height: 10
    };
    return (
        <div>
            <div>
                <img src='' alt='' />
            </div>
            <div>
                <h2>Name: {room.name} </h2>
                <h3>Description: {room.description} </h3>
                <h3>Shape</h3>
                <RectangularDimensions length={room.length} breadth={room.breadth} height={room.height} />
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