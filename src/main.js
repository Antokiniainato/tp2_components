import './assets/css/app.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/icons.min.css'
import './assets/js/bootstrap.bundle.min'

import { createApp } from 'vue'
import App from './App.vue'

const tableName = 'data';

function loadTableData() {
    const tableData = localStorage.getItem(tableName);
    let maxId = 0; // Initialize maxId
  
    if (tableData) {
      const parsedData = JSON.parse(tableData);
      maxId = Math.max(...parsedData.map(item => item.id)); // Find maximum ID
      return parsedData;
    } else {
      return fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          maxId = Math.max(...data.map(item => item.id)); // Find maximum ID
          const filteredData = data.map(item => ({
            id: item.id,
            name: item.name,
            devise: item.devise,
            email: item.email
          }));
          localStorage.setItem(tableName, JSON.stringify(filteredData));
          localStorage.setItem('maxId', maxId); // Store maxId in local storage
          return filteredData;
        })
        .catch(error => {
          console.error('Error importing JSON data:', error);
        });
    }
}
  
const tableData = loadTableData();

createApp(App, { tableData }).mount('#app')