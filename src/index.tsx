import  ReactDOM  from "react-dom/client";
// import Parent from "./props/Parent";
// import GuestList from "./state/GuestList";
// import UserSearch from './state/UserSearch'
import EventComponent from "./events/EventComponent";
const el = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div>
      {/* <Parent /> */}
      <EventComponent />
    </div>
  );
};

root.render(<App />);