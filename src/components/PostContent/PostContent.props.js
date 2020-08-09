import PropTypes from 'prop-types';
import { Comment } from '../CommentsList/CommentList.props';

export const PostContentTypes = PropTypes.shape({
  subreddit: PropTypes.string,
  selftext: PropTypes.string,
  title: PropTypes.string,
  subreddit_name_prefixed: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
  thumbnail: PropTypes.string,
  selftext_html: PropTypes.string,
  id: PropTypes.string,
  permalink: PropTypes.string,
  url: PropTypes.string,
  subreddit_subscribers: PropTypes.number,
  created_utc: PropTypes.number,
  is_video: PropTypes.bool,
  author: PropTypes.string,
  ups: PropTypes.number,
  comments: PropTypes.arrayOf(Comment),
});
