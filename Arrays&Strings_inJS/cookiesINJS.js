// 1. SETTING A COOKIE (examples)
document.cookie = "username=Zoro";
document.cookie = "username=Zoro; Path=/; Max-Age=3600"; // 1 hour
const oneYearFromNow = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
document.cookie = `username=Zoro; Path=/; Expires=${oneYearFromNow}`;
document.cookie = "username=Zoro; Path=/; Secure; SameSite=Strict"; // Secure requires HTTPS

// 2. READING ALL COOKIES
console.log(document.cookie); // Returns all cookies as a single string

// 3. PARSE COOKIES INTO AN OBJECT (robust)
function getAllCookies() {
    const raw = document.cookie || '';
    if (!raw) return {};
    return raw.split(';').reduce((acc, part) => {
        const cookie = part.trim();
        if (!cookie) return acc;
        const idx = cookie.indexOf('=');
        if (idx === -1) {
            acc[cookie] = '';
            return acc;
        }
        const name = cookie.slice(0, idx);
        const value = cookie.slice(idx + 1);
        try {
            acc[name] = decodeURIComponent(value);
        } catch (e) {
            acc[name] = value;
        }
        return acc;
    }, {});
}
console.log(getAllCookies());

// 4. GET A SPECIFIC COOKIE
function getCookie(name) {
    const cookies = getAllCookies();
    return Object.prototype.hasOwnProperty.call(cookies, name) ? cookies[name] : null;
}
console.log(getCookie('username'));

// 5. DELETE A COOKIE (include path/domain if needed)
function deleteCookie(name, path = '/', domain) {
    let cookieStr = `${name}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}`;
    if (domain) cookieStr += `; Domain=${domain}`;
    document.cookie = cookieStr;
}
// deleteCookie('username');

// 6. UPDATE A COOKIE
function updateCookie(name, value, days = 7, path = '/', domain) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    let cookieStr = `${name}=${encodeURIComponent(value)}; Expires=${expires}; Path=${path}`;
    if (domain) cookieStr += `; Domain=${domain}`;
    document.cookie = cookieStr;
}
// updateCookie('username', 'Jane', 7);

// 7. COOKIE PROPERTIES EXPLAINED
// - Path: cookie accessible path (default: current path)
// - Domain: cookie accessible domain
// - Max-Age: seconds until cookie expires (takes precedence over Expires)
// - Expires: exact date/time (UTC string)
// - Secure: cookie sent only over HTTPS
// - SameSite: CSRF protection (Strict, Lax, None)
// Note: HttpOnly cookies cannot be set via JavaScript — they must be set server-side.

// 8. COMPLEX EXAMPLE (flexible)
function setCookieAdvanced(name, value, options = {}) {
    let cookieStr = `${name}=${encodeURIComponent(value)}`;
    if (options.maxAge != null) cookieStr += `; Max-Age=${options.maxAge}`;
    else if (options.days) cookieStr += `; Max-Age=${options.days * 86400}`;

    if (options.expires instanceof Date) cookieStr += `; Expires=${options.expires.toUTCString()}`;
    else if (typeof options.expires === 'string') cookieStr += `; Expires=${options.expires}`;

    cookieStr += `; Path=${options.path || '/'}`;
    if (options.domain) cookieStr += `; Domain=${options.domain}`;
    if (options.secure) cookieStr += '; Secure';
    if (options.sameSite) cookieStr += `; SameSite=${options.sameSite}`;
    document.cookie = cookieStr;
}

setCookieAdvanced('user', 'Alice', {
    days: 30,
    path: '/',
    secure: true,
    sameSite: 'Strict'
});