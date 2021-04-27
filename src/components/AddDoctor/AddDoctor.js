import React , {useState} from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile); 
    }
    const handleblur = e =>{
       const  newInfo = {...info}
       newInfo[e.target.name] = e.target.value;
       setInfo(newInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
      
        fetch('https://pure-ravine-43373.herokuapp.com/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
    return (
        <section className="container-fluid row">
            <Sidebar/>
            <div className="col-md-10 p-4 pr-5 w-75" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className = "text-brand"> Add a Doctor</h5>
                <form onSubmit={handleSubmit}> 
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleblur} type="email" class="form-control" name = 'email' placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input onBlur={handleblur} type="text" class="form-control" name = "name" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Upload image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" placeholder="Upload" id="exampleCheck1"/>
                        </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                </form>       
            </div>
        </section>
    );
};

export default AddDoctor;