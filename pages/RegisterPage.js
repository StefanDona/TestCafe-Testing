import { Selector, t } from "testcafe";
import Chance from "chance";
import Utils from "../helpers/utils";

const chance = new Chance();

class RegisterPage {
  constructor() {
    this.firstName = Selector("#first_name");
    this.lastName = Selector("#last_name");
    this.dateOfBirth = Selector("#dob");
    this.street = Selector("#street");
    this.postalCode = Selector("#postal_code");
    this.city = Selector("#city");
    this.state = Selector("#state");
    this.countryDropdown = Selector("#country");
    this.phone = Selector("#phone");
    this.email = Selector("#email");
    this.psw = Selector("#password");
    this.registerBtn = Selector(".btnSubmit");
  }

  async fillRegisterForm(
    username = chance.first(),
    lastName = chance.last(),
    dateOfBirth = chance.birthday(),
    street = chance.street(),
    postalCode = chance.postal(),
    city = chance.city(),
    state = chance.state({ full: true }),
    phone = chance.phone({ formatted: false }),
    email = chance.email(),
    password = chance.string({ length: 10 }),
  ) {
    const formattedDate = new Date(dateOfBirth).toISOString().split("T")[0];

    await t.typeText(this.firstName, username, { paste: true, replace: true });
    await t.typeText(this.lastName, lastName, { paste: true, replace: true });
    await t.typeText(this.dateOfBirth, formattedDate, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.street, street, { paste: true, replace: true });
    await t.typeText(this.postalCode, postalCode, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.city, city, { paste: true, replace: true });
    await t.typeText(this.state, state, { paste: true, replace: true });
    await Utils.selectRandomOptionFromDropdown(this.countryDropdown);
    await t.typeText(this.phone, phone, { paste: true, replace: true });
    await t.typeText(this.email, email, { paste: true, replace: true });
    await t.typeText(this.psw, password, { paste: true, replace: true });
    await t.click(this.registerBtn);
  }
}

export default new RegisterPage();
