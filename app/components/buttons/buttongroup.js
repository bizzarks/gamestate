import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function LifeButtonGroup(player) {

    return (
        <ButtonGroup aria-label="Button Group">
            <Button variant="outline-warning" id='life-up-button' style={{ fontSize: .4 + 'em', fontWeight: 'bold' }}>
                <i className='bi bi-dash-circle-dotted text-light-emphasis'></i>
            </Button>
            <Button variant="outline-warning" id='life-down-button' style={{ fontSize: .4 + 'em', fontWeight: 'bold' }}>
                <i className='bi bi-plus-circle-dotted text-light-emphasis' ></i>
            </Button>
        </ButtonGroup>
    );
}

export default LifeButtonGroup;