import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    h3{
        color: var(--blue);
    }
    
    .wrapper{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;
    }
    
    div{
        display: flex;
        justify-content: center;
        gap: 10px;
        

        button{
            width: 150px;
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