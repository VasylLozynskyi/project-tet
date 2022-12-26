import React from "react";
import ContactForm from "../HomePage/ContactUsSection/ContactusSection";

const ContuctUsPage = () => {
    window.scrollTo(0, 0);
const stylescontact = {
    paddingTop : '40px',
    paddingLeft: "17px",
    paddingRight: "17px",
}
    return (
        <>          
            <div style={stylescontact}>
                <ContactForm />
            </div>
            
        </>
    );
}
export default ContuctUsPage;

