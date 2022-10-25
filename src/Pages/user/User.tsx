import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

export default function User() {
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

  const [user, setUser] = useState<Users>();
  const {id} = useParams<{id?: string | undefined}>();

  useEffect(() => {
    const api = async () => {
      await axios.get(`http://localhost:3004/users/${id}`)
        .then((response) => setUser(response.data));
    }

    api();
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">

        <Link to={`/`} className="text-black font-semibold font-Inter text-2xl border-b border-black mt-12">Back to home</Link>
        {user && (
        <> 
          <div className="w-[700px] h-[200px] flex px-6 py-4 border border-black mt-4">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Name</h2>
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Email</h2>
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Phone</h2>
            </div>
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">{user.name}</h2>
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">{user.email}</h2>
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">{user.phone}</h2>
            </div>
          </div>
        </>
        )}


      </div>
    </>
  );
}
