import CatalogPage from "../pages/CatalogPage";

require("dotenv").config();

fixture`Catalog Tests`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Validate that searching for a product retu", async (t) => {
  await t.click(CatalogPage.searchBox);
  await t.typeText(CatalogPage.searchBox, "Bolt Cutters");
  await t.click(CatalogPage.submitButton);
  await t.expect(CatalogPage.cardTitle.innerText).eql("Bolt Cutters");
});

test("Validate that searching for a non-existent product shows no results", async (t) => {
  await t.click(CatalogPage.searchBox);
  await t.typeText(CatalogPage.searchBox, "NonExistentProduct123");
  await t.click(CatalogPage.submitButton);
  await t
    .expect(CatalogPage.noResultsMessage.innerText)
    .eql("There are no products found.");
});

test("Validate that Reset button clears search input and results", async (t) => {
  await t.click(CatalogPage.searchBox);
  await t.typeText(CatalogPage.searchBox, "Hammer");
  await t.click(CatalogPage.submitButton);
  await CatalogPage.validateFullSearchTitle("Hammer");
  await t.click(CatalogPage.resetButton);
  await t
    .expect(CatalogPage.searchResultTitle.exists)
    .notOk("Search results title should be cleared");
});

test("Validate that Single Category Filter works", async (t) => {
  await CatalogPage.selectCategoryCheckbox("Hammer");
  await CatalogPage.validateAllResultsContain("Hammer");
});
