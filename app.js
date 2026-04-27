import { createApp } from "vue";
import { headerComponent } from "./components/HeaderComponent.js";
import { rowComponent } from "./components/RowComponent.js";
import { weeksComponent } from "./components/WeeksComponent.js";
import { daysComponent } from "./components/DaysComponent.js";
import { buttonComponent } from "./components/ButtonComponent.js";
import { availabilityComponent } from "./components/AvailabilityComponent.js";
import { occupationsComponent } from "./components/OccupationsComponent.js";
import { getBookings } from "./services/bookingService.js";
import { getProfessionIcons, createSchedule, createWorkDays, getMondayThisWeek } from "./proffesionIdentifier.js";


const app = {
    components: {
        'header-component': headerComponent,
        'weeks-component': weeksComponent,
        'days-component': daysComponent,
        'row-component': rowComponent,
        'button-component': buttonComponent,
        'availability-component': availabilityComponent,
        'occupations-component': occupationsComponent
    },
    data() {
        return {
            craftsmen: []
        };
    },

    async mounted() {
        const data = await getBookings();

        const startDate = getMondayThisWeek();
        const workDays = createWorkDays(startDate);

        console.log(workDays);
        console.log(data);

        this.craftsmen = data.map(person => ({
            name: person.name,
            img: getProfessionIcons(person.professions),
            schedule: createSchedule(person.bookings, workDays)
        }));
    }
};

createApp(app).mount("#app");