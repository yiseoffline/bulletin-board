import { useNavigate } from "react-router-dom";

function Home(){
    const nagivate = useNavigate();
    const handleGoToList =()=>{
        nagivate('/list')
    }

    return (
    <>
        <div>
            이서연 자체제작 게시판에 오신것을<br/>환영합니다
        </div>
        <br/>
        <button onClick={handleGoToList}>
            go to list
        </button>
    </>
    );
}
export default Home;