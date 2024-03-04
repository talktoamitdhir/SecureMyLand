import { useState,useEffect,useCallback } from "react";
import {BiCalendar} from "react-icons/bi";
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  
  let fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(jsonData => setAppointmentList(jsonData));
  },[]);

  useEffect(() => { fetchData(); },[fetchData]);

  return (
    <div className="App container mx-auto mt-1 font-thin p-10">            
      <h1 className="text-5xl text-center">
        <BiCalendar className="inline-block align-top text-blue-400" />
        Your Appointments
      </h1>
      <AddAppointments/> 
      <Search/>  
      <ul className="divide-y divide-gray-200 py-5">        
        {appointmentList.map(eachAppointment=>(
          <AppointmentInfo 
          key={eachAppointment.id} 
          eachAppointment={eachAppointment} />
        ))
        }
      </ul>
    </div>
  );
}

export default App;
