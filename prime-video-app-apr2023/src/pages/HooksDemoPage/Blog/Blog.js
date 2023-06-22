import React, { useEffect, useState } from 'react'

const Blog = () => {
  console.log('1. Program Started');
  const [topicName, setTopicName] = useState('React Hooks!');
  const [publishedDate, setPublishedDate] = useState(new Date());

  // in useEffect hook, first param: effect callback; second param: dependency list
  useEffect(() => {
    // runs after initial rendering
    console.log('3. Inside useEffect Callback');
    // this is alternative to life cycle hook -- componentDidMount and componentDidUpdate
    // ideal place for you to send REST API Calls
    // you can update the state from here
    document.title = topicName;
  }, [topicName]); // second arg is dependency. it is an array -- it is optional
  // if the dep is changed by any means, then, effect callback will be called
  // remove the dep and have empty arra then see

  const handleUpdateTopicName = () => {
    setTopicName('Demo of useEffect Hook and useState Hook');
  };

  console.log('2. Program Ended');
  return (
    <>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button onClick={handleUpdateTopicName}>Update Topic Name</button>

      <p>Published Date: {publishedDate.toString()}</p>
      <button onClick={() => {
        setPublishedDate(new Date());
      }}>Update Published Date</button>
      <hr />
    </>
  );
}

export default Blog;
