import styled from 'styled-components';

export const Item = styled.div`
    a {
        display: block;
        border: 1px solid #fff;
        background-color: #fff;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        color: #111;
        margin-left: 10px;
        margin-bottom: 10px;

        transition: all ease 0.5s;

        &:hover {
            background-color: #EEE;
            border-color: #ccc;
        }

        .itemImage img {
            width: 100%;
            border-radius: 5px;
        }

        .itemName {
            font-weight: bold;
        }
    }
`;
