import styled from "styled-components";

export const Image = styled.img `
    widht: ${({ size }) => size === "big" ? "50em" : size === "small" ? "30em" : "40em"
    };
    height: ${({ size }) => size === "big" ? "50em" : size === "small" ? "30em" : "40em"}
`;