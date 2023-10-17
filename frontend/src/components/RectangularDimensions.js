export default function RectangularDimensions({dimensions}) {
    const smallerTextStyles = {
        fontSize: '20px',
    };
    return (
        <ul className='card-text'>
            <li style={smallerTextStyles}>Length: {dimensions.length} </li>
            <li style={smallerTextStyles}>Breadth: {dimensions.breadth}</li>
            <li style={smallerTextStyles}>Height: {dimensions.height}</li>
        </ul>
    );
}