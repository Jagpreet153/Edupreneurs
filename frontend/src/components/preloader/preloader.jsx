// import React from 'react';
import './preloader.css';

const Preloader = () => {
  return (
    <div className="bookshelf_wrapper bg-white m-0 w-screen h-screen flex flex-col justify-center items-center">
      <ul className="books_list">
        <li className="book_item first"></li>
        <li className="book_item second"></li>
        <li className="book_item third"></li>
        <li className="book_item fourth"></li>
        <li className="book_item fifth"></li>
        <li className="book_item sixth"></li>
      </ul>
      <div className="shelf"></div>
    </div>
  );
}

export default Preloader;
