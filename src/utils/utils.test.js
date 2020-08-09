import { onProcessComments, organizeComments } from ".";
import { postDetails } from "../mocks/mock";

describe('Utility function tests', () => {
  it('snapshot test onProcessComments', () => {
    const { comments } = postDetails;
    const latest = {
      value: 'latest',
      label: 'Latest',
    };
    const processedComments = onProcessComments(comments, [], latest);
    expect(processedComments).toMatchSnapshot();

    const oldest = {
      value: 'oldest',
      label: 'Oldest',
    };

    const sortByOldest = onProcessComments(comments, [], oldest);
    expect(sortByOldest).toMatchSnapshot();
  });

  it('Snapshot test for organize comments function', () => {
    const { comments } = postDetails;
    const organizedComments = organizeComments(comments);

    expect(organizedComments).toMatchSnapshot();
  });
})