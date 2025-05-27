// Test data for login and registration tests
import Chance from 'chance';

const chance = new Chance();

export default {
    baseUrl: 'https://magento.softwaretestingboard.com',
    
    // User credentials
    users: {
        standard: {
            email: 'testmgt@getnada.com',
            password: 'strgPass12!'
        },
        invalid: {
            email: 'invalid@example.com',
            password: 'invalidPassword'
        }
    },
    
    // Generate random user data
    generateUser: () => {
        const password = 'Test@' + chance.string({ length: 8, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });
        return {
            firstName: chance.first(),
            lastName: chance.last(),
            email: chance.email(),
            password: password,
            confirmPassword: password
        };
    }
};
