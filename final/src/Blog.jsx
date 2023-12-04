// import React from 'react'
// import TopBar from "./TopBar"
// import './App.css'
// import { useState } from 'react'
// import BlogBanner from './BlogBanner'
// import PostCard from "./PostCard"
// import inspirationalImg from './assets/inspirational_image.svg'
// import musicConnection from './assets/music-connection.jpg'
// import orchestra from './assets/orchestra.png'




// function Blog() {
//     const [submitboxOpen, setSubmitboxOpen] = useState(false);
//     const [submitBox, setSubmitBox] = useState("");
//     const [bannerArray, setBannerArray] = useState([]);

//     function handlePostButton() {
//         if (submitboxOpen) {
//             setSubmitBox("");
//             setSubmitboxOpen(false);
//         } else {
//             setSubmitBox(<Post />);
//             setSubmitboxOpen(true);
//         }
//     }

    
//     function Post() {
//         const [bannerState, setBannerState] = useState([]);
//         const [title, setTitle] = useState("");
//         const [content, setContent] = useState("");
//         const [image, setImage] = useState("");

//         function handleTitle(event) {
//             setTitle(event.target.value);
//         }

//         function handleContent(event) {
//             setContent(event.target.value);
//         }

//         function handleImage(event) {
//             setImage(event.target.value);
//         }

//         function handleSubmit() {
//             let tempBanner = bannerState;
//             tempBanner = tempBanner.concat([[title, content, image]]);
//             setBannerState(tempBanner);
//             setBannerArray(tempBanner);
//             setTitle("");
//             setContent("");
//             setImage("");
//         }

//         return (
//             <>
//                 <div className="text">
//                     <h3 className="centertext">Post anything you want!</h3>
//                     <label>Title: </label> <br></br>
//                     <textarea className="titleinput" type="text" value={title} onChange={handleTitle} placeholder="Title" /> <br></br>
//                     <label>Content: </label> <br></br>
//                     <textarea className="largeinputbox" type="text" value={content} onChange={handleContent} placeholder='Write stuff here'/><br></br>
//                     <label>Image: </label> <br></br>
//                     <textarea className="titleinput" type="text" value={image} onChange={handleImage} placeholder='Image URL'/><br></br>
//                     <br></br><button onClick={handleSubmit}>Submit</button>
//                 </div>
//             </>
//             )
//         }

//     return (
//         <>
//             <div className="text">
//                 <div>
//                     <h1 className="centertext">Blog</h1>
//                     <h4 className="centertext">Our awesome blog</h4>
//                     <button onClick={handlePostButton}>Post</button>
//                     <div>{submitBox}</div>
//                 </div>
//                 <div>

//                 </div>
//                 <div>
//                     <br></br>____________________________________________________________________________<br></br>
//                     <h2>Posts</h2>
//                 </div>
//             </div>
//             <div className="cardcontainer">
//                 <PostCard 
//                     href='/orchestra' 
//                     img={orchestra}
//                     title="The Intermission Orchestra"
//                     desc="A community of fans of anime, video games, and films, who enjoy playing the music from these mediums."/>
//                 <PostCard 
//                     href='/badminton' 
//                     img="https://images.squarespace-cdn.com/content/v1/5bd969d6506fbe4b1a0f5e6b/1613556027347-TNYY9VEX2PRTODIHEP9J/shutterstock_1592944909+-+Badminton+racket+and+shuttlecock+in+motion_1200px+JPEG.jpg" 
//                     title="Unveiling the Beauty and Thrill of Badminton"
//                     desc="An analysis of the dynamics involved in badminton and its teamplay."/>
//                 <PostCard
//                     href='/music-connection'
//                     img={musicConnection}
//                     title="The Music Connection"
//                     desc="Musical tutoring for young students in the Berkeley/Oakland Unified School District area."/>
//                 <PostCard 
//                     img={inspirationalImg}
//                     title="Test Blog Post" 
//                     desc="This is a test"/>
//                 <PostCard />
//                 <PostCard 
//                     img="https://www.easeus.com/images/en/screenshot/knowledge-center/a-png-picture.png"
//                     title="Test Blog Post" 
//                     desc="Thinking blog posts could look something like this, maybe."/>
//             </div>
//             <BlogBanner array={bannerArray}/>
//             <TopBar />
//         </>
//     )
// }


// export default Blog
