const DEFAULT_LOCALE = 'ru';
const DAYS_IN_WEEK = 7;
const WEEKEND_START_INDEX = 5;
const SUNDAY_INDEX = 0;
const REFERENCE_MONDAY = new Date(2027, 2, 1);
const CAPTION_FORMAT = { month: 'long', year: 'numeric' };
const WEEKDAY_FORMAT = { weekday: 'short' };

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getMondayBasedWeekday(date) {
    const weekday = date.getDay();
    return weekday === SUNDAY_INDEX ? DAYS_IN_WEEK - 1 : weekday - 1;
}

function isWeekendIndex(weekdayIndex) {
    return weekdayIndex >= WEEKEND_START_INDEX;
}

function createCaption(date, locale) {
    const caption = document.createElement('caption');
    caption.textContent = date.toLocaleDateString(locale, CAPTION_FORMAT);
    return caption;
}

function createHeaderRow(locale) {
    const headerRow = document.createElement('tr');
    for (let weekdayIndex = 0; weekdayIndex < DAYS_IN_WEEK; weekdayIndex++) {
        const weekdayDate = new Date(REFERENCE_MONDAY);
        weekdayDate.setDate(REFERENCE_MONDAY.getDate() + weekdayIndex);
        const headerCell = document.createElement('th');
        headerCell.textContent = weekdayDate.toLocaleDateString(locale, WEEKDAY_FORMAT);
        if (isWeekendIndex(weekdayIndex)) {
            headerCell.classList.add('weekend');
        }
        headerRow.appendChild(headerCell);
    }
    return headerRow;
}

function createDayCell(day, isWeekend, isToday) {
    const dayCell = document.createElement('td');
    if (day) {
        dayCell.textContent = day;
    }
    if (isWeekend) {
        dayCell.classList.add('weekend');
    }
    if (isToday) {
        dayCell.classList.add('today');
    }
    return dayCell;
}

function appendWeekRows(table, today) {
    const year = today.getFullYear();
    const month = today.getMonth();
    const currentDay = today.getDate();
    const daysInMonth = getDaysInMonth(year, month);
    const emptyCellsCount = getMondayBasedWeekday(new Date(year, month, 1));
    let weekRow;
    for (let day = 1 - emptyCellsCount; day <= daysInMonth; day++) {
        if (!weekRow || weekRow.childElementCount === DAYS_IN_WEEK) {
            weekRow = document.createElement('tr');
            table.appendChild(weekRow);
        }
        const isWeekend = isWeekendIndex(weekRow.childElementCount);
        weekRow.appendChild(createDayCell(day > 0 ? day : null, isWeekend, day === currentDay));
    }
    while (weekRow.childElementCount < DAYS_IN_WEEK) {
        const isWeekend = isWeekendIndex(weekRow.childElementCount);
        weekRow.appendChild(createDayCell(null, isWeekend, false));
    }
}

function createCurrentMonthCalendar(locale = DEFAULT_LOCALE) {
    const today = new Date();
    const table = document.createElement('table');
    table.classList.add('calendar');
    table.appendChild(createCaption(today, locale));
    table.appendChild(createHeaderRow(locale));
    appendWeekRows(table, today);
    return table;
}

const app = document.getElementById('app');
const calendar = createCurrentMonthCalendar();
app.appendChild(calendar);