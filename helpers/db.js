import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('numbers.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS numbers (id INTEGER PRIMARY KEY NOT NULL, min INTEGER NOT NULL, max INTEGER NOT NULL, amount INTEGER NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertNumbers = (min, max, amount) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO numbers (min, max, amount) VALUES ( ?, ?, ? )',
            [min, max, amount],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
}

export const fetchNumbers = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM numbers',
            [],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
}

export const removeNumbers = (numbersId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'DELETE FROM numbers WHERE id=?',
            [numbersId],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              throw err;
            }
          );
        });
      });
      return promise;
}