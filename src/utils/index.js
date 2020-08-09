export const getScore = (score) => {
  if (score < 1000) {
    return score;
  }

  return `${score/1000}k`
};

export const organizeComments = (comments) => {
  let commentsMap = {};
  let maxDepth = 0;

  // This loop will create the map for the comments with respect to depth
  for (let i = 0; i < comments.length; i++) {
    const item = {...comments[i]};
    if (!commentsMap[item.depth]) {
      commentsMap[item.depth] = [];
    }

    if (item.depth > maxDepth) {
      maxDepth = item.depth;
    }

    commentsMap[item.depth].push(item);
  }

  for (let i = maxDepth; i > 0; i--) {
    const childComments = commentsMap[i];
    const parentComments = commentsMap[i - 1];

    for (let j = 0; j < childComments.length; j++) {
      const child = childComments[j];

      for (let k = 0; k < parentComments.length; k++) {
        const parent = parentComments[k];

        if (child.parent_id === parent.id) {
          if (!parent.children) {
            parent.children = [];
          }

          parent.children.push(child);
          break;
        }
      }
    }
  }

  return commentsMap[0];
};

export const onProcessComments = (comments = [], deletedComments = [], sortOrder) => {
  const sort = sortOrder.value;
  return comments
  .filter(comment => !deletedComments.includes(comment.id))
  .sort((a, b) => {
    let value = new Date(b.created_utc) - new Date(a.created_utc);
    if (sort === 'oldest') {
      value = new Date(a.created_utc) - new Date(b.created_utc);
    }

    return value;
  });
};
