import './App.css';
import {  Link } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <div className="heading-text">
        <div className="heading">
          <span>Snapchat</span>
          <h1>Imagine if<br /> had events.</h1>
        </div>
        <p>Easily host and share events with your friends across any social media.</p>
      </div>
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221005T033133Z&X-Amz-Expires=86400&X-Amz-Signature=293861ac73814fd87216d04029214ab5c6bcdc26deb5001ba6028fe254c75609&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" alt='event details'/>
        <Link to="/create" >Create my event</Link>
    </div>
  );
}

export default App;
