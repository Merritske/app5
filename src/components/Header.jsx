import PropTypes from "prop-types"
import Button from "./Button"
export default function Header({title, onAdd, showAdd}){
    function handleClick(){
        console.log("piep")
        }
        

    return(
        <header className="header">
            <h1 >{title}</h1>
           <Button 
          click={onAdd}
           color={showAdd ? "red": "green"} 
           text={showAdd ? "close" : "add"}
           />
      
        </header>
    )
}
Header.defaultProps ={
    title: "task tracker"
}
Header.propTypes ={
    title : PropTypes.string.isRequired
}
//css in js vb. <h1 style={headingStyle}> 
// const headingStyle = {
//     color: "red",
//      backgroundColor: "black"
// }