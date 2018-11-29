const axios = require('axios');

axios({
  url: 'http://localhost:3000/graphql',
  method: 'post',
  data: {
    query: `
      query RootTeachersQuery {
        all() {
          }
        }
      `
  }
}).then((result) => {
  console.log(result.data)
});