const Pet = ({ name, animal, breed}) => { //props.name, props.animal or destructing etc..takes the attributes from the stamp and passes it in as a argument  

    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}



const App = () => {

    return React.createElement(
        "div",
        {}, // I can pass any attributes into this child element id: "something-important"
        [
            React.createElement("h1", {}, "Adopt Me!"), // this is the children for the h1: <h1>Adopt Me!</h1>, and can become and Array of H1
             // Now I am stamping it three times 
            React.createElement(Pet,{ 
                //Attributes 
                name: "Luna", 
                animal:"Dog", 
                breed: "Havanese"
            }), 
            React.createElement(Pet,{
                //Attributes
                name: "Pepper", 
                animal:"Bird", 
                breed: "Cockatiel"
            }),
            React.createElement(Pet,{
                //Attributes
                name: "Doink", 
                animal:"Cat", 
                breed: "Mixed"
            }),
        ]
       
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);