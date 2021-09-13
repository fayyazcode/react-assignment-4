
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
  
  

  
  
  export { Hello, ObjProp, ArrayProp ,ArrOfObj,ComplexArrObj};
  