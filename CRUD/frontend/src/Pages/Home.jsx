import React from 'react'
import './HomeStyle.scss';
const Home = () => {
    return (
        <>
            <div className='mainContainer'>
                <h1 className='heading'>TODO LIST</h1>
                <div className='container'>
                    <div className='btnContainer'>
                        <button className='addBtn'>Add Task</button>
                        <select className='filterInput'>
                            <option >All</option>
                            <option>Completed</option>
                            <option>Incomplete</option>
                        </select>
                    </div>
                    <div className='taskContainer'>
                        <div className='task 1'>
                            <div className='detailContainer'>
                                <input type='checkbox'></input>
                                <div className='details'>
                                    <h3 className='taskHeading'>Create a react project</h3>
                                    <div className='dateTime'>
                                        <p className='taskTime'>5:34 AM,</p>
                                        <p className='taskDate'>01/04/20223</p>
                                    </div>
                                </div>
                            </div>
                            <div className='editBtns'>
                                <button className='deleteBtn btns'>🚮</button>
                                <button className='editBtn btns'>🖋</button>
                            </div>
                        </div>
                        <div className='task 2'>
                            <div className='detailContainer'>
                                <input type='checkbox' className='checkBox'></input>
                                <div className='details'>
                                    <h3 className='taskHeading'>Learn React</h3>
                                    <div className='dateTime'>
                                        <p className='taskTime'>6:39 PM,</p>
                                        <p className='taskDate'>11/04/20223</p>
                                    </div>
                                </div>
                            </div>
                            <div className='editBtns'>
                                <button className='deleteBtn btns'>🚮</button>
                                <button className='editBtn btns'>🖋</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home