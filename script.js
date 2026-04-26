import { ref, createApp } from "vue";

const weeksComponent = {
    template: `
                <tr>
                    <th class="name">Hantverkare</th>
                    <th colspan="5">Vecka 1</th>
                    <th colspan="5">Vecka 2</th>
                    <th colspan="5">Vecka 3</th>
                    <th colspan="5">Vecka 4</th>
                </tr>
            `
}

const daysComponent = {
    template: `
                <tr>
                    <th></th>

                    <th>M</th>
                    <th>T</th>
                    <th>O</th>
                    <th>T</th>
                    <th>F</th>

                    <th>M</th>
                    <th>T</th>
                    <th>O</th>
                    <th>T</th>
                    <th>F</th>

                    <th>M</th>
                    <th>T</th>
                    <th>O</th>
                    <th>T</th>
                    <th>F</th>

                    <th>M</th>
                    <th>T</th>
                    <th>O</th>
                    <th>T</th>
                    <th>F</th>
                </tr>
            `
}

const rowComponent = {
    props: ['name', 'img', 'schedule'],
    template: `
                <tr>
                    <th class="name">
                        {{ name }}
                        <img :src="img">
                    </th>

                    <td
                        v-for="(square, i) in schedule"
                        :key="i"
                        :class="square">
                    </td>
                </tr>
            `
}

