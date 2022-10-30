import  ReactDOM  from "react-dom/client";
// import Parent from "./props/Parent";
// import GuestList from "./state/GuestList";
import UserSearch from './state/UserSearch'
const el = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div>
      {/* <Parent /> */}
      <UserSearch />
    </div>
  );
};

root.render(<App />);