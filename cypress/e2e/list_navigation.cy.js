describe('HorizontalList Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/items', {
      fixture: 'items.json',
    }).as('fetchItems');
    cy.visit('/');
    cy.wait('@fetchItems');
  });

  it('renders the horizontal list correctly', () => {
    cy.get('.flex.gap-4').should('exist');
  });

  it('displays the correct number of items', () => {
    cy.get('.flex.gap-4 > div').should('have.length.greaterThan', 0);
  });

  it('focuses the first item initially', () => {
    cy.get('.flex.gap-4 > div:first-child').should('have.class', 'scale-120');
  });

  it('moves focus to the next item on right arrow key press', () => {
    cy.get('body').type('{rightarrow}');
    cy.get('.flex.gap-4 > div:nth-child(2)').should('have.class', 'scale-120');
  });

  it('moves focus to the previous item on left arrow key press', () => {
    cy.get('body').type('{leftarrow}');
    cy.get('.flex.gap-4 > div:last-child').should('have.class', 'scale-120');
  });

  it('renders the image and title for each item', () => {
    cy.get('.flex.gap-4 > div').each(($el) => {
      cy.wrap($el).find('img').should('have.attr', 'src');
      cy.wrap($el).find('p').should('exist');
    });
  });
});
