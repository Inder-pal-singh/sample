const Button = ({ title, type, onClick, variant = {} }) => {
    return <input className={variant == "success" ? "button-submit-success" : "button-submit-error"}
        type={type} value={title} >
    </input>
};
export default Button;