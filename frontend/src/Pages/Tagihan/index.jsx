import React from 'react'
import SideBar from '../../Components/SideBar'
import Table from 'react-bootstrap/Table';
import './Tagihan.css'

const data = [
  {
    id: 1,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'april',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 2,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'mei',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 3,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'juni',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 4,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'juli',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 5,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'agustus',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 6,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'september',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 7,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'oktober',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 8,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'november',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 9,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'desember',
    tahun: 2021,
    jumlah_meter: 1000,
    status: 'lunas'
  },
  {
    id: 10,
    id_penggunaan: 21321314,
    id_pelanggan: 4423232,
    bulan: 'januari',
    tahun: 2022,
    jumlah_meter: 1000,
    status: 'lunas'
  },

]

function Tagihan() {
  return (
    <>
      <div className='tagihan__container'>
        <SideBar />
        <div className='tagihan__content'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Number</th>
                <th>id_penggunaan</th>
                <th>id_pelanggan</th>
                <th>bulan</th>
                <th>tahun</th>
                <th>jumlah_meter</th>
                <th>status</th>
              </tr>
            </thead>
            {
              data.map((item, index) => {
                return (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.id_penggunaan}</td>
                      <td>{item.id_pelanggan}</td>
                      <td>{item.bulan}</td>
                      <td>{item.tahun}</td>
                      <td>{item.jumlah_meter}</td>
                      <td>{item.status}</td>
                    </tr>
                  </tbody>
                )
              })
            }
          </Table>
        </div>
      </div>
    </>
  )
}

export default Tagihan