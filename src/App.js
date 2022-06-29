import Calendar from "./components/Calendar";
import "./css/calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <body>
        <header className="app-header">
          <h1>Google Doodle Gallery</h1>
        </header>
        <p>
          Pick any day prior to today's date to see the corresponding special
          days.
        </p>
        <Calendar />
      </body>
    </div>
  );
}

export default App;
