/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import { useFetching } from '../../Hooks/useFetching';
import { Loader } from '../../UI/Loader';
import cls from './PostPage.module.css';

export const PostPage = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async id => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async id => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(postId);
    fetchCommentsById(postId);
  }, []);

  return (
    <div className={cls.post}>
      <div>Post: {postId}</div>
      <div className={cls.title}>
        {isLoading ? (
          <Loader />
        ) : (
          <h3>
            <i>{post.title}</i>
          </h3>
        )}
      </div>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        comments.map(({ id, name, email, body }) => (
          <div key={id}>
            <hr />
            <div>
              <h4>{name}</h4>
              <p>{body}</p>
              <i>{email}</i>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
