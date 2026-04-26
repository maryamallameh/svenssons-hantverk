import { createApp } from "vue";
import { rowComponent } from "./components/RowComponent.js";
import { weeksComponent } from "./components/WeeksComponent.js";
import { daysComponent } from "./components/DaysComponent.js";
import { getBookings } from "./services/bookingService.js";
import { getProfessionIcons, createSchedule, createWorkDays, getMondayThisWeek } from "./proffesionIdentifier.js";


const app = {
    components: {
        'weeks-component': weeksComponent,
        'days-component': daysComponent,
        'row-component': rowComponent
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