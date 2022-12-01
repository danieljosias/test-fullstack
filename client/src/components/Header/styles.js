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
    }
`;