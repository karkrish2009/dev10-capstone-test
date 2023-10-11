import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GameForm() {

    const [formData, setFormData] = useState({
        userId: "",
        genres: "",
        platforms: "",
        startDate: "1958-01-01",
        endDate: "2023-01-01",
        minMetaCritic: 0,
        maxMetaCritic: 100
      });

    const navigate = useNavigate();

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
        maxWidth: "600px",
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

      function handleChange(event) {
        const { name, value } = event.target;
    
        // Check if the target element is a select element
       
          // Handle other input elements (e.g., text inputs)
          const updatedFormData = { ...formData, [name]: value };
          setFormData(updatedFormData);
          console.log(updatedFormData);
        
      }

      const handleFormSubmit = (event) => {
        event.preventDefault();
        try {
          navigate("/results", { state: { formData } });
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
    return (
        <div className="game-form-background">
        <div style={containerStyle}>
        <form onSubmit={handleFormSubmit}>
          <h2 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>Game Preferences</h2>
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <label htmlFor="dateRange">Release Date Range:</label>
              <div className="d-flex">
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="me-2"
                  onChange={handleChange}
                  required
                  value={formData.startDate}
                  defaultValue={formData.startDate}
                  style={inputStyle}
                />
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  onChange={handleChange}
                  required
                  value={formData.endDate}
                  defaultValue={formData.endDate}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <label htmlFor="minMetaCritic">Minimum MetaCritic Rating:</label>
              <input
                type="number"
                id="minMetaCritic"
                name="minMetaCritic"
                min="0"
                max="100"
                onChange={handleChange}
                required
                value={formData.minMetaCritic}
                defaultValue={"0"}
                style={inputStyle}
              />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <label htmlFor="maxMetaCritic">Maximum MetaCritic Rating:</label>
              <input
                type="number"
                id="maxMetaCritic"
                name="maxMetaCritic"
                min="0"
                max="100"
                onChange={handleChange}
                value={formData.maxMetaCritic}
                defaultValue={"100"}
                required
                style={inputStyle}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mr-2" style={buttonStyle}>
            Submit
          </button>
          
        </form>
        </div>
        </div>
    )

} 