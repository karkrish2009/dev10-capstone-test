import Room from './Room';

export default function Rooms() {
    const rooms = [{
            roomId: 1,
            name: 'Living Room',
            description: 'meeting guests, vistors',
            dimensions: {
                length: 20,
                breadth: 10,
                height: 10
            },
            tempSettings: [
                {
                    settingId: 1,
                    startTime: '9 PM',
                    endTime: '5 PM',
                    setTemp: 65
                },
                {
                    settingId: 2,
                    startTime: '5 PM',
                    endTime: '9 PM',
                    setTemp: 75
                },

            ]
        },
        {
            roomId: 2,
            name: 'Family Room',
            description: 'TV post-dinner gathering place',
            dimensions: {
                length: 32,
                breadth: 22,
                height: 12
            },
            tempSettings: [
                {
                    settingId: 1,
                    startTime: '8 AM',
                    endTime: '3 PM',
                    setTemp: 65
                },
                {
                    settingId: 2,
                    startTime: '3 PM',
                    endTime: '11 PM',
                    setTemp: 75
                },
                {
                    settingId: 3,
                    startTime: '11 PM',
                    endTime: '8 AM',
                    setTemp: 60
                }

            ]
        }
        /*
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
        */
    ];
    
    return (
        <div>
            <button>Add a Room</button>
            { rooms.map(room => <Room room={room} key={room.id} />)} 
        </div>
    );
}