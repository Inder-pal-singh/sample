import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Text from "./Text";

const Contact = () => {
    const [data, setData] = useState({});
    const [showForm, setShowForm] = useState(false);
    function handleChange(input) {
        let tempState = data;
        tempState[input.name] = input.value;
        console.log(tempState);
        setData(tempState);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setShowForm(true);
        e.target.reset();
    }
    return <div>
        <Text text="Sample Contact Form!" variant="h1" />
        <Text text="A Sample contact form" variant="h2" />
        <form
            onSubmit={handleSubmit}
            id="mainform"
            onChange={(e) => handleChange(e.target)}
        >
            <InputField
                placeholder={"John doe"}
                type="text"
                label="Name"
                required={true}
                id="name"
                name="name"
            />
            <InputField
                placeholder="John"
                type="text"
                required={true}
                name="surname"
                label="Surname"
            />
            <InputField
                placeholder="email"
                type={"email"}
                required={true}
                label="Email"
                name="email"
            />
            <InputField
                placeholder="Eg:21"
                type={"number"}
                required={true}
                label="Age"
                name="age"
                min={1}
            />
            <InputField
                placeholder={"Favourite color"}
                type={"text"}
                required={true}
                name="color"
            />

            <br />
            <div className="fl" >
                <InputField type="radio" id="male" name="gender" value="Male" />
                <label className="in-label" for="male">Male</label>
                <InputField type="radio" id="female" name="gender" value="Female" />
                <label className="in-label" for="female">Female</label>
                <br>
                </br></div>
            <div className="fl" >
                <InputField type="checkbox" id="male" name="gender" value="Male" />
                <label className="in-label" for="male">I Would like to recieve recommendation</label></div>
            <Button type={"submit"} variant="success" title="Submit" />
            <Button
                type="reset"
                variant="error"
                title="Reset Form"
                onClick={(e) => {
                    e.preventDefault();
                    e.target.reset();
                }}
            />
        </form>
        {showForm ? (
            <div>
                <h4>Submitted Details</h4>
                {Object.keys(data).map((item) => (
                    <ul key={item}>
                        <b style={{ margin: "3px" }}>{item}:</b>
                        {data[item]}
                    </ul>
                ))}
            </div>
        ) : null}
    </div>
};
export default Contact;