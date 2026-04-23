<template>
  <div class="app-wrapper">
    <header class="header">
      <div class="left-nav">
        <img src="/src/assets/logo.svg" alt="Svenssons" class="logo" />
        <div class="filter-group">
          <div class="select-wrapper">
            <span>Yrkesroller</span>
            <select>
              <option>Alla</option>
              <option v-for="role in store.roles" :key="role.id">{{ role.name }}</option>
            </select>
          </div>
          <div class="select-wrapper">
            <span>Tillgänglighet</span>
            <select>
              <option>Alla</option>
              <option v-for="type in store.availabilityTypes" :key="type">{{ type }}</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="right-nav">
        <div class="search-bar">
          <input type="text" placeholder="Sök..." />
          <div class="search-icon-placeholder"></div>
        </div>
        <div class="week-picker">
          <button>&lt;</button>
          <span>Vecka 1-4</span>
          <button>&gt;</button>
        </div>
      </div>
    </header>

    <div class="grid-container">
      <table>
        <thead>
          <tr class="week-header">
            <th class="worker-column-header">Hantverkare</th>
            <th colspan="5">Vecka 1</th>
            <th colspan="5">Vecka 2</th>
            <th colspan="5">Vecka 3</th>
            <th colspan="5">Vecka 4</th>
          </tr>
          <tr class="day-header">
            <th class="worker-column-header"></th>
            <th v-for="n in 20" :key="n" class="day-col">{{ ['M', 'T', 'O', 'T', 'F'][(n - 1) % 5] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="worker in store.workers" :key="worker.id">
            <td class="worker-name-cell">
              <span class="name-text">{{ worker.name }}</span>
              <div class="worker-icons">
                <div v-for="roleId in worker.roles" :key="roleId" :class="['role-icon-placeholder', roleId]"></div>
              </div>
            </td>
            <td v-for="d in 20" :key="d" :class="['day-cell', getRandomStatusClass()]"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <footer class="legend">
      <div class="legend-section">
        <strong>Tillgänglighet:</strong>
        <div class="legend-item"><div class="box white"></div> Ledig</div>
        <div class="legend-item"><div class="box b50"></div> Bokad 50%</div>
        <div class="legend-item"><div class="box b100"></div> Bokad 100%</div>
        <div class="legend-item"><div class="box p50"></div> Preliminär 50%</div>
        <div class="legend-item"><div class="box p100"></div> Preliminär 100%</div>
        <div class="legend-item"><div class="box frav"></div> Frånvaro</div>
      </div>
      <div class="legend-section yrkesroller-legend">
        <strong>Yrkesroller:</strong>
        <div class="legend-item" v-for="role in store.roles" :key="role.id">
          <div :class="['role-icon-placeholder', role.id]"></div> {{ role.name }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useBookingStore } from '../stores/bookingStore'
const store = useBookingStore()

const getRandomStatusClass = () => {
  const classes = ['', 'b50', 'b100', 'p50', 'p100', 'frav']
  return classes[Math.floor(Math.random() * classes.length)]
}
</script>

<style scoped>
.app-wrapper { padding: 20px; color: #333; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.left-nav, .filter-group { display: flex; align-items: center; gap: 40px; }
.select-wrapper { display: flex; flex-direction: column; font-size: 11px; font-weight: bold; color: #666; }
.select-wrapper select { padding: 6px; border-radius: 4px; border: 1px solid #ccc; min-width: 140px; margin-top: 4px; background-color: #fff; }

.search-bar { position: relative; display: inline-block; }
.search-bar input { border-radius: 20px; border: 1px solid #ccc; padding: 8px 40px 8px 15px; width: 250px; }
.search-icon-placeholder { position: absolute; right: 12px; top: 8px; width: 20px; height: 20px; border: 1px dashed #ccc; background-color: #f9f9f9; border-radius: 4px; }

.week-picker { display: flex; align-items: center; gap: 10px; margin-left: 20px; font-weight: bold; font-size: 14px; }
.week-picker button { border-radius: 50%; width: 24px; height: 24px; border: none; background: #e2e8f0; cursor: pointer; display: flex; align-items: center; justify-content: center; }

.grid-container { border: 1px solid #ccc; overflow-x: auto; border-radius: 4px; background: #fff; width: 100%; }
table { width: 100%; border-collapse: collapse; table-layout: fixed; }

/* Kolumninställningar */
.worker-column-header, .worker-name-cell { width: 250px; text-align: left; padding: 0 10px; border: 1px solid #ccc; }
.day-col, .day-cell { width: 40px; border: 1px solid #ccc; text-align: center; }

.week-header th { font-size: 12px; background: #f8f8f8; color: #888; padding: 5px 0; }
.day-header th { font-size: 11px; color: #444; height: 25px; }

.worker-name-cell { display: flex; justify-content: space-between; align-items: center; height: 35px; }
.name-text { font-size: 13px; font-weight: 600; color: #555; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.role-icon-placeholder { width: 18px; height: 18px; border: 1px solid #ddd; background-color: #f9f9f9; border-radius: 3px; }
.worker-icons { display: flex; gap: 4px; }

.b50 { background-color: #7ba8bc; }
.b100 { background-color: #558396; }
.p50 { background-color: #e2c0e2; }
.p100 { background-color: #c496c4; }
.frav { background-color: #9fa6a8; }

.legend { margin-top: 40px; display: flex; flex-direction: column; gap: 20px; font-size: 12px; color: #444; border-top: 1px solid #eee; padding-top: 20px; }
.legend-section { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
.yrkesroller-legend { margin-top: 5px; }
.legend-item { display: flex; align-items: center; gap: 8px; }
.box { width: 35px; height: 18px; border: 1px solid #ccc; }
.white { background: #fff; }
</style>