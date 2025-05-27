import { Selector } from "testcafe";

/**
 * Page Object Model for the Account page functionality
 * Contains selectors and methods for interacting with the account dashboard
 */
class AccountPage {
  constructor() {
    // Account information
    this.accountInfoSection = Selector('.block-dashboard-info');
    this.editAccountInfoLink = Selector('.action.edit[href*="edit"]');
    this.firstNameField = Selector('#firstname');
    this.lastNameField = Selector('#lastname');
    this.saveButton = Selector('.action.save.primary');
    this.successMessage = Selector('.message-success');
    
    // Address book
    this.addressBookLink = Selector('a[href*="address"]');
    this.addressItems = Selector('.block-addresses-default, .block-addresses-list');
    this.addNewAddressButton = Selector('.action.add');
    this.newAddressStreet = Selector('input[name="street[]"]');
    this.newAddressCity = Selector('input[name="city"]');
    this.newAddressRegionDropdown = Selector('select[name="region_id"]');
    this.newAddressRegionOption = Selector('select[name="region_id"] option').nth(1);
    this.newAddressPostcode = Selector('input[name="postcode"]');
    this.newAddressPhone = Selector('input[name="telephone"]');
    this.saveAddressButton = Selector('.action.save.primary');
    
    // Orders
    this.myOrdersLink = Selector('a[href*="order"]');
    this.orderItems = Selector('.order-items');
    
    // Wishlist
    this.myWishlistLink = Selector('a[href*="wishlist"]');
    this.wishlistItems = Selector('.products-grid.wishlist');
  }
}

export default new AccountPage();
