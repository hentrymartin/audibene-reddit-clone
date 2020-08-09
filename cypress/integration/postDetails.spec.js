describe('Post details page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/post-details');
  });

  it('show/hide comments section', () => {
    
    const commentsList = cy.getByTestId('comments-list-wrapper');

    commentsList.should('be.visible');

    const commentsCount = cy.getByTestId('comments-count');
    commentsCount.click();

    const list = cy.getByTestId('comments-list-wrapper');
    list.should('not.be.visible');
  });

  it('Check for comments length', () => {
    const commentsList = cy.getByTestId('comment-item');
    commentsList.should('have.length', 16);
  });

  it('Delete comment and reset deleted comment', () => {
    cy.fixture('post')
    .then((postDetails) => {
      const { comments } = postDetails;
      const firstComment = comments[0];
      const deleteIcon = cy.getByTestId(`delete-icon-${firstComment.id}`);

      const firstIcon = deleteIcon.first();
      firstIcon.click();
      const commentsListAfterDeleting = cy.getByTestId('comment-item');
      commentsListAfterDeleting.should('have.length', comments.length - 1);

      const resetButton = cy.getByTestId('reset-button');
      resetButton.click();

      const commentsList = cy.getByTestId('comment-item');
      commentsList.should('have.length', comments.length);
    });
  });
});
