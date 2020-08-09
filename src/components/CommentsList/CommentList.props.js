import PropTypes from 'prop-types';

export const Comment = PropTypes.shape({
  created_utc: PropTypes.number,
  subreddit_name_prefixed: PropTypes.string,
  subreddit: PropTypes.string,
  depth: PropTypes.number,
  permalink: PropTypes.string,
  body_html: PropTypes.string,
  downs: PropTypes.number,
  body: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  ups: PropTypes.number,
});
