import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
// console.error('putDb not implemented');
try {
  const jateDB = await openDB('jate', 1);
  const transaction = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({jate: content});
  const result = await request;
  console.log('Data was saved'+ result);
  }catch(error) {console.error('putDb not implemented')}
}


export const getDb = async () => {
try {
  const jateDB = await opwnDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const effect = await request;
  console.log(effect);
  
}catch (err) {
  console.err('getDb not implemented')
  }
};

initdb();
