export const headerComponent = {
    template: `
                <img src="assets/icons/logo.png" class="logo" alt="Svennsons hantverk AB">
                <img src="assets/icons/user.png" class="user" alt="Säljare">
                <img src="assets/icons/cog.png" class="cog" alt="Inställningar">

                <div class="top-bar">
                    <label for="job">Yrkesroller
                        <select id="job" name="job" class="dropdown">
                            <option value="all">Alla</option>
                            <option value="carpenter">Snickare</option>
                            <option value="electrician">Elektriker</option>
                            <option value="painter">Målare</option>
                            <option value="bricker">Murare</option>
                            <option value="plumber">Rörmokare</option>
                        </select>
                    </label>

                    <label for="availability">Tillgänglighet
                        <select id="availability" name="availability" class="dropdown">
                            <option value="all">Alla</option>
                            <option value="free">Ledig</option>
                            <option value="50%">Bokad 50%</option>
                            <option value="100%">Bokad 100%</option>
                            <option value="p50%">Preliminär 50%</option>
                            <option value="p100%">Preliminär 100%</option>
                            <option value="absent">Frånvaro</option>
                        </select>
                    </label>

                    <div class="search-wrapper">
                        <input type="text" class="search-bar">
                        <img src="assets/icons/search.png" class="search-icon" alt="sök">
                    </div>
                </div>

                <div class="week-selection">
                    <button class="little-button">&lt;</button>
                    <p>Vecka 1-4</p>
                    <button class="little-button">></button>
                </div>
            `
}