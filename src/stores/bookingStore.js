import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    roles: [
      { id: 'carpenter', name: 'Snickare' },
      { id: 'electrician', name: 'Elektriker' },
      { id: 'painter', name: 'Målare' },
      { id: 'mason', name: 'Murare' },
      { id: 'plumber', name: 'Rörmokare' }
    ],
    availabilityTypes: [
      'Ledig', 
      'Bokad 50%', 
      'Bokad 100%', 
      'Preliminär 50%', 
      'Preliminär 100%', 
      'Frånvaro'
    ],
    workers: [
      { id: 1, name: 'Aiko Tanaka', roles: ['painter'] },
      { id: 2, name: 'Amina Hassan', roles: ['electrician'] },
      { id: 3, name: 'Amara Okafor', roles: ['painter'] },
      { id: 4, name: 'Anouk Dubois', roles: ['painter'] },
      { id: 5, name: 'Arjun Patel', roles: ['plumber'] },
      { id: 6, name: 'Björn Andersson', roles: ['mason'] },
      { id: 7, name: 'Chen Wei', roles: ['painter', 'carpenter'] },
      { id: 8, name: 'Diego Martínez', roles: ['plumber', 'electrician'] },
      { id: 9, name: 'Elena Rossi', roles: ['plumber'] },
      { id: 10, name: 'Fatima Al-Farsi', roles: ['electrician'] },
      { id: 11, name: 'Freja Nielsen', roles: ['electrician'] },
      { id: 12, name: 'Ivan Petrov', roles: ['electrician'] },
      { id: 13, name: 'Joon Park', roles: ['carpenter'] },
      { id: 14, name: 'Kwame Mensah', roles: ['mason', 'carpenter'] },
      { id: 15, name: 'Lars Johansson', roles: ['plumber'] },
      { id: 16, name: 'Leila Haddad', roles: ['mason'] },
      { id: 17, name: 'Luca Bianchi', roles: ['mason'] },
      { id: 18, name: 'Mateo García', roles: ['carpenter'] },
      { id: 19, name: 'Mei Lin', roles: ['painter'] },
      { id: 20, name: 'Mila Ivanova', roles: ['painter'] },
      { id: 21, name: 'Noah Cohen', roles: ['carpenter'] },
      { id: 22, name: 'Omar Rahman', roles: ['carpenter'] },
      { id: 23, name: 'Priya Sharma', roles: ['mason'] },
      { id: 24, name: 'Saanvi Gupta', roles: ['painter'] },
      { id: 25, name: 'Tariq Khan', roles: ['electrician'] },
      { id: 26, name: 'Thabo Ndlovu', roles: ['mason'] },
      { id: 27, name: 'Yara Saleh', roles: ['plumber'] },
      { id: 28, name: 'Zain Malik', roles: ['carpenter', 'electrician'] }
    ]
  })
})