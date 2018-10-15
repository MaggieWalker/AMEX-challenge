const {db} = require('./server/db')
const {green, red} = require('chalk')
const Campuses = require('./server/db/campuses')



const seed = async () => {
  await db.sync({force: true})
  
  // seed your database here!
  
  console.log(green('Seeding success!'))
  db.close()
}

seed()
.catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
  

  
  
  // const campuses = [{
  //   name: 'Maggie Walker HS',
  //   address: '316 Tompkins',
  //   description: 'A really great school!!'
  // }]
  
  // const seed = () => {
  //   // seed your database here!
  //   Promise.all(campuses.map(campus =>
  //     Campuses.create(campus)))
      
  //     // console.log(green('Seeding success!'))
  //     // db.close()
  //   }
    
    // const main = () => {
      //   console.log('Syncing db...');
      //   db.sync({force: true})
      //     .then(() => {
        //       console.log('Seeding database...');
        //       return seed();
//     })
//     .catch(err => {
//       console.error(red('Oh noes! Something went wrong while seeing!'))
//       console.error(err)
//     })
//       .then(() => {
//         db.close()
//         return null; //why??
//       })
//   };

//   main();
