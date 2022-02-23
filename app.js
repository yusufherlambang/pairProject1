// sequelize model:generate --name User --attributes email:string,password:string

// sequelize model:generate --name Profile --attributes name:string,address:string,UserId:integer

// sequelize model:generate --name ShoppingCart --attributes item:string,quantity:string,totalPrice:integer

// sequelize migration:generate --name add-UserId-to-ShoppingCart

// sequelize model:generate --name Apparel --attributes name:string,style:string,stock:integer,price:integer,picture:string,ShoppingCartId:integer

// sequelize db:migrate

// nested eager loading
// const users = await User.findAll({
//   include: {
//     model: Tool,
//     as: 'Instruments',
//     include: {
//       model: Teacher,
//       include: [ /* etc */ ]
//     }
//   }
// });

// console.log('cek')

const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('kakakak')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})