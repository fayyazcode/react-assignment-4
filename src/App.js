
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

  
  
  export { Hello, ObjProp, ArrayProp ,ArrOfObj,ComplexArrObj};
  