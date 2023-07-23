const { createPelanggan, getPelanggan } = require('./index.js');

  // Menjalankan fungsi createPelanggan
  it('createPelanggan should create a new pelanggan', async () => {
    const expected = {
      alamat: 'Alamat 1',
      id_pelanggan: 1,
      id_tarif: 1,
      nama_pelanggan: 'Pelanggan 1',
      nomor_kwh: 'kwh1',
      password: 'password1',
      username: 'user1',
    };
  
    const result = await createPelanggan(
      expected.username,
      expected.password,
      expected.nomor_kwh,
      expected.nama_pelanggan,
      expected.alamat,
      expected.id_tarif
    );
  
    expect(result).toEqual(expected);
  });
  
  

test('getPelanggan should retrieve the correct pelanggan', async () => {
  const result = await getPelanggan(1);

  // Memastikan data pelanggan yang diambil sesuai dengan yang diharapkan
  expect(result).toEqual({
    id_pelanggan: 1,
    username: 'user1',
    password: 'password1',
    nomor_kwh: 'kwh1',
    nama_pelanggan: 'Pelanggan 1',
    alamat: 'Alamat 1',
    id_tarif: 1
  });
});
