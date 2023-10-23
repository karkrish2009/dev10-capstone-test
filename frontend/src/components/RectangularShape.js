export default function RectangularShape({x, y, length, breadth }) {
    console.log("Rectangular Shape", x, y, length, breadth);
    const smallerTextStyles = {
        fontSize: '20px',
    };
    return (
        
        <rect
            x= {x}
            y= {y}
            width= {length}
            height={breadth}
        />
        
    );
}