export default {
    getUsers
}


const users = [
    {
      "name": "Ochoa Hyde",
      "coins": 100,
      "moves": []
    },
    {
      "name": "Hallie Mclean",
      "coins": 57,
      "moves": []
    }
]

function getUsers (filterBy = null) {  
    return new Promise((resolve, reject) => { 
      var usersToReturn = users[0];
      resolve(usersToReturn)
    })
  }
