import React  from 'react';

function PostHeader({ author, date }) {
  return (
  <div className="headerItem">
    <img src={ author.avatar } alt=""/> 
    <div className="header-Details">
      <h2> { author.name } </h2>
      <p> { date }</p>
    </div>
  </div>
  )
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <div>
            <span>{comment.author.name}</span>
            {comment.content}
            <ul>
            <li> < a href="">Curtir</a> </li>
            <li >< a href="">Responder</a></li>
          </ul>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default function PostItem({ author, date, content, comments }) {
  return (
    <div className="PostItem">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
     <div className="input-comment">
       <img src={author.avatar} />
      <input type="text" />
      </div>
    </div>
  )
}