const app = {
    components: {
        'weeks-component': weeksComponent,
        'days-component': daysComponent,
        'row-component': rowComponent
    },
    data() {
        return {
            craftsmen: [
                {
                    name: "Aiko Tanaka",
                    img: "assets/icons/paintbrush.png",
                    schedule: [
                        "blue-white", "pink", "gray", "blue", "white",
                        "blue-white", "pink", "gray", "blue", "white",
                        "blue-white", "pink", "gray", "blue", "white",
                        "blue-white", "pink", "gray", "blue", "white"
                    ]
                },
                {
                    name: "Amina Hassan",
                    img: "assets/icons/bolt.png",
                    schedule: [
                        "pink-purple", "pink-purple", "pink-white", "white", "gray",
                        "pink-purple", "pink-purple", "pink-white", "white", "gray",
                        "pink-purple", "pink-purple", "pink-white", "white", "gray",
                        "pink-purple", "pink-purple", "pink-white", "white", "gray"
                    ]
                },
                {
                    name: "Amara Okafor",
                    img: "assets/icons/paintbrush.png",
                    schedule: [
                        "blue-white", "blue", "blue", "blue", "pink-white",
                        "blue-white", "blue", "blue", "blue", "pink-white",
                        "blue-white", "blue", "blue", "blue", "pink-white",
                        "blue-white", "blue", "blue", "blue", "pink-white"
                    ]
                },
                {
                    name: "Anouk Dubois",
                    img: "assets/icons/paintbrush.png",
                    schedule: [
                        "gray", "pink", "pink", "blue", "blue-white",
                        "gray", "pink", "pink", "blue", "blue-white",
                        "gray", "pink", "pink", "blue", "blue-white",
                        "gray", "pink", "pink", "blue", "blue-white"
                    ]
                },
                {
                    name: "Arjun Patel",
                    img: "assets/icons/plunger.png",
                    schedule: [
                        "blue", "blue", "pink-purple", "pink-white", "white",
                        "blue", "blue", "pink-purple", "pink-white", "white",
                        "blue", "blue", "pink-purple", "pink-white", "white",
                        "blue", "blue", "pink-purple", "pink-white", "white"
                    ]
                },
                {
                    name: "Björn Andersson",
                    img: "assets/icons/bricks.png",
                    schedule: [
                        "pink", "pink-white", "blue-white", "white", "gray",
                        "pink", "pink-white", "blue-white", "white", "gray",
                        "pink", "pink-white", "blue-white", "white", "gray",
                        "pink", "pink-white", "blue-white", "white", "gray"
                    ]
                },
                {
                    name: "Chen Wei",
                    schedule: [
                        "blue-white", "gray", "blue-white", "blue", "blue",
                        "blue-white", "gray", "blue-white", "blue", "blue",
                        "blue-white", "gray", "blue-white", "blue", "blue",
                        "blue-white", "gray", "blue-white", "blue", "blue"
                    ]
                },
                {
                    name: "Diego Martinez",
                    schedule: [
                        "blue-blue", "blue", "white", "pink", "pink-white",
                        "blue-blue", "blue", "white", "pink", "pink-white",
                        "blue-blue", "blue", "white", "pink", "pink-white",
                        "blue-blue", "blue", "white", "pink", "pink-white"
                    ]
                },
                {
                    name: "Elena Rossi",
                    img: "assets/icons/plunger.png",
                    schedule: [
                        "white", "white", "blue-white", "blue-white", "gray",
                        "white", "white", "blue-white", "blue-white", "gray",
                        "white", "white", "blue-white", "blue-white", "gray",
                        "white", "white", "blue-white", "blue-white", "gray"
                    ]
                },
                {
                    name: "Fatima Al-Farsi",
                    img: "assets/icons/bolt.png",
                    schedule: [
                        "blue", "pink-white", "blue", "white", "blue",
                        "blue", "pink-white", "blue", "white", "blue",
                        "blue", "pink-white", "blue", "white", "blue",
                        "blue", "pink-white", "blue", "white", "blue"
                    ]
                },
                {
                    name: "Freja Nielsen",
                    img: "assets/icons/bolt.png",
                    schedule: [
                        "white", "white", "pink", "blue", "white",
                        "white", "white", "pink", "blue", "white",
                        "white", "white", "pink", "blue", "white",
                        "white", "white", "pink", "blue", "white"
                    ]
                },
                {
                    name: "Ivan Petrov",
                    schedule: [
                        "blue", "gray", "gray", "gray", "gray",
                        "blue", "gray", "gray", "gray", "gray",
                        "blue", "gray", "gray", "gray", "gray",
                        "blue", "gray", "gray", "gray", "gray"
                    ]
                },
                {
                    name: "Joon Park",
                    img: "assets/icons/hammer.png",
                    schedule: [
                        "blue-white", "gray", "blue-white", "white", "pink",
                        "blue-white", "gray", "blue-white", "white", "pink",
                        "blue-white", "gray", "blue-white", "white", "pink",
                        "blue-white", "gray", "blue-white", "white", "pink"
                    ]
                },
                {
                    name: "Kwame Mensah",
                    schedule: [
                        "white", "blue", "pink-white", "gray", "blue-white",
                        "white", "blue", "pink-white", "gray", "blue-white",
                        "white", "blue", "pink-white", "gray", "blue-white",
                        "white", "blue", "pink-white", "gray", "blue-white"
                    ]
                },
                {
                    name: "Lars Johansson",
                    img: "assets/icons/plunger.png",
                    schedule: [
                        "gray", "pink", "blue-blue", "blue", "white",
                        "gray", "pink", "blue-blue", "blue", "white",
                        "gray", "pink", "blue-blue", "blue", "white",
                        "gray", "pink", "blue-blue", "blue", "white"
                    ]
                },
                {
                    name: "Leila Haddad",
                    img: "assets/icons/bricks.png",
                    schedule: [
                        "white", "blue-white", "gray", "white", "blue",
                        "white", "blue-white", "gray", "white", "blue",
                        "white", "blue-white", "gray", "white", "blue",
                        "white", "blue-white", "gray", "white", "blue"
                    ]
                },
                {
                    name: "Luca Bianchi",
                    img: "assets/icons/bricks.png",
                    schedule: [
                        "pink", "white", "white", "pink", "blue-white",
                        "pink", "white", "white", "pink", "blue-white",
                        "pink", "white", "white", "pink", "blue-white",
                        "pink", "white", "white", "pink", "blue-white"
                    ]
                },
                {
                    name: "Mateo García",
                    img: "assets/icons/hammer.png",
                    schedule: [
                        "blue", "pink-white", "blue", "gray", "white",
                        "blue", "pink-white", "blue", "gray", "white",
                        "blue", "pink-white", "blue", "gray", "white",
                        "blue", "pink-white", "blue", "gray", "white"
                    ]
                },
                {
                    name: "Mei Lin",
                    img: "assets/icons/paintbrush.png",
                    schedule: [
                        "blue-white", "white", "white", "gray", "pink",
                        "blue-white", "white", "white", "gray", "pink",
                        "blue-white", "white", "white", "gray", "pink",
                        "blue-white", "white", "white", "gray", "pink"
                    ]
                },
                {
                    name: "Mila Ivanova",
                    img: "assets/icons/paintbrush.png",
                    schedule: [
                        "white", "pink", "blue-white", "pink-white", "white",
                        "white", "pink", "blue-white", "pink-white", "white",
                        "white", "pink", "blue-white", "pink-white", "white",
                        "white", "pink", "blue-white", "pink-white", "white"
                    ]
                },
                {
                    name: "Noah Cohen",
                    img: "assets/icons/hammer.png",
                    schedule: [
                        "pink-white", "blue-white", "white", "blue", "pink",
                        "pink-white", "blue-white", "white", "blue", "pink",
                        "pink-white", "blue-white", "white", "blue", "pink",
                        "pink-white", "blue-white", "white", "blue", "pink"
                    ]
                },
                {
                    name: "Omar Rahman",
                    img: "assets/icons/hammer.png",
                    schedule: [
                        "pink", "blue", "gray", "white", "blue-white",
                        "pink", "blue", "gray", "white", "blue-white",
                        "pink", "blue", "gray", "white", "blue-white",
                        "pink", "blue", "gray", "white", "blue-white"
                    ]
                },
                {
                    name: "Priya Sharma",
                    img: "assets/icons/bricks.png",
                    schedule: [
                        "gray", "blue-white", "pink", "pink", "gray",
                        "gray", "blue-white", "pink", "pink", "gray",
                        "gray", "blue-white", "pink", "pink", "gray",
                        "gray", "blue-white", "pink", "pink", "gray"
                    ]
                },
                {
                    name: "Saanvi Gupta",
                    img: "assets/icons/paintbrush.png",
                    schedule: [
                        "pink-purple", "pink-white", "blue", "blue", "blue",
                        "pink-purple", "pink-white", "blue", "blue", "blue",
                        "pink-purple", "pink-white", "blue", "blue", "blue",
                        "pink-purple", "pink-white", "blue", "blue", "blue"
                    ]
                },
                {
                    name: "Tariq Khan",
                    img: "assets/icons/bolt.png",
                    schedule: [
                        "pink", "blue", "blue-white", "blue", "white",
                        "pink", "blue", "blue-white", "blue", "white",
                        "pink", "blue", "blue-white", "blue", "white",
                        "pink", "blue", "blue-white", "blue", "white"
                    ]
                },
                {
                    name: "Thabo Ndlovu",
                    img: "assets/icons/bricks.png",
                    schedule: [
                        "blue-blue", "blue", "blue", "pink", "gray",
                        "blue-blue", "blue", "blue", "pink", "gray",
                        "blue-blue", "blue", "blue", "pink", "gray",
                        "blue-blue", "blue", "blue", "pink", "gray"
                    ]
                },
                {
                    name: "Yara Saleh",
                    img: "assets/icons/plunger.png",
                    schedule: [
                        "white", "gray", "white", "pink-white", "blue",
                        "white", "gray", "white", "pink-white", "blue",
                        "white", "gray", "white", "pink-white", "blue",
                        "white", "gray", "white", "pink-white", "blue"
                    ]
                },
                {
                    name: "Zain Mailk",
                    schedule: [
                        "pink-white", "pink", "pink", "white", "blue-white",
                        "pink-white", "pink", "pink", "white", "blue-white",
                        "pink-white", "pink", "pink", "white", "blue-white",
                        "pink-white", "pink", "pink", "white", "blue-white"
                    ]
                },
            ]
        }
    }
}
createApp(app).mount("#app")