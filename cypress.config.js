const { defineConfig } = require("cypress");
const { Client } = require('pg')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        async connectDB(){
          const client = new Client({
            user: "u168183796_qawonderuser",
            password: "1gvyfx6#Q",
            host: "45.87.83.5",
            database: "wonderworld_qa",
            ssl: false,
            port: 3306
          })
          await client.connect()
          const res = await client.query('SELECT NOW()')
          await client.end()
          return res.rows;
        }
      })
    },
  },
});