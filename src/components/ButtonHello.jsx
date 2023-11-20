/* eslint-disable react/prop-types */
import "./buttonHello.css"

const ButtonHello = ({buttonClass, buttonName}) => { // destructuring directly in the parameters
//const ButtonHello = (props) => { // destructuring directly in the parameters
   // const {buttonClass, buttonName} = props; // DESTRUCTURING THE PROPS
    return(
        <button className={buttonClass}>{buttonName}</button>
    )
}

export default ButtonHello;