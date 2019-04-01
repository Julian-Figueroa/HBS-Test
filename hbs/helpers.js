/*jshint esversion: 6 */
/*jshint esversion: 7 */
/*jshint esversion: 8 */
/*jshint esversion: 9 */
const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});