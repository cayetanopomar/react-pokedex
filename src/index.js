import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';


// const Foo =  ({name}) => {

//     return <p>This is a Foo Component, It's name is {name}</p>
// }


// const Item =  (props) => {

//     return <div>
//         <p>This is an item Component, It's name is {props.name}</p>
//         <Foo name={'Isabel'}/>
//         <Foo name={'Juana'}/>
//         <Foo name={'Margarita'}/>
//         {item}
//         </div>
// }

// const item = <p>This is an item. Elements are Composeble</p>

// const element = <div>
//     <h1>Hello Element</h1>
//     <p>This is a Test</p>
//     <Item name={'Cayetano'} />
//     </div>

// ReactDOM.render(
// element,
// document.getElementById('root'));

ReactDOM.render(
<App/>,
document.getElementById('root'));