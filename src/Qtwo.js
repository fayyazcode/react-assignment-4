//import one component vs multiple

//Q2) Briefly explain with an example what's the difference between
//import Something from 'package' VS import {Something} from 'package'
function ImportExp(){
    return(
        <>
        <div>
            <p>
                when u import one component which is exported thought default u use <strong>component name from ./filename </strong> 
                u can export or import only one component through this method
            </p>
            <p>
                when u use curly brackets to export a component u have to use curly brackets then <strong>component name from ./filename </strong>
                also you can export or import multiple components using curly brackets
            </p>
        </div>
        </>
        );
}
export default ImportExp;