import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h3{
        color: var(--blue);
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;

        input{
            width: 300px;
        }
        
        button{
            width: 300px;
            color: var(--grey);
            padding: 10px;
            font-size: 15px;
            font-weight: bold;

            &:hover{
                background-color: var(--blue);
                transition: .3s all ease-in;
            }
        }
    }
`;