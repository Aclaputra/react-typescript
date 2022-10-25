import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Home() {
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

  const [users, setUsers] = useState<Users[]>([]);

  const loadUsers = async (): Promise<any> => {
      await axios.get('http://localhost:3004/users')
        .then((response) => {
          setUsers(response.data.reverse());
          /*
          for(let i = 0; i < response.data.length; i++) {
            console.log(response.data[i]);
          }
           */
        });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const Delete = async (value: any | undefined) => {
    await axios.delete<Users>(`http://localhost:3004/users/${value}`)
    console.log(value);
    loadUsers();
  }

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      {/*<h1 className="text-black text-3xl font-semibold font-Monserrat">home page</h1> */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Phone
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                {users.map((value, index) => {
                  return (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {value.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {value.email}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {value.phone}
                      </td>
                      <td className=" whitespace-nowrap">
                        <Link to={`/users/${value.id}`} type="button" 
                          className="inline-block mx-3 px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                          View
                        </Link>
                        <Link to={`/edit-user/${value.id}`} type="button" 
                          className="inline-block mx-3 px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                          Edit
                        </Link>
                        <button onClick={() => Delete(value.id)} type="button" 
                          className="inline-block mx-3 px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
