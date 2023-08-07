// let user = {}
// console.log(user?.address ?? "not found user")

// let adminUser = {
//     admin() {
//         console.log("hi admin")
//     }
// }
// adminUser.admin()

// let guestUser = {}

// guestUser.guset()
// guestUser.guest?.()

key = 'firstName'

let user = {
    firstName: 'User'
}

let user2 = {}

console.log(user2?.[key])