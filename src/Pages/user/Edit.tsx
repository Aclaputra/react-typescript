import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

const Edit: React.FC = () => {
  interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: string[];
    company: string[];
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory<History>();
  const [users, setUsers] = useState<Users[]>([]);
  const {id} = useParams<{id?: string | undefined}>();
  const data = {
    name: name,
    email: email,
    phone: phone
  }

  const loadUsers = async (): Promise<any> => {
    await axios.get(`http://localhost:3004/users/${id}`)
        .then((response) => {
          setName(response.data.name);
          setEmail(response.data.email);
          setPhone(response.data.phone);
        });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const Submit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(data);
    axios.put(`http://localhost:3004/users/${id}`, data)
    history.push("/")
  }
  
  /*
  const data = {
    name: name,
    email: email,
    phone: phone
  }
   */
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-16">
        <h1 className="text-black text-3xl font-semibold font-Monserrat">Edit User</h1>

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
          className="w-[80%] bg-blue-600 mt-4 text-white text-xl font-Monserrat font-semibold py-4 pl-6">Update User</button>

      </form>
    </div>
  );
}

export default Edit;
