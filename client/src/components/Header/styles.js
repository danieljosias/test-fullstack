import styled from 'styled-components';

export const Container = styled.div`
    header{
        background-color: var(--grey-2);
        padding: 10px;
        
        nav{
            display: flex;
            justify-content: center;
            gap: 20px;

            li:hover{
                text-decoration: underline;
            }
        }
        span{
            display: flex;
            align-items: center;
            cursor: pointer;
            gap: 5px;

            button{
                background-color: transparent;
                font-size: 16px;
            }
        }
    }
`;