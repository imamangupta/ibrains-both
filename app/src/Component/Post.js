import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

export default function Post() {
    const navigate = useNavigate();
    const [Data, setData] = useState([]);
    const [page, setpage] = useState(2)
    const [user, setuser] = useState()
    // const host = "http://localhost:4000";
    let host = process.env.REACT_APP_API_REQUEST;


    const LoadPost = async () => {
        const response = await fetch(`${host}/api/post/getpost`, {
            method: 'GET',
            headers: {
                'length': Data.length
              },
        
        });

        const json = await response.json();
        if (json) {
            setData(json);
            console.log(json);
        } else {
            console.log('no data');
        }

    }
    const LoadMorePost = async () => {
        const response = await fetch(`${host}/api/post/getmorepost`, {
            method: 'GET',
            headers: {
                'length': page
              },
        
        });

        const json = await response.json();
        if (json) {
            setpage(page+1);
            setData(json);
            console.log(json);
        } else {
            console.log('no data');
        }

    }

    const getUser = async () => {
        const response = await fetch(`${host}/api/user/getuser`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('token')
              },
        
        });
        const json = await response.json();
        if (json) {
            setuser(json);
            console.log(json);
        } else {
            console.log('no data');
        }

    }

    useEffect(() => {
      

        if (!localStorage.getItem('token')) {
            navigate(`/login`);
        }else{
            getUser();
        }
        LoadPost();
       
    }, [])






    return (
        <>
            <div >
                <br />
                <br />
                <br />
                <div>
                    <h2 style={{textAlign:'center'}} className='text-2xl font-semibold whitespace-nowrap dark:text-white'>" Hello {user?.userName} "</h2>
                    <br />
                    <br />
                    <br />
                </div>
                <InfiniteScroll dataLength={Data?.length} next={LoadMorePost} hasMore={true} loader={<Loading/>}>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                
                {Data?.map((data, index) => (
                    <div key={index}>

                        <PostCard data={data} />
                    </div>
                ))}
                </div>
                </InfiniteScroll>
            </div>

            {/* <InfiniteScroll dataLength={Data?.length} next={LoadPost} hasMore={true} loader={<h4>Loading...</h4>}>
                <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '100px' }}>



                    {Data?.map((data, index) => (
                        <div key={index}>

                            <PostCard data={data} />
                        </div>
                    ))}
                </section>
            </InfiniteScroll> */}


            {/* 
            <InfiniteScroll

                dataLength={Data?.length}
                next={LoadPost}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-around' ,marginTop:'100px' }}>



                    {Data?.map((data, index) => (
                        <div key={index}>
                            
                            <PostCard data={data} />
                        </div>
                    ))}
                </section>
            </InfiniteScroll> */}


        </>
    )
}
