/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react';
// import {  useLoaderData } from 'react-router-dom';

function Github() {
    // const data = useLoaderData()
    const [data , setData] = useState([])
    useEffect(() => {
        fetch("http:/api.github.com/users/its-vedu")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-orange-700 text-white p-4 text-3xl'>
      GitHub Followers : {data.followers}
      <img src={data.avatar_url} alt="GitPicture" width={300} />
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//     const res = await fetch('http:/api.github.com/users/its-vedu')
//     return res.json()
// }
