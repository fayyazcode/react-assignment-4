
import './App.css';

const name = "Hello World";
const obj = { name: "Hello World Object" }
const data = ['We ', 'are ', 'United'] //Show these in seperate tags



function Hello() {
  return (
    <div >
      <p> {name}</p>
    </div>
  );
}
function ObjProp() {
  return (
    <>
      <p>{obj.name}</p>
    </>
  );
}

function ArrayProp() {
  return (
    <>
      <span>
        {data[0]}
      </span>
      <span>
        {data[1]}
      </span>
      <span>
        {data[2]}
      </span>

    </>);
}

const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
function ArrOfObj (){
  const listItem =list.map((data,id)=>
  <li key={id}>{data.name}</li>)
  return(
    <ul>{listItem}</ul>
    );
  }
  
  
  const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
  function ComplexArrObj (){
    const compObj=complex.map((data,id)=>
    <>
      <h3>{data.company}</h3>
      <ul>
      <strong>Jobs</strong>
        <li  >
          {data.jobs[0]}
        </li>
        <li >
          {data.jobs[1]}
        </li>
      </ul>
    </>
    );
    return(
      <>

 {compObj}
 
      </>
    );
  }
  
  
  
  export { Hello, ObjProp, ArrayProp ,ArrOfObj,ComplexArrObj};
  