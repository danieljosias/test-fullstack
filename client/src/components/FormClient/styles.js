import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    height: 100vh;
    
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
    
    .client{
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: scroll;
        width: 330px;
        height: 270px;
    }
`;