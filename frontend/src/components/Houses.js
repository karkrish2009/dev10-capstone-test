import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";
import HouseList from "./HouseList";

export default function Houses({ isUserId, isHouseId, handleHouseId }) {
    const [formData, setFormData] = useState([{
      userId: isUserId,
      houses: ""
    }]);

    const navigate = useNavigate();
    

    function handleChange(event) {
        const { name, value, options } = event.target;
    
        
        console.log("I am in handleChange", event.target);
        // Check if the target element is a select element
        if (event.target.tagName === "SELECT") {
          const selectedOptions = Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value);
    
          const updatedFormData = { ...formData, [name]: selectedOptions };
          setFormData(updatedFormData);
          console.log(updatedFormData);
        } else {
          // Handle other input elements (e.g., text inputs)
          const updatedFormData = { ...formData, [name]: value };
          setFormData(updatedFormData);
          console.log(updatedFormData);
        }
      }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        try {
          console.log("I am in handleFormSubmit", formData)
          handleHouseId(formData.houses[0]);
          navigate("/results");
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };

    const containerStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        maxWidth: "1800px",
        margin: "auto",
        minHeight: "50vh",
        marginTop: "20vh"
      };

      const inputStyle = {
        backgroundColor: "#D3D4D9",
        color: "#2e282a",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        width: "100%",
        marginBottom: "15px",
      };
    
      const buttonStyle = {
        backgroundColor: "#ff6600",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s",
      };

    return (
        <div className="game-form-background">
          <div style={containerStyle}>
            <form onSubmit={handleFormSubmit}>
              <h2 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>Select House You Wish to Monitor</h2>
              <div className="row">
                <div className="col-12 col-md-8 mb-3">
                  <HouseList handleChange={handleChange} formData={formData} style={inputStyle} ownerId={isUserId} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mr-2" style={buttonStyle}>
                Submit
              </button>
            </form>
          </div>
        </div>
      );


}