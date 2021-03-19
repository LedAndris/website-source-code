import Footer from "./footer";
import Navbar from "./navbar";
import {Helmet} from "react-helmet";

const Layout = ({ children }) => {
                    // wowjesus best coder
    return (
        <div className="content">
            <Helmet>
                <title>Everlast RP</title>
                <meta property="og:url" content="http://everlastrp.xyz/" />
                <meta property="og:type" content="Roleplay" />
                <meta property="og:title" content="EverLastRP Official Website" />
                <meta property="og:description" content="Welcome to our website! We are excited to have you here, and hope you will enjoy it! Check out our forums, Discord and the socials" />
                <meta property="og:image" content="https://beta.iodine.gg/DUA9C.png" />
            </Helmet>
            <Navbar />
            { children }
            <Footer />
          
        </div>
    );
}
 
export default Layout;