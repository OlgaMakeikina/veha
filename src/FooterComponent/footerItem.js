
const FooterItem = ({ picture, text }) => {
    return (
        <div className="contact_footer">
            <img src={picture} width="25px" height="25px" alt="Home" />
            <p className="span_footer">{text}</p>
        </div>
    );
};

export default FooterItem;