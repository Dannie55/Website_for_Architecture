import { Link } from "react-router-dom";
import { arrow_right, arrow_right_white } from "../assets";

const Button = ({className, to, text, icon = ''}) => <Link className={`btn px-4 ${className}`} to={to}>{text.toUpperCase()} <img src={icon !== 'white' ? arrow_right : arrow_right_white} alt="arrow_right icon" /></Link>

export default Button