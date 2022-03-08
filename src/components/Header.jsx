import PropTypes from "prop-types"
import Button from "./Button"
export default function Header({title}){
    function handleClick(){
        console.log("piep")
        }
        

    return(
        <header className="header">
            <h1 >{title}</h1>
           <Button 
          click={handleClick}
           color="green" 
           text="Add"
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