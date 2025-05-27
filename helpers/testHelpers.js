/**
 * Test Helper Utilities
 * Contains reusable functions for test cases
 */

import { t } from 'testcafe';

export default {
    /**
     * Waits for an element to become visible with a custom error message
     * @param {Selector} selector - TestCafe selector to wait for
     * @param {string} errorMessage - Custom error message if timeout occurs
     * @param {number} timeout - Maximum wait time in milliseconds
     * @returns {Promise} - TestCafe assertion result
     */
    async waitForVisible(selector, errorMessage = 'Element not visible', timeout = 10000) {
        await t.expect(selector.with({ visibilityCheck: true }).exists)
            .ok(errorMessage, { timeout });
    },
    
    /**
     * Retry a function multiple times if it fails
     * Useful for handling flaky actions like clicks
     * @param {Function} fn - Async function to retry
     * @param {number} maxAttempts - Maximum number of retry attempts
     * @param {number} delay - Delay between retries in milliseconds
     * @returns {Promise} - Result of the function or throws the last error
     */
    async retry(fn, maxAttempts = 3, delay = 1000) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                if (attempt < maxAttempts) {
                    await t.wait(delay);
                }
            }
        }
        
        throw lastError;
    },
    
    /**
     * Check if an element exists on the page
     * @param {Selector} selector - TestCafe selector to check
     * @returns {Promise<boolean>} - True if element exists
     */
    async elementExists(selector) {
        return await selector.exists;
    },
    
    /**
     * Get text content from a selector
     * @param {Selector} selector - TestCafe selector
     * @returns {Promise<string>} - Text content of the element
     */
    async getText(selector) {
        return await selector.innerText;
    },
    
    /**
     * Clear a text input field
     * @param {Selector} selector - Input field selector
     */
    async clearTextField(selector) {
        const value = await selector.value;
        const length = value ? value.length : 0;
        
        if (length > 0) {
            await t
                .click(selector)
                .pressKey('ctrl+a delete');
        }
    }
};
