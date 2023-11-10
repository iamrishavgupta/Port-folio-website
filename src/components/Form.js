import "./FormStyles.css"

import React, {useState} from 'react'

const Form = () => {
  const [data, setData] = useState([])
  const handleData= (e)=>{

    setData({...data, [e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(data.cname && data.email && data.message)
    {
    await fetch('https://sheet.best/api/sheets/d91a695d-3850-486d-b4cc-514432ee00a5', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>{
      setData({"cname":"", "email":"", "message":""});
    });
  }
  else alert("Please fill all fields")
  }
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input name="cname" value = {data.cname} type="text" onChange={handleData}></input>
            <label>Email</label>
            <input name= "email" value={data.email} type="email" onChange={handleData}></input>
            <label>Message</label>
            <textarea name="message" value={data.message} rows="6" placeholder="Type your message here" onChange={handleData}></textarea>
            <button className="btn" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Form