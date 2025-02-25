import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <TextField label="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
