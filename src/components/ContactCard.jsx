import Text from "./Text";
import InputField from "./InputField";
import "./style.css";
import Button from "./Button";
import { useState } from "react";
const Card = ({ backgroundColor, component }) => {

    return (
        <div className="card" style={{ backgroundColor: backgroundColor }}>
            {component}
        </div>
    );
};
export default Card;
