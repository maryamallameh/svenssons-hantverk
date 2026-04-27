export const rowComponent = {
    props: ['name', 'img', 'schedule'],
    template: `
                <tr>
                    <th class="name">
                        {{ name }}
                         <span class="icons">
                         <img v-for="(icon, i) in img" :key="i" :src="icon">
                           </span>
                    </th>

                    <td
                        v-for="(square, i) in schedule"
                        :key="i"
                        :class="square">
                    </td>
                </tr>
            `
}