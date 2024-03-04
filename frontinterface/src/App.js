import {BiArchive} from "react-icons/bi";
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";

function App() {
  return (
    <div className="App container mx-auto mt-1 font-thin p-10">            
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top" />
        Your Appointments are ready
      </h1>
      <Search/>     
      <AddAppointments /> 
    </div>
  );
}

export default App;
