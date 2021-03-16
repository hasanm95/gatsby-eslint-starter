/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { FooterWrap, CopyrightText } from "./style";

const Footer = () => {
    return (
        <FooterWrap>
            <div className="container">
                <div className="row">
                    <div className="col-12" sx={{ textAlign: "center" }}>
                        <CopyrightText>
                            &copy; hasTheme {new Date().getFullYear()}. Made
                            with <HeartIcon /> by{" "}
                            <a
                                href="https://hasthemes.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                HasThemes
                            </a>
                        </CopyrightText>
                    </div>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;
