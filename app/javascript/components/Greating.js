import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMessage } from '../redux/messageSlice';

const Greating = () => {
  const dispatch = useDispatch();
  const { message, isLoading } = useSelector((state) => state.msg)

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch])

  return (
    <div>
      <h1>Greating page</h1>
      {
        isLoading && <span>Loading ... </span>
      }
      <h2>{message.title}</h2>
      <p>{message.content}</p>
    </div>
  )
}

export default Greating;
