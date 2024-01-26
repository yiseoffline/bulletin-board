import { useState, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import './Write.css';

function Write() {
    const title = useInput(""); // 초기값
    const content = useInput(""); // 초기값
    const inputTitle = useRef(null);
    const inputContent = useRef(null);
    const navigate = useNavigate();

    const handleSubmit =()=>{
        if(!title){
            alert("제목을 입력하세요");
            inputTitle.current.focus();
        } else if(!content) {
            alert("내용을 입력하세요");
            inputContent.current.focus();
        } else {
            const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
            const newPost = {title : title.value, content:content.value};
            const updatedPosts = [...savedPosts, newPost];
            localStorage.setItem("posts",JSON.stringify(updatedPosts));

            title.handleInputValue({target : {value : ""}});
            content.handleInputValue({target : {value:""}});
        }
        navigate('/list');
    }

    const handleCancel =()=>{
        navigate('/list');
    }

    function useInput(initialValue) {
        const [value, setValue] = useState(initialValue);
        const handleInputValue = (e) => { // input 값이 변경 될 때 호출
            const {
                target: { value },
            } = e;
            setValue(value);
        };
        console.log(value);
        return { value, handleInputValue };
    }

    return (
        <>
            <div className="title-box">
                <input
                    value={title.value}
                    onChange={title.handleInputValue}
                    placeholder="제목을 입력하세요"
                />
            </div>
            <br />
            <div className="content-box">
                <textarea
                    value={content.value}
                    onChange={content.handleInputValue}
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

export default Write;
