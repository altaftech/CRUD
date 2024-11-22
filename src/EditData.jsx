
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function EditData() {

    const { id } = useParams()
    const [data, setData] = React.useState({})
    const mynavigation = useNavigate()
    React.useEffect(() => {
        axios.get(`https://akashsir.in/myapi/crud/todo-detail-api.php?todo_id=${id}`)
            .then(res => {
                console.log(res)
                setData(res.data)
            })
    }, [])

    const updateData = () => {
        var myformdata = new FormData()
        myformdata.append("todo_id", id)
        myformdata.append("todo_title", data.todo_title)
        myformdata.append("todo_details", data.todo_details)
        axios.post("https://akashsir.in/myapi/crud/todo-update-api.php", myformdata)
            .then(res => {
                //alert(res.data.message)
                mynavigation('/')
            })
            .catch(err => alert(err))
    }
    return (<>

        <div className="card" style={{ maxWidth: '100%', width: '400px', margin: '20px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="card-body text-center">
                <h1 className="card-title">Edit</h1>
                <p style={{ fontSize: '20px' }}>ID is: <span style={{ fontWeight: 500 }}>{id}</span></p>

                <div className="mb-3">
                    <label style={{ fontSize: '20px', marginRight: '10px' }}>Title:</label>
                    <input
                        type="text"
                        className="form-control mx-auto"
                        style={{ maxWidth: '100%', width: '300px' }}
                        onChange={(e) => setData({ ...data, todo_title: e.target.value })}
                        value={data.todo_title}
                    />
                </div>

                <div className="mb-3">
                    <label style={{ fontSize: '20px', marginRight: '10px' }}>Details:</label>
                    <input
                        type="text"
                        className="form-control mx-auto"
                        style={{ maxWidth: '100%', width: '300px' }}
                        onChange={(e) => setData({ ...data, todo_details: e.target.value })}
                        value={data.todo_details}
                    />
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{ fontSize: '18px', fontWeight: '500', width: '140px', marginRight: '10px' }}
                        onClick={updateData}
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ fontSize: '18px', fontWeight: '500', width: '140px' }}
                        onClick={() => mynavigation(-1)}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>

    </>);
}

export default EditData;