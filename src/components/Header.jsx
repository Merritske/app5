import PropTypes from "prop-types"
import Button from "./Button"
import { useLocation } from "react-router-dom"

export default function Header({title, onAdd, showAdd}){
 
const location = useLocation()        

    return(
        <header className="header">
            <h1 >{title}</h1>
          {location.pathname === "/"  && <Button 
          click={onAdd}
           color={showAdd ? "red": "green"} 
           text={showAdd ? "close" : "add"}
           />}
      
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