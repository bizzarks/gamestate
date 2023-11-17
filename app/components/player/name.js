//React Imports
import { useState, useCallback } from 'react'

//3P Imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Badge } from 'react-bootstrap'


function PlayerName(player) {

    const [playerName, setPlayerName] = useState(player.player_name)

    function editPlayerName(evt) {
        console.log(evt.target)
    }

    return (
        <Container className='mx-auto' style={{ margin: 0, padding: 0 }}>
            <Row className="mx-auto" style={{ width: 'inherit' }}>
                <Col className={player.name_style + ' mx-auto pname-col'}>
                    <Badge onDoubleClick={editPlayerName}>{playerName}</Badge>
                </Col>
            </Row>
        </Container>
    )
}

export default PlayerName