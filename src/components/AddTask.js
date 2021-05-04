import {useState} from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('please add task')
         return }
         else {

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false)
    }
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>


                <div className='form-control'>
                    <label>Day & time</label>
                    <input type="text" placeholder="Add day & time" value={day}
                           onChange={(e) => setDay(e.target.value)}/>
                </div>


                <div className='form-control-check'>
                    <label>Set reminder</label>
                    <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
                    checked={reminder}
                    />
                </div>
                <input type='submit' value='Save Task' className='btn btn-block'/>

        </form>
    )

}

export default AddTask

