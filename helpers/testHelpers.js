import { t } from "testcafe";

class TestHelpers {
  constructor() {}
  async selectOptionFromDropdown(select, value) {
    const option = select.find("option");
    await t.click(select).click(option.withText(value));
  }

  getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  async returnRandomNumberForMultipleSelector(selector, startingPoint = null) {
    var numberOfItems = await selector.count;
    if (numberOfItems === 0) {
      throw new Error("The given selector was not found");
    }
    if (startingPoint !== null) {
      return this.getRandomInteger(startingPoint, numberOfItems);
    } else {
      return this.getRandomInteger(0, numberOfItems);
    }
  }

  async returnRandomSelectorFromMultipleSelectors(selector, startingIndex) {
    var randomNumber = await this.returnRandomNumberForMultipleSelector(
      selector,
      startingIndex,
    );
    var finalElement = await selector.nth(randomNumber);
    return finalElement;
  }

  async selectRandomOptionFromDropdown(select) {
    const options = await select.find("option");
    var randomSelector =
      await this.returnRandomSelectorFromMultipleSelectors(options);

    if (
      (await randomSelector.value) === "Select one" ||
      (await randomSelector.value) === ""
    ) {
      randomSelector =
        await this.returnRandomSelectorFromMultipleSelectors(options);
    }

    await t.click(await select.with({ timeout: 300 }));
    await t.wait(1500);
    await select.find(randomSelector);
    await t.click(await randomSelector.with({ timeout: 300 }));
  }
}

export default new TestHelpers();
