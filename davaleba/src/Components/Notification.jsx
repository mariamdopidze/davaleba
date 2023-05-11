import "./notification.css";

function Style(props){
     return(
        <div>
             <h1 className="title">{props.title}</h1>
             <p className="text">{props.text}</p>
             <img className="greens"src={props.green} alt=""/>
             <img className="yellows"src={props.yellow} alt=""/>
             <img className="blues"src={props.blue} alt=""/>
             <img className="reds"src={props.red} alt=""/>
             <img className="icons"src={props.icon} alt=""/>
             <img className="icones"src={props.icon2} alt=""/>
             <img className="iconess"src={props.icon3} alt=""/>
             <img className="iconesss"src={props.icon4} alt=""/>
             <img className="columns"src={props.column} alt=""/>
             

             

        </div>
     )
}

export default Style;