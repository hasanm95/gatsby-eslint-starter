import styled, { device } from "@theme/utils";

export const FooterWrap = styled.footer`
    background-color: #000;
    ${device.large} {
        .container {
            max-width: 100% !important;
        }
    }

    ${device.xxlarge} {
        .container {
            max-width: 1520px !important;
        }
    }
`;

export const CopyrightText = styled.p`
    color: #f4faff;
    font-size: 16px;
    padding-bottom: 15px;
    & > svg {
        width: 15px;
        height: 15px;
        path {
            fill: red;
        }
    }
    ${device.medium} {
        padding: 0;
    }
`;
