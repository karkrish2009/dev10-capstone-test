import Room from './Room';

export default function Rooms() {
    const rooms = [{
            roomId: 1,
            name: 'Living Room',
            description: 'meeting guests, vistors',
            length: 20,
            breadth: 10,
            height: 10
        },
        {
            roomId: 2,
            name: 'Family Room',
            description: 'TV post-dinner gathering place',
            length: 32,
            breadth: 22,
            height: 12
        },
        {
            roomId: 3,
            name: 'Kitchen',
            description: 'Cooking and informal eating',
            length: 15,
            breadth: 25,
            height: 10
        },
        {
            roomId: 4,
            name: 'Bedroom',
            description: 'We sleep here',
            length: 18,
            breadth: 28,
            height: 10
        }
    ];
    
    return (
        <div>
            <button>Add a Room</button>
            { rooms.map(room => <Room room={room} key={room.id} />)} 
        </div>
    );
}