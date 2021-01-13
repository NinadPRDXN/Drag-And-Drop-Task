import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1350px;
    width: 80%;
    margin: 0 auto;
`;

export const Heading2 = styled.h2`
    margin: 20px 0;
    color: #422680;
    text-align: center;
`;

export const DragDrop = styled.div`
    display: flex;
    justify-content: space-around;
    ul {
        box-sizing: border-box;
        width: 40%;
        height: 500px;
        padding: 10px;
        border-radius: 10px;
        overflow-y: auto;
        background-color: #e7d9ea;
        list-style-type: none;
        text-transform: capitalize;

        li {
            box-sizing: border-box;
            padding: 15px;
            margin-bottom: 2px;
            border-radius: 10px;
        }
    }
    @media (max-width: 888px) {
        flex-direction: column;

        ul {
            width: 100%;
            margin-top: 10px;
        }

        ul:nth-child(1) {
            height: 150px;
            display: flex;
            overflow-x: auto;

            li {
                min-width: 100px;
                margin-right: 10px;
                font-size: 10px;
            }
        }
    } 
`;

export const PostList = styled.ul`
    li {
        background-color: #422680;
        color: #ffffff;
    }
`;

export const DroppedItemList = styled.ul`
    li {
        border: 1px solid #000000;
        position: relative;
        background-color: #e7d9ea;
    }
`;

export const Close = styled.span`
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
`;