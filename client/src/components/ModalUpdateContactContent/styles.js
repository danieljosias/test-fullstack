import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .modalHeader{
        display: flex;
        justify-content: space-between;
        
        button{
            background-color: var(--white);
        }
        
    }
    
    .modalForm{
        display: flex;
        justify-content:  space-between;
        align-items: center;
        textarea{
            margin-top: 7px;
            min-width: 350px;
            max-width: 350px;
            min-height: 190px;
            max-height: 190px;
        }
        
        button{
            min-width: 160px;
            max-width: 160px;
            background-color: var(--green);
            padding: 5px;
            font-weight: bold;
        }
        .green{
            background-color: var(--green);
        }
        
        .red{
            background-color: var(--red);
        }
    }
    
    h3{
        color: var(--blue);
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: none;

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