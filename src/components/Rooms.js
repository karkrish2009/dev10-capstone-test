import Room from './Room';

export default function Rooms() {
    const pets = [
        {
            petId: 1,
            name: 'Wishbone',
            type: 'DOG',
            breed: 'Jack Russell Terrier',
            dob: '2015-05-05',
            adopted: true,
            vaccinationStatus: 'UNKNOWN',
            imageUrl: 'https://i.imgur.com/yGzjvPj.jpg',
        },
        {
            petId: 2,
            name: 'Whiskers',
            type: 'CAT',
            breed: 'Tabby',
            dob: '2020-01-01',
            adopted: false,
            vaccinationStatus: 'UP_TO_DATE',
            imageUrl: 'https://i.imgur.com/vlnDvGW.jpg',
        },
        {
            petId: 3,
            name: 'Archie',
            type: 'DOG',
            breed: 'Golden Retriever',
            dob: '2022-12-15',
            adopted: false,
            vaccinationStatus: 'NOT_UP_TO_DATE',
            imageUrl: 'https://i.imgur.com/IeR2bMU.jpg',
        },
    ];
    
    return (
        <div>
            <button>Add a Room</button>
            <Room />
        </div>
    );
}