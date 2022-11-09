import styled from "styled-components";


const Container = styled.div`
    background-color: hsl(0, 0%, 1%);
    position: absolute;
    max-width: 100%;
    min-height:100%;
  
    width: 100%;
    left: 0;
    border-radius: 15px 15px  0 0;
    animation: detalhes 1s ease;
    transform: translateY(20px);
    overflow: hidden;

   
    @keyframes detalhes {
        from{
            transform: translateY(250px);
        }to{
          
        }
    }
`

const ImageTop = styled.div`

    width: 100%;
    position: relative;


    img{
        width: 100%;
    }
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 70%;
        mix-blend-mode: normal;
        bottom: 0;
       
       background: linear-gradient(180deg, rgba(3, 3, 3, 0) 0%, rgba(3, 3, 3, 0.56129) 34.9%, rgba(3, 3, 3, 0.56129) 60.94%, #030303 86.98%);
    }

    &::after{
        content: "";
        position: absolute;
        z-index: 2;
        left: 0;
        height: 100%;
        width: 70%;
        background: linear-gradient(87.35deg, #030303 -1.41%, rgba(3, 3, 3, 0.513819) 53.73%, rgba(3, 3, 3, 0) 98.11%);
    }

    h1{
        color: #FFFF;
        position: absolute;
        bottom: 1.5em;
        left: 0.8em;
        z-index: 3;
        font-weight: normal;
    }
`

const Content = styled.div`
    padding: 0 1.5em;
    width: 100%;
    height: 100%;
    overflow: scroll;
    


    p {
        color: #FFF;
        letter-spacing: 2px;
        text-align: justify;
        opacity: 0.8;
    }


`


const GenresWrapper = styled.div`
    display: flex;
    width:100%;
    gap: 1em;
    margin: 1.2em 0;

    span {
        color: #FFF;
        display: flex;
        gap: 1em
    }
`

const InfoWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 1em;
   
   

    span {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        color: #FFFF;
        max-width: 30%;
       
        
    }
    span p {
        font-size: 0.8em;
        line-height: 21px;
        text-align: left;
    }
    span h4 {
        font-weight: normal;
        font-size: 1.2em;
    }

    span img {
        width: 50px;
    }
    

`


export { Container, ImageTop, Content, GenresWrapper, InfoWrapper }