const TEST_URL = 'http://localhost:3000';

describe('navigation using nav bar and links', () => {
  it('navigates to list page and search page with navbar', () => {
    cy.visit(TEST_URL);

    cy.contains('a', 'Search').click();
    cy.url().should('include', '/search');

    cy.contains('a', 'List').click();
    cy.url().should('include', '/list');
  });

  it('navigates to country page from list page and navigates back', () => {
    cy.visit(`${TEST_URL}/list`);

    cy.contains('a', 'Puerto Rico').click();
    cy.url().should('include', '/country/PR');

    cy.contains('Go Back').click();
    cy.url().should('include', '/list');
  });

  it('navigates to country page from search page and navigates back', () => {
    cy.visit(`${TEST_URL}/search`);

    cy.contains('a', 'Puerto Rico').click();
    cy.url().should('include', '/country/PR');

    cy.contains('Go Back').click();
    cy.url().should('include', '/search');
  });

  it('searches properly', () => {
    cy.visit(`${TEST_URL}/search`);

    cy.get('input').click();
    cy.get('input').type('puerto rico');

    // make sure none of the countries with "United" in their name show
    cy.contains('a', 'United').should('not.exist');

    cy.contains('a', 'Puerto').click();
    cy.url().should('include', '/country/PR');
  });

  it('toggles nav collapsing with pressing collapse button', () => {
    cy.visit(`${TEST_URL}/list`);

    cy.get('button[data-testid="toggle-nav"]').click();
    cy.wait(300); // wait for complete collapse

    cy.get('a[href="/search"]').click(); // click a nav button
    cy.url().should('include', '/search');

    // make sure nav is still collapsed, and expand it back
    cy.get('button[aria-label="click to expand nav"]').click();

    cy.get('a[href="/"]').first().click();
    cy.url().should('equal', `${TEST_URL}/`);
  });
});
