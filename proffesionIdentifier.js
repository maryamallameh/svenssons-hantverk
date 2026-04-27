/**
 * Matches a person's profession with an image icon file path.
 *
 * A person can have one or more professions, so this function returns
 * an array of images instead of only one icon.
 *
 * @param {string[]} professions - The professions from the API.
 * @returns {string[]} A list of icon images for the persons' professions.
 */

export function getProfessionIcons(professions) {
  return professions.map(p => {
    if (p === "Carpenter") return "assets/icons/hammer.png";
    if (p === "Electrician") return "assets/icons/bolt.png";
    if (p === "Painter") return "assets/icons/paintbrush.png";
    if (p === "Mason") return "assets/icons/bricks.png";
    if (p === "Plumber") return "assets/icons/plunger.png";
  });
}

/**
 * Gets the date for monday of the current week.
 *
 * This date is used as the first day of the first week of the table 
 * consisting of four weeks.
 * 
 * Calculates how many days to move back from today's date back to monday this week.
 *
 * @returns {string} return the monday's date as YYYY-MM-DD format.
 */
export function getMondayThisWeek() {
  const today = new Date();
  const day = today.getDay(); //get day of the week as a number 0-6 (0 is sunday, 1 is monday)
  let diff; //how many days to roll back, the difference between today and monday.

  if (day === 0) { //0 = sunday
    diff = -6; // if today is sunday, roll back 6 days to monday
  } else {
    diff = 1 - day;
  }

  today.setDate(today.getDate() + diff);

  return formatDate(today);
}

function formatDate(date) {
  return date.toISOString().split("T")[0]; //Removes time stamp and returns date as YYYY-MM-DD.
}

/**
 * Makes an array of 20 work days, 4 weeks mon-fri starting from the monday of the current week.
 * Excludes weekends.
 * 
 * @param {string} startDate is the monday of the current week, YY-MM-DD
 * @returns {string[]} An array of 20 workdays.
 */

export function createWorkDays(startDate) {
  const days = [];
  const date = new Date(startDate);

  while (days.length < 20) {
    const day = date.getDay();

    if (day >= 1 && day <= 5) { //Only include week days mon-fri
      days.push(formatDate(date));
    }

    date.setDate(date.getDate() + 1);
  }

  return days;
}

/**
 * Creating a row in the table showing the 4 week schedule for one worker, 
 * showing their booking statuses for each day. 
 * 
 * @param {Object[]} bookings a list of one persons bookings 
 * @param {string[]} workDays the list of workdays in teh table
 * @returns {string[]} the array of CSS classes for the schedule
 */

export function createSchedule(bookings, workDays) {
  const schedule = [];

  workDays.forEach(() => {
    schedule.push("white"); //first, create empty schedule without colors
  });

  workDays.forEach((day, index) => { //For every day of the empty schedule
    bookings.forEach((booking) => { //Go through each booking for this person
      const isDayInsideBooking =
        day >= booking.from && day <= booking.to; //Check if the day in schedule is within booking dates from the api

      if (isDayInsideBooking) {
        const currentValue = schedule[index]; //Get the day if it's within booking range

        schedule[index] =
          combineBookingClasses(currentValue, booking); //Update with the correct color from CSS classes
      }

    });
  });

  return schedule;
}

/**
 * Determines which color will be assigned to the day of teh schedule.
 * Assigns Css classes based on booking status from the api for each person and day.
 * 
 * If a booking is 50% already, it changes the css class to a new color.
 * 
 * @param {string} currentClass the CSS class currently in the day of the table cell
 * @param {Object} booking booking type fetched from the API for a person. 
 * Can be 50% or 100% and status names: Absent, Booked, Preliminary.
 * @returns {string} the CSS class to be assigned for the day 
 */
function combineBookingClasses(currentClass, booking) {
  if (booking.status === "Absent") return "gray";

  if (booking.status === "Booked") {
    if (booking.percentage === 100) return "blue";

    if (booking.percentage === 50) {
      if (currentClass === "blue-white") return "blue-blue";
      if (currentClass === "pink-white") return "blue-pink"; //This one wasnt in the figma sketch but seems logical to use
      return "blue-white";
    }
  }

  if (booking.status === "Preliminary") {
    if (booking.percentage === 100) return "pink";

    if (booking.percentage === 50) {
      if (currentClass === "pink-white") return "pink-purple";
      if (currentClass === "blue-white") return "blue-pink";
      return "pink-white";
    }
  }

  return currentClass;
}


