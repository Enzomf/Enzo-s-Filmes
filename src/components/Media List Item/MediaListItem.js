import { Container, ContentArea, LeftArea } from "./styled"

function MediaListItem({media}){
    return(
        <Container>
            <LeftArea>
                <img src="	https://image.tmdb.org/t/p/w300/7C1PMnV0uMrMNcfws5J7aLNxe3Q.jpg" alt="image"/>
            </LeftArea>
            <ContentArea> 
                <h3>Minino Feio</h3>
            </ContentArea>
        </Container>
    )
}

export default MediaListItem