const heading = React.createElement('div', {id:"heading"}, [React.createElement("h1" , {id:"child_1"} , "i am an h1") , React.createElement("h2" , {id:"child_1"} , "i am an h2")]);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);