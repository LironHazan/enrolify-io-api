// const axios = require('axios');

// axios({
//   url: 'http://localhost:3000/graphql',
//   method: 'post',
//   data: {
//     query: `
//       query PostsForAuthor {
//         author(id: 1) {
//           firstName
//             posts {
//               title
//               votes
//             }
//           }
//         }
//       `
//   }
// }).then((result) => {
//   console.log(result.data)
// });