const express = require('express');
const app = express();


const { Sequelize, DataTypes, Op  } = require('sequelize');

const sequelize = new Sequelize('listrik', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

let PORT = 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    getPelanggan(1);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function createPelanggan(username, password, nomor_kwh, nama_pelanggan, alamat, id_tarif) {
    if (username.length < 5 || password.length < 8) {
      throw new Error('Username harus memiliki panjang minimal 5 karakter dan password minimal 8 karakter');
    }
    try {
      const query = `
        INSERT INTO pelanggan (username, password, nomor_kwh, nama_pelanggan, alamat, id_tarif)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const values = [username, password, nomor_kwh, nama_pelanggan, alamat, id_tarif];
  
      const result = await sequelize.query(query, { replacements: values });

      return result;
  
      console.log('Pelanggan created successfully.');
      console.log(result);
    } catch (error) {
      console.error('Error creating pelanggan:', error);
    }
}

async function getPelanggan(id_pelanggan) {
  if (typeof id_pelanggan !== 'number') {
    throw new Error('Id_pelanggan harus berupa bilangan bulat');
  }
  try {
    const query = 'SELECT * FROM pelanggan WHERE id_pelanggan = ?';
    const values = [id_pelanggan];

    const results = await sequelize.query(query, { replacements: values, type: sequelize.QueryTypes.SELECT });

    return results[0];

    console.log('Pelanggan retrieved successfully.');
    console.log(results);
  } catch (error) {
    console.error('Error retrieving pelanggan:', error);
  }
}

async function updatePelanggan(id_pelanggan, username, password, nomor_kwh, nama_pelanggan, alamat, id_tarif) {
    if (typeof id_pelanggan !== 'number') {
      throw new Error('Id_pelanggan harus berupa bilangan bulat');
    }
    try {
      const query = `
        UPDATE pelanggan
        SET username = ?, password = ?, nomor_kwh = ?, nama_pelanggan = ?, alamat = ?, id_tarif = ?
        WHERE id_pelanggan = ?
      `;
      const values = [username, password, nomor_kwh, nama_pelanggan, alamat, id_tarif, id_pelanggan];
  
      const result = await sequelize.query(query, { replacements: values });
  
      console.log('Pelanggan updated successfully.');
      console.log(result);
    } catch (error) {
      console.error('Error updating pelanggan:', error);
    }
}

async function deletePelanggan(id_pelanggan) {
    try {
      const query = 'DELETE FROM pelanggan WHERE id_pelanggan = ?';
      const values = [id_pelanggan];
  
      const result = await sequelize.query(query, { replacements: values });
  
      console.log('Pelanggan deleted successfully.');
      console.log(result);
    } catch (error) {
      console.error('Error deleting pelanggan:', error);
    }
}

async function security() {
  const results = await sequelize.query("SELECT * FROM pelanggan", {
    replacements: { id: 1 },
    type: sequelize.QueryTypes.SELECT
  });
  console.log(results);
}

async function queryDatabase() {
  try {
    console.time('Time taken'); // Start the timer

    const results = await sequelize.query("SELECT * FROM pelanggan");

    console.timeEnd('Time taken'); // End the timer

    console.log('Data retrieved successfully.');

    const memoryUsage = process.memoryUsage();
    console.log('Memory usage:', memoryUsage);
  } catch (error) {
    console.error('Error querying the database:', error);
  }
}


async function createDummyUsers() {
  try {
      await sequelize.query('DELETE FROM pelanggan');
    for (let i = 1; i <= 10000; i++) {
      const username = `user${i}`;
      const password = `password${i}`;
      const nomor_kwh = `kwh${i}`;
      const nama_pelanggan = `Pelanggan ${i}`;
      const alamat = `Alamat ${i}`;
      const id_tarif = Math.floor(Math.random() * 10) + 1; 

      await sequelize.query(`
        INSERT INTO pelanggan (id_pelanggan, username, password, nomor_kwh, nama_pelanggan, alamat, id_tarif)
        VALUES (${i}, '${username}', '${password}', '${nomor_kwh}', '${nama_pelanggan}', '${alamat}', ${id_tarif})
      `);
    }
    console.log('Dummy users created successfully.');
  } catch (error) {
    console.error('Error creating dummy users:', error);
  }
}
  
  

start();

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

module.exports = {
  createPelanggan,
  getPelanggan,
  updatePelanggan,
  deletePelanggan,
  security,
  queryDatabase,
  createDummyUsers
  
};


