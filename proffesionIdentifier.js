export function getProfessionIcons(professions) {
  return professions.map(p => {
    if (p === "Carpenter") return "assets/icons/hammer.png";
    if (p === "Electrician") return "assets/icons/bolt.png";
    if (p === "Painter") return "assets/icons/paintbrush.png";
    if (p === "Mason") return "assets/icons/bricks.png";
    if (p === "Plumber") return "assets/icons/plunger.png";
  });
}

export function getMondayThisWeek() {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  today.setDate(today.getDate() + diff);

  return formatDate(today);
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export function createWorkDays(startDate) {
  const days = [];
  const date = new Date(startDate);

  while (days.length < 20) {
    const day = date.getDay();

    if (day >= 1 && day <= 5) {
      days.push(formatDate(date));
    }

    date.setDate(date.getDate() + 1);
  }

  return days;
}

export function createSchedule(bookings, workDays) {
  const schedule = new Array(workDays.length).fill("white");

  bookings.forEach((booking) => {
    workDays.forEach((day, index) => {
      if (day >= booking.from && day <= booking.to) {
        schedule[index] = combineBookingClasses(schedule[index], booking);
      }
    });
  });

  return schedule;
}

function combineBookingClasses(currentClass, booking) {
  if (booking.status === "Absent") return "gray";

  if (booking.status === "Booked") {
    if (booking.percentage === 100) return "blue";

    if (booking.percentage === 50) {
      if (currentClass === "blue-white") return "blue-blue";
      if (currentClass === "pink-white") return "blue-pink";
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