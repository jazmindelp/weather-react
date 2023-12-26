export default function Weather() {
  return (
    <div>
      <h1 class="current-city" id="current-city">
        Paris
      </h1>
      <p class="current-details">
        <span id="current-date"></span>Moderate rain <br />
        Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
      </p>
    </div>
  );
}
