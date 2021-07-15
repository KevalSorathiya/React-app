import React,{useState} from 'react';

const  Contect = () =>{

    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    });
    const InputEvent = (event) =>{
        const{name,value}=event.target;
        setData((preValue)=>{
            return {
                ...preValue,
                [name]:value
            };
        });
    }

    const formSubmit =(event) =>{
        event.preventDefault();
        alert(`your name is: ${data.fullname}. your email is: ${data.email}. your phone is:${data.phone}. your message is:${data.message}`);
    }

    return (<>
        <div className="my-4">
            <h4 className="text-center">
                Contect US
            </h4>
        </div>
        <div className="container contect_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                      <label htmlFor="exampleFullName" className="form-label">FullName :</label>
                      <input type="text" className="form-control" id="exampleFullName" name="fullname" value={data.fullname}  onChange={InputEvent} placeholder="Enter you Full Name"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="examplePhoneNo" className="form-label">Phone No :</label>
                      <input type="text" className="form-control" id="examplePhoneNo" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Phone No"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleEmailAddress" className="form-label">Email address :</label>
                      <input type="email" className="form-control" id="exampleEmailAddress" name="email" value={data.email} onChange={InputEvent}  placeholder="Enter Your Email"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputMessage" className="form-label">Message :</label>
                      <textarea type="text" className="form-control" id="exampleInputMessage" value={data.message} onChange={InputEvent}  name="message" placeholder="Enter your Message"/>
                    </div> 
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}
export default Contect;