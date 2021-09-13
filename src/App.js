
import './App.css';

const name = "Hello World";
const obj = { name: "Hello World Object" }
const data = ['We ', 'are ', 'United'] //Show these in seperate tags



function Hello() {
  return (
    <div >
      <p className="card-body text-primary bg-light"> {name}</p>
    </div>
  );
}
function ObjProp() {
  return (
    <>
      <p className="card-body text-primary bg-light">{obj.name}</p>
    </>
  );
}

function ArrayProp() {
  return (
    <>
      <div className="card-body">

        <span className=" text-primary bg-light">
          {data[0]}
        </span>
        <span className=" text-primary bg-light">
          {data[1]}
        </span>
        <span className=" text-primary bg-light">
          {data[2]}
        </span>
      </div>

    </>);
}

const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
function ArrOfObj() {
  const listItem = list.map((data, id) =>
    <li key={id} className="list-group-item">{data.name}</li>)
  return (
    <ul >{listItem}</ul>
  );
}


const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
function ComplexArrObj() {
  const compObj = complex.map((data, id) =>
    <>
      <div className="card-body">
        <h3 className="list-group-item">{data.company}</h3>
        <ul>
          <strong className="text-primary">Jobs</strong>
          <li className="list-group-item">
            {data.jobs[0]}
          </li>
          <li className="list-group-item">
            {data.jobs[1]}
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <>

      {compObj}

    </>
  );
}



export { Hello, ObjProp, ArrayProp, ArrOfObj, ComplexArrObj };
