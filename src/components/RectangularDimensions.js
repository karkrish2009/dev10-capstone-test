export default function RectangularDimensions({dimensions}) {
    return (
        <ul>
            <li>Length: {dimensions.length} </li>
            <li>Breadth: {dimensions.breadth}</li>
            <li>Height: {dimensions.height}</li>
        </ul>
    );
}