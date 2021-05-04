import PropTypes from 'prop-types';
import Button from "./Buttons";

const Header = ({title, onAdd, showAddTask}) => {

    return (
        <header className='header'>
            <h1> {title}</h1>
            <Button color={!showAddTask ? 'blue' : 'red'} onClick={onAdd}
                    text={showAddTask ? 'Close' : 'Add new task'}/>


        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header