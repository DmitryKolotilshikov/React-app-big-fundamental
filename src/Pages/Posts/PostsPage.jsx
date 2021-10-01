/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import PostService from '../../API/PostService';
import { usePosts } from '../../Hooks/usePosts';
import { PostFilter } from '../../PostFilter/PostFilter';
import { PostForm } from '../../PostForm';
import { PostList } from '../../PostList';
import { Button } from '../../UI/button';
import { Loader } from '../../UI/Loader';
import { ModalWindow } from '../../UI/ModalWindow/ModalWindow';
import { useFetching } from '../../Hooks/useFetching';
import { getPageCount } from '../../Utils/pages';
import { Pagination } from '../../UI/Pagination';
import { useObserver } from '../../Hooks/useObserver';
import { Select } from '../../UI/Select';

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ query: '', sort: '' });
  const [modal, setModal] = useState(false);
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const targetElement = useRef(null);

  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, currentPage);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
  });

  useObserver(targetElement, currentPage < totalPage, isLoading, () => setCurrentPage(prev => prev + 1));

  useEffect(() => {
    fetchPosts();
  }, [currentPage, limit]);

  const postFormHandler = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePostHandler = id => setPosts(posts.filter(el => el.id !== id));

  const changePage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>Create post</Button>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm createPost={postFormHandler} />
      </ModalWindow>
      <PostFilter filter={filter} setFilter={setFilter} />
      {error && (
        <h2>
          Error occurred <i>{error}</i>
        </h2>
      )}
      {isLoading && <Loader />}
      <Select
        defaultValue="Total Limit"
        options={[
          { value: 5, desc: '5' },
          { value: 10, desc: '10' },
          { value: 25, desc: '25' },
          { value: -1, desc: 'View All' },
        ]}
        value={limit}
        onChange={e => setLimit(e.target.value)}
      />
      <PostList posts={sortedAndFilteredPosts} removePost={removePostHandler} />
      <div style={{ height: '20px', backgroundColor: 'red' }} ref={targetElement} />
      {limit === -1 && <Pagination totalPage={totalPage} currentPage={currentPage} changePage={changePage} />}
    </div>
  );
};
