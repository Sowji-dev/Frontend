import './App.css'
import React from 'react';
import { useState } from 'react';
import ShowBlog from './ShowBlog'
import LikesDislikes from './LikesDislikes';
function App() {
  var [ar,setAr]= useState([
    {
      title: 'morning vibes',
      content:
        "Surprise been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan",
      likes: 34,
      dislikes: 16,
    },
    {
      title: 'react basic',
      content:
        "readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like re",
      likes: 67,
      dislikes: 12,
    },
    {
      title: 'Where can I get some?',
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need t essentially unchan",
      likes: 99,
      dislikes: 21,
    },
  ])
  function addPost(){
    ar.push({
      title:  document.myform.myTitle.value,
      content:document.myform.myContent.value,
         likes: 0,
       dislikes: 0,
    })
   setAr([...ar]);
   //document.myform.myTitle.clear()
   //document.myform.myContent.clear()
  }
  return (
    <div className='blogs'>
      <form name='myform'>
        <div className='labels'>Title:</div>
        <input type='text' name='myTitle' placeholder='Add title'/>
        <br/>
        <div className='labels'>Content:</div>
        <textarea  type='' name='myContent' placeholder='Add Content'/>
      <br/>
      </form>
      <button className='addpost' onClick={addPost}>Add Post</button>
      <ShowBlog ar={ar}>
      </ShowBlog>
      </div>
  );
}
export default App;