import React from 'react';
import './PostList.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PostItem } from '../PostItem';

export const PostList = ({ posts, removePost }) => {
  if (posts.length === 0) return <h2>No posts yet...</h2>;

  return (
    <div>
      <h1>List of posts</h1>
      <TransitionGroup>
        {posts.map(post => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem removePost={removePost} {...post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
