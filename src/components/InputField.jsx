const InputField = (props) => {
    return <div className="input-field-blok">
        <label for={props.id} className="label">{props.label}</label>
        <input min={props.min} id={props.id} type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} required={props.required} className="input-field" ></input></div>
};
export default InputField;