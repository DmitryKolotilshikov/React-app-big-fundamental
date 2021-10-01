import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../UI/button';
import cls from './Postitem.module.css';

export const PostItem = ({ title, body, id, removePost }) => {
  const router = useHistory();

  return (
    <div className={cls.post}>
      <div className={cls.title}>
        <strong>
          {id} {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className={cls.btn}>
        <Button onClick={() => router.push(`/posts/${id}`)}>Open</Button>
        <Button type="warning" onClick={() => removePost(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};
