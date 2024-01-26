import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

function List(){
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    },[]);

    const goToWrite=()=>{
        navigate('/write');
    }

    return(
    <>
        <h2>LIST</h2>
        <ul>
            {posts.map((posts,index) => (
                <li key={index}>
                    <h3>{posts.title}</h3>
                    <p>{posts.content}</p>
                </li>
            ))}
        </ul>
        <br/>
        <div className="goToWrite">
            <button onClick={goToWrite}>글쓰기</button>
        </div>
    </>
    );
}

export default List;