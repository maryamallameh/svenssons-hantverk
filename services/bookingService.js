const API_URL = "https://yrgo-web-services.netlify.app/bookings";

export async function getBookings() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Kunde inte hämta bokningar");
        alert("Kunde inte hämta bokningar");
    }

    return await response.json();
}