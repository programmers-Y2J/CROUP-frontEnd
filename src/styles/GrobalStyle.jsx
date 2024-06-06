import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }

    input {
        border: 1px solid ${({ theme }) => theme.color.border};
        border-radius: 5px;
        padding-left: 5px;
        outline: none;

        &::placeholder {
            font-size: ${({ theme }) => theme.fontSize.small};
        }
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
