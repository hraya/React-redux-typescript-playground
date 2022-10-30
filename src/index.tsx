import  ReactDOM  from "react-dom/client";

const el = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  )
};

root.render(<App />);