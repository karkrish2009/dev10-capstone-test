import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HouseList({handleChange, formData, ownerId}) {
    const [houses, setHouses] = useState([]);
    const navigate = useNavigate();
    console.log("I am in houselist ")
    useEffect(() => {
        fetch('http://localhost:8080/api/homeowner/' + ownerId)
            .then(res => {
                if (res.ok) {
                    console.log(res);
                    return res.json();
                } else if (res.status >= 500) {
                    return res
                        .json()
                        .then(error =>
                            Promise.reject(new Error(error.message))
                        );
                } else {
                    // All other errors
                    return Promise.reject(
                        new Error(`Unexpected status code ${res.status}`)
                    );
                }
            })
            .then(data => {
                setHouses(data.houses);
            })
            .catch(error => {
                // console.error(error); // Log for debugging
                navigate('/error', { state: { error } });
            });
    }, []); // This happens every time the component is mounted
    //console.log(genres);
    return (
        <>
            <label htmlFor="house" className="form-label">
                Homes
            </label>
            <select
                name="houses"
                id="houses"
                required
                multiple
                onChange={handleChange}
                className="form-select"
                value={formData.houses || []}
                >
                
                <option value=''  disabled>
                    [Select Houses]
                </option>
                {houses.map(house => (
                    <option value={house.houseId} key={house.houseId}>
                        {house.streetAddress + ', ' + house.city + ', ' + house.zipCode}
                    </option>
                ))}
            </select>
        </>
    );
}