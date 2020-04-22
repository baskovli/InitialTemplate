import React, { useState, useEffect, Fragment } from "react";

export const FetchData = () => {
  const [forecasts, setForecasts] = useState<Array<any>>();

  useEffect(() => {
    const populateWeatherData = async () => {
      const response = await fetch("weatherforecast");
      const data = await response.json();
      setForecasts(data);
    };
    populateWeatherData();
  }, []);

  return (
    <Fragment>
      {!forecasts ? (
        <p>
          <em>Loading...</em>
        </p>
      ) : (
        <table className="table table-striped" aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {forecasts.map((forecast) => (
              <tr key={forecast.date}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default FetchData;
