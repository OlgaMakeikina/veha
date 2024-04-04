
const FooterItem = ({ picture, text }) => {
    return (
        <div>
            <img src={picture} width="25px" alt="Home" />
            <span className="span_footer">{text}</span>
        </div>
    );
};

export default FooterItem;