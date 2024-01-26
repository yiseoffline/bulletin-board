import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Update =()=>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const nagivate = useNavigate();

    useEffect(()=>{
        const storedTitle = JSON.parse(localStorage.getItem('title'));
        const storedContent = JSON.parse(localStorage.getItem('content'));

        if(storedTitle){
            setTitle(storedTitle);
        }
        if(storedContent){
            setContent(storedContent);
        }
    },[]);

    const handleTitleChange=(e)=>{
        const newTitle = e.target.value;
        setTitle(newTitle);
        localStorage.setItem('title',newTitle);
    }

    const handleContentChange=(e)=>{
        const newContent = e.target.value;
        setContent(newContent);
        localStorage.setItem('content',newContent);
    }

    const handleSubmit =()=>{
        if(!title){
            alert("제목을 입력하세요");
            title.current.focus();
        } else if(!content) {
            alert("내용을 입력하세요");
            content.current.focus();
        } else {
            const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
            const newPost = {title : title.value, content:content.value};
            const updatedPosts = [...savedPosts, newPost];
            localStorage.setItem("posts",JSON.stringify(updatedPosts));

            title.handleInputValue({target : {value : ""}});
            content.handleInputValue({target : {value:""}});
        }
        nagivate('/list');
    }

    const handleCancel =()=>{
        nagivate('/list');
    }

    return (
        <>
            <div className="title-box">
                <input
                    onChange={handleTitleChange}
                    value={title}
                    placeholder="제목을 입력하세요"
                />
            </div>
            <br />
            <div className="content-box">
                <textarea
                    value={content}
                    onChange={handleContentChange}
                    rows={30}
                    cols={60}
                    placeholder="내용을 입력하세요"
                />
            </div>
            <br />
            <div className="button-container">
                <div className="submit-btn">
                    <button onClick={handleSubmit}>작성</button>
                </div>
                <div className="cancel-btn">
                    <button onClick={handleCancel}>취소</button>
                </div>
            </div>
        </>
    );
}

export default Update;