export const isLPostikedByUser = (post, userId) => {
  for (let item of post.likedByUsers) {
    if (item.id === userId) {
      return true;
    }
  }
  return false;
};

export const isCommentLikedByUser = (comment, userId) => {
  debugger;
  for (let item of comment.likedByUsers) {
    if (item.id === userId) {
      return true;
    }
  }
  return false;
};

export const isReqUser = (userId1, userId2) => {
  if (userId1 && userId2) return userId1 == userId2;
};

export const isSavedPost = (user, postId) => {
  for (let item of user.savedPost) {
    if (item.id == postId) {
      return true;
    }
  }
  return false;
};

export const isFollowing = (reqUser, user) => {
  if (reqUser?.id == user?.id) {
    return true;
  }
  return false;
};

export const timeDifference = (timestamp) => {
  const date = new Date(timestamp);
  const diff = Date.now() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const day = Math.floor(hours / 24);
  const weeks = Math.floor(day / 7);

  if (weeks > 0) {
    return weeks + "week" + (weeks === 1 ? "" : "s") + " ago";
  } else if (day > 0) {
    return day + "day" + (day === 1 ? "" : "s") + " ago";
  } else if (hours > 0) {
    return hours + "hour" + (hours === 1 ? "" : "s") + " ago";
  } else if (minutes > 0) {
    return minutes + "minute" + (minutes === 1 ? "" : "s") + " ago";
  } else if (seconds > 0) {
    return seconds + "second" + (seconds === 1 ? "" : "s") + " ago";
  }
};
