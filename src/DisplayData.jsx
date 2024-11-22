import axios from 'axios';
import React from 'react';
import './Display.css'

import { Link } from 'react-router-dom';

function DisplayData() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")
            .then(res => {
                setData(res.data.todo_list)
            })
            .catch(err => alert(err))
    }

    const deleteData = (id) => {


        var myformdata = new FormData()
        myformdata.append("todo_id", id)
        axios.post("https://akashsir.in/myapi/crud/todo-delete-api.php", myformdata)
            .then(res => {
                console.log(res)
                getData()
            })
            .catch(err => alert(err))


    }
    return (<>
    <h1 style={{ marginLeft:'20px' }}>Display</h1>
        <div style={{  margin: '20px' }}>
            <div style={{
                width: "50%",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "white"
            }}>
                

                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                        {data.length > 0 && data.map((value, index) => {
                            var id = `edit/${value.todo_id}`;
                            return (
                                <tr key={index} style={{ textAlign: "center", borderBottom: index < data.length - 1 ? "1px solid #eee" : "none" }}>
                                    <td style={{ padding: "10px" }}>{value.todo_id}</td>
                                    <td style={{ padding: "10px" }}>{value.todo_title}</td>
                                    <td style={{ padding: "10px" }}>{value.todo_date}</td>
                                    <td style={{ padding: "10px" }}>
                                        <Link className='lnkk' to={id} style={{ marginRight: "10px",padding: "18px 8px", textDecoration: "none",borderRadius: '50px' }}>
                                            <img src="edit.png" width={40} />
                                        </Link>
                                        |
                                        <button className='btnn'
                                            onClick={() => deleteData(value.todo_id)}
                                            style={{ marginLeft: "10px", background: 'transparent', border: "none", padding: "10px", cursor: "pointer",borderRadius: '50px' }}
                                        >
                                            <img src="delete.png" width={40} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>



    </>);
}


export default DisplayData