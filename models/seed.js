require('dotenv').config()

const db = require('./db')
const Lego = require('./lego')

const starterLegos = [
  {
    name: 'pickle', set: 'pickle', comment: 'pickle'
  }
]

Lego.deleteMany({})
    .then(() => {
      Lego.create(starterLegos)
        .then((createdLegos) => {
            console.log('created legos:', createdLegos)
            db.close()
        })
        .catch(err => {
            console.log(err)
            db.close()
        })  
    }).catch(err => {
        console.log(err)
        db.close()
    })