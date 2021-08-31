import styled, { themeGet } from "@theme/utils";

export const HeaderTop = styled.div`
    position: relative;
    background-color: ${themeGet("colors.primary")};
    padding-top: 17px;
    padding-bottom: 17px;
    z-index: 9999;
`;
