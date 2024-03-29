import { useState } from "react";
import PropTypes from 'prop-types'

const AddTask = ({onAdd}) => {

    const [name,setName] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            alert("Please add a task");
            return
        }
        onAdd({name,day,reminder});
        setName('');
        setDay('');
        setReminder(false);
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add task" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day</label>
            <input type="text" placeholder="Add day" value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

AddTask.propTypes = {
    onAdd: PropTypes.func,
}

export default AddTask
