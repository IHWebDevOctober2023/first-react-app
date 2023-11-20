/* eslint-disable react/prop-types */
import "./buttonGoodbye.css"

const ButtonGoodbye = (props) => {
    console.log(props);
    return(
        <button className="btn-goodbye">{props.children}</button>
    )
}

export default ButtonGoodbye;