const Text = ({ text, variant = "h1" | "h2" }) => {
    return <h2 className={variant == "h1" ? "heading" : "sub-heading"}>{text}</h2>
};
export default Text;