import RectangularDimensions from './RectangularDimensions';
import TempSettings from './TempSettings';

export default function Room({room}) {
    console.log("I am here");
    return (
        <div className='game-card'>
            
            <div className='card h-100'>
                <div>
                    <img
                        className='card-img-top'
                        style={{ height: '250px', objectFit: 'cover' }}
                        src={ room.imageUrl}
                        alt={`${room.name} is for ${room.description}`}
                    />
                </div>
                <div className='card-body'></div>
                    <h2 className='card-title fs-4'>Name: {room.name} </h2>
                    <h3 className='card-subtitle fs-5 mb-2 text-body-secondary'>Description: {room.description} </h3>
                    <p>Shape</p>
                    <RectangularDimensions dimensions={room.dimensions} />
                    <p>Temperature Settings</p>
                    {room.tempSettings.map(setting => <TempSettings setting={setting} />)}
                </div>
            <div style={backgroundColorStyles}>
                <h1 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>{room.name}</h1>
                <p style={largerTextStyles}>Description: {room.description}</p>
                <p style={largerTextStyles}>Dimensions:</p>
                <RectangularDimensions dimensions={room.dimensions} />
            </div>
            <div className='card-footer d-flex justify-content-end' >
                <a className='btn btn-warning me-2' href='/'>Edit</a><br />
                <a className='btn btn-danger' href='/'>Delete</a>
            </div>
        </div>
    );
}

