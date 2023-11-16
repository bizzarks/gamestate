import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function PlayerName(player) {
    return (
        <Container fluid style={{ margin: 0, padding: 0 }}>
            <Row>
                <Col className={player.name_style}>{player.player_name}</Col>
            </Row>
        </Container>
    )
}

export default PlayerName