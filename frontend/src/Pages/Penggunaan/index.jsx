import React from 'react'
import SideBar from '../../Components/SideBar'
import './Penggunaan.css'
import SimpleCard from '../../Components/Card/SimpleCard'
import SimpleChart from '../../Components/Chart/SimpleChart'
function Penggunaan() {
  return (
    <>
      <div className='penggunaan__container'>
        <SideBar />
        <div className='penggunaan__content'>
          <div className='penggunaan__content--info'>
            <SimpleCard 
              title='Id_pelanggan'
              value='3129439134710'
              color='#3277a8'
            />

          </div>
          <div className="penggunaan__content--graph">
            <SimpleChart />
            <SimpleChart />
            
          </div>
          <div className="penggunaan__content--meter">
            <SimpleCard
              title='meteran_awal'
              value='500wat'
              color='#3277a8'
            />
            <SimpleCard
              title='Meteran'
              value='1kwh'
              color='#3277a8'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Penggunaan