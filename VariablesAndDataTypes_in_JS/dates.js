// ===== BASICS =====

// Creating dates
const now = new Date(); // Current date and time
const specific = new Date('2024-01-15'); // From string
const timestamp = new Date(1704067200000); // From milliseconds
const constructed = new Date(2024, 0, 15, 10, 30, 0); // Year, Month(0-11), Day, Hour, Min, Sec

// Getting date components
const year = now.getFullYear();
const month = now.getMonth(); // 0-11
const date = now.getDate(); // 1-31
const day = now.getDay(); // 0-6 (Sunday-Saturday)
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();

// ===== INTERMEDIATE =====

// String conversions
const dateString = now.toString();
const isoString = now.toISOString();
const localeString = now.toLocaleDateString();
const timeString = now.toLocaleTimeString();

// Timestamps (milliseconds since Jan 1, 1970)
const timestamp2 = now.getTime();
const timestamp3 = Date.now();

// Setting date components
now.setFullYear(2025);
now.setMonth(5); // June
now.setDate(20);
now.setHours(15, 30, 45);

// Date arithmetic
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

// ===== ADVANCED =====

// Formatting dates (without libraries)
function formatDate(date) {
    const pad = (num) => String(num).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

// Compare dates
function getDaysDifference(date1, date2) {
    return Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
}

// Timezone handling
const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
const offset = now.getTimezoneOffset(); // Minutes behind UTC

// Working with Intl API
const intl = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
});
console.log(intl.format(now)); // "Monday, January 15, 2024"

// Checking if date is valid
function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

// Age calculator
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Parse custom date formats
function parseCustomDate(dateStr, format) {
    // Example: parseCustomDate('15/01/2024', 'DD/MM/YYYY')
    const parts = dateStr.split(/[/\-\.]/);
    const formatParts = format.split(/[/\-\.]/);
    const result = {};
    
    formatParts.forEach((part, i) => {
        result[part] = parseInt(parts[i]);
    });
    
    return new Date(result.YYYY, result.MM - 1, result.DD);
}