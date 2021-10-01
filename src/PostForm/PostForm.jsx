import React, { useState } from 'react';
import { Button } from '../UI/button';
import { Input } from '../UI/Input';

export const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const submitFormHandler = e => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    if (newPost.title && newPost.body) createPost(newPost);
    setPost({ title: '', body: '' });
  };
  return (
    <form>
      <Input
        type="text"
        placeholder="title"
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <Input
        type="text"
        placeholder="body"
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      <Button type="success" onClick={submitFormHandler}>
        Submit
      </Button>
    </form>
  );
};
