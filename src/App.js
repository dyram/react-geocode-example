import React from "react";
import "./styles.css";
import Geocode from "react-geocode";

const API_KEY = "Your API KEY";

export default function App() {
  const [latLong, setLatLong] = React.useState();
  React.useEffect(() => {
    Geocode.setApiKey(API_KEY);
    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();

    Geocode.fromAddress("Eiffel Tower").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
