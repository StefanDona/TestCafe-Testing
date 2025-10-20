import { Selector, t } from "testcafe";

class CatalogPage {
  constructor() {
    this.searchBox = Selector("#search-query");
    this.submitButton = Selector('button[data-test="search-submit"]');
    this.resetButton = Selector('button[data-test="search-reset"]');
    this.cardTitle = Selector(".card-title");
    this.noResultsMessage = Selector('div[data-test="no-results"]');
    this.priceFilterMin = Selector(".ngx-slider-pointer-min");
    this.priceFilterMax = Selector(".ngx-slider-pointer-max");
    this.searchResultTitle = Selector('h3[data-test="search-caption"]');
    this.searchTerm = Selector('span[data-test="search-term"]');
  }

  async selectCategoryCheckbox(categoryName) {
    const label = Selector("label").withText(new RegExp(categoryName, "i"));
    await t.click(label);
  }

  async validateFullSearchTitle(searchTerm) {
    const fullText = await this.searchResultTitle.innerText;
    const expectedText = `Searched for: ${searchTerm}`;
    await t.expect(fullText.toLowerCase()).eql(expectedText.toLowerCase());
  }

  async validateAllResultsContain(expectedText) {
    const cardCount = await this.cardTitle.count;
    await t.expect(cardCount).gt(0, "No results found");

    for (let i = 0; i < cardCount; i++) {
      const cardTitle = this.cardTitle.nth(i);
      const titleText = await cardTitle.innerText;
      await t
        .expect(titleText.toLowerCase())
        .contains(expectedText.toLowerCase());
    }
  }
}
export default new CatalogPage();
