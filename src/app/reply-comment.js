"use client";

export default function ReplyComment({
  currentUser,
  commentsData,
  setCommentsData,
  handleNotifyStatus,
  content,
  replyRecord,
  setReplyRecord,
}) {
  const findMaxId = (data) => {
    let maxId = 0;
    const findMaxIdRecursive = (obj) => {
      if (obj.id && obj.id > maxId) {
        maxId = obj.id;
      }
      if (obj.replies && obj.replies.length > 0) {
        obj.replies.forEach(findMaxIdRecursive);
      }
    };
    data.forEach(findMaxIdRecursive);
    return maxId + 1;
  };

  const handleCommentAdd = (e) => {
    e.preventDefault();
    let comment = e.target.comment.value;
    if (comment.trim().length) {
      let id = findMaxId(commentsData);
      let commentRecord = {
        id,
        content: comment,
        createdAt: "Today",
        score: 0,
        user: currentUser,
      };

      // Update existing comments and add the new comment
      let updatedComments = commentsData.map((existingComment) => {
        if (replyRecord && existingComment.id === replyRecord.id) {
          // If replyRecord is a child, push the comment to its replies
          return {
            ...existingComment,
            replies: [...(existingComment.replies || []), commentRecord],
          };
        } else {
          return existingComment;
        }
      });

      // If replyRecord is not set then push the comment to the root array
      if (!replyRecord) {
        updatedComments.push(commentRecord);
        var message = `A new comment has been successfully added!`;
      } else {
        var message = `A new comment reply has been successfully added!`;
        setReplyRecord({});
      }

      setCommentsData(updatedComments);
      e.target.comment.value = "";
      handleNotifyStatus(message);
    } else {
      let message = `The comment cannot be added with empty field!`;
      handleNotifyStatus(message);
    }
  };

  return (
    <form onSubmit={handleCommentAdd}>
      <div className="p-5 bg-white rounded-md shadow-lg shadow-[#f4f4f4] mb-5">
        <div className="flex">
          <div className="mr-3">
            <img
              src={currentUser.image.png}
              className="w-[45px]"
              alt="Avatar photo"
            />
          </div>
          <div className="w-full mr-3">
            <textarea
              rows="3"
              name="comment"
              placeholder="Add a comment..."
              className="w-full p-3 py-2 rounded-lg border-[1.5px] text-[14px] border-[#e4dddd]"
            >
              {content ? `@${content} ` : null}
            </textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[var(--moderate-blue-color)] hover:bg-[var(--light-grayish-blue-color)] font-medium text-white rounded-lg px-6 py-2 text-[13px]"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
