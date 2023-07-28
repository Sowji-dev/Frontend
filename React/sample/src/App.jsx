import './App.css'
import React, { useState } from 'react';
import Players from './Players';
function App() {
  let [teamBlue,setTeamB]=useState([
    "Rohit Sharma", "Kieron Pollard", "Suryakumar Yadav", "Jasprit Bumrah", "Ishan Kishan","Ramandeep Singh", "Rahul Buddhi", "Hrithik Shokeen", "Arjun Tendulkar", "Aryan Juyal", "Fabian Allen", "Dewald Brevis", "Basil Thampi", "M Ashwin", "Jaydev Unadkat", "Mayank Markande", "Tilak Varma", "Sanjay Yadav", "Riley Meredith", "Mohd Arshad Khan", "Anmolpreet Singh"
  ]);
  let [teamRed,setTeamR]=useState([]);
  var team
  function changeTeam(i,teamName){
    if(teamName=='Blue'){
      var r=teamBlue.splice(i,1)
      teamRed.push(r[0])
    }
    if(teamName=='Red'){
        var r=teamRed.splice(i,1)
        teamBlue.push(r[0])
    }
    setTeamB([...teamBlue]);
    
    setTeamR([...teamRed])
    //console.log(r,teamBlue,teamOrange)
  }
  return (
    <div className='m-auto d-flex parent'>
      <Players clas='bluebox' ar={teamBlue} teamName='Blue' changeTeam={changeTeam}/>
      <Players clas='redbox' ar={teamRed} teamName='Red' changeTeam={changeTeam}/>
      </div>
  );
}
export default App;