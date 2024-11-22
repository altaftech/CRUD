import axios from 'axios';
import React from 'react';

function AddData() {

  const [txt1, setTxt1] = React.useState("")
  const [txt2, setTxt2] = React.useState("")

  const onClickData = () => {
    var myformdata = new FormData()
    myformdata.append("todo_title", txt1)
    myformdata.append("todo_details", txt2)

    axios.post("https://akashsir.in/myapi/crud/todo-add-api.php", myformdata)
      .then(res => {
        if (res.data.flag === "1") {
          alert(res.data.message)
        } else {
          alert("Issue")
        }
      })
      .catch(err => alert(err))
  }
  const onClickData1 = () => {
    var myobj = {
      todo_title: txt1,
      todo_details: txt2
    }
    var myjson = JSON.stringify(myobj)

    axios.post("https://akashsir.in/myapi/crud/todo-add-json.php", myjson, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if (res.data.flag === "1") {
        alert(res.data.message)
      } else {
        alert("Issue")
      }
    })
      .catch(err => alert(err))
  }

  return (<>
    <div className="card" style={{ maxWidth: '100%', width: '400px', margin: '20px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div className="card-body text-center">
        <h1 className="card-title">Add</h1>
        <div className="mb-3">
          <label style={{ fontSize: '20px' }}>Title :</label>
          <input type="text" className="form-control mx-auto" style={{ maxWidth: '100%', width: '300px' }} onChange={(e) => setTxt1(e.target.value)} />
        </div>
        <div className="mb-3">
          <label style={{ fontSize: '20px' }}>Details :</label>
          <input type="text" className="form-control mx-auto" style={{ maxWidth: '100%', width: '300px' }} onChange={(e) => setTxt2(e.target.value)} />
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-success" style={{ background: '#FF7B00', borderColor: '#FF7B00', fontSize: '20px', fontWeight: '500', width: '140px', marginRight: '10px' }} onClick={onClickData}>Method 1</button>
          <button type="button" className="btn btn-success" style={{ background: '#FF7B00', borderColor: '#FF7B00', fontSize: '20px', fontWeight: '500', width: '140px' }} onClick={onClickData1}>Method 2</button>
        </div>
      </div>
    </div>



  </>);
}

export default AddData;