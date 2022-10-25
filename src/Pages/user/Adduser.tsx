import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Adduser: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory<History>();
  const data = {
    name: name,
    email: email,
    phone: phone
  }

  const Submit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(data);
    axios.post('http://localhost:3004/users', data)
    history.push("/")
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-16">
        <h1 className="text-black text-3xl font-semibold font-Monserrat">Add User</h1>

        <input 
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text" 
          placeholder="Enter your name" 
          className="w-[80%] bg-white/10 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-400 mt-4"/>
        <input 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email" 
          placeholder="Enter your email" 
          className="w-[80%] bg-white/10 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-400 mt-4"/>
        <input 
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="phone" 
          placeholder="Enter your phone" 
          className="w-[80%] bg-white/10 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-400 mt-4"/>
        <button
          onClick={(event: any) => Submit(event)}
          className="w-[80%] bg-blue-600 mt-4 text-white text-xl font-Monserrat font-semibold py-4 pl-6">Add User</button>

      </form>
    </div>
  );
}

export default Adduser;
