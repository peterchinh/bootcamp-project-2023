import { IComment } from "@/database/blogSchema";
import React from "react";
import styles from "./comment.module.css";
{
  /* When we pass props, the name that we use to pass values
		is the key for the type
*/
}
type CommentProps = {
  comment: IComment;
};

{
  /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
function parseCommentTime(time: Date) {
    // Format date as Month Day, Year at Time AM/PM
    return new Date(time).toLocaleString('en-US', {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.userDate}>
        <div className={styles.user}>{comment.user}</div>
        <div className={styles.date}>{parseCommentTime(comment.time)}</div>
      </div>
      <div className={styles.commentText}>{comment.comment}</div>
    </div>
  );
}

export default Comment;
