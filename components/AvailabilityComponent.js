export const availabilityComponent = {
    template: `
                <div class="availability">
                    <p><u>Tillgänglighet:</u></p>
                    <div class="availability-type">
                        <div class="availability-color-box" id="free"></div>
                        <p class="availability-description">Ledig</p>
                    </div>
                    <div class="availability-type">
                        <div class="availability-color-box" id="booked-50"></div>
                        <p class="availability-description">Bokad 50%</p>
                    </div>
                    <div class="availability-type">
                        <div class="availability-color-box" id="booked-50-50"></div>
                        <p class="availability-description">Bokad 50% / 50%</p>
                    </div>
                    <div class="availability-type">
                        <div class="availability-color-box" id="booked-100"></div>
                        <p class="availability-description">Bokad 100%</p>
                    </div>
                    <div class="availability-type">
                        <div class="availability-color-box" id="preli-50"></div>
                        <p class="availability-description">Preli bokad 50%</p>
                    </div>
                    <div class="availability-type">
                        <div class="availability-color-box" id="preli-50-50"></div>
                        <p class="availability-description">Preli bokad 50% / 50%</p>
                    </div>
                    <div class="availability-type">
                        <div class="availability-color-box" id="preli-100"></div>
                        <p class="availability-description">Preli bokad 100%</p>
                    </div>
                    <div class="availability-type">
                        <div class="availability-color-box" id="absence"></div>
                        <p class="availability-description">Frånvaro</p>
                    </div>
                </div>
            `
}