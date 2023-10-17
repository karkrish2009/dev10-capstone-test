export default function TempSettings ({setting}) {
    return (
        <ul className='card-text'>
            <li>Start Time: {setting.startTime}</li>
            <li>End Time: {setting.endTime}</li>
            <li>Set Temperature: {setting.setTemp}</li>
        </ul>
    );
}