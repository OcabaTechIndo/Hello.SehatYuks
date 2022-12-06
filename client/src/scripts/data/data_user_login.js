// import { openDB } from 'idb';
// import GLOBAL_VAR from '../globals/golbalVariabel';

// const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = GLOBAL_VAR;

// const promisDb = openDB(DATABASE_NAME, DATABASE_VERSION, {
//     upgrade(database) {
//         database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
//     },
// });


// const UserLoginIdb = {
//     async getUserById(id) {
//         return (await promisDb).get(OBJECT_STORE_NAME, id);
//     }
// }