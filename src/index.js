import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css'
import {Hello,ObjProp,ArrayProp,ArrOfObj,ComplexArrObj} from './App';
import ImportExp from './Qtwo';
import {User} from './ApiData';


ReactDOM.render(
  <React.StrictMode>
<Hello />
<ObjProp />
<ArrayProp />
<ArrOfObj />
<ComplexArrObj />
<ImportExp />
<User />
</React.StrictMode>,
  document.getElementById('root')
);


