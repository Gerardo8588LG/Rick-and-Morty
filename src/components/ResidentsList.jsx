import React from 'react'
import ResidentCard from './ResidentCard'
import usePagination from '../hooks/usePagination'
import { useEffect } from 'react'
import '../assets/styles/ResidentsList.css'

function ResidentsList({ residents,  resetPage, setResetPage}) {
  const totalItems = residents ? residents.length : 0
  const itemsPerPage = 8

  const [page, maxPage, onPrev, onNext, currentPageItems, itemBtn, onClickPage] = usePagination(itemsPerPage, totalItems, residents)

  useEffect(() => {
    if (resetPage) {
      onClickPage(1)
      setResetPage(false)
    }
  }, [resetPage, onClickPage, setResetPage])



  return (
    <>

      <div className='cards'>
        {residents.length > 0 ? (
          currentPageItems?.map(resident => {
            const residenteSplit = resident.split('/')
            const id = residenteSplit[residenteSplit.length - 1]
            return <ResidentCard key={id} url={resident}/>
          })
        ) : (
          <div className='cards__page'>No records founded, try again</div>
        )}
      </div>
      <br />
      <div className='cards__pagination'>
        <button onClick={() => onClickPage(1)} disabled={page === 1} className='cards__btn'>{'First'}</button>
        <button onClick={onPrev} disabled={page === 1} className='cards__btn'>{'<'}</button>
        {itemBtn.map((item, index) => (
          <button key={index} onClick={() => onClickPage(item)} disabled={page === item} className='cards__btn'>
            {item}
          </button>
        ))}
        <button onClick={onNext} disabled={page === maxPage} className='cards__btn'>{'>'}</button>
        <button onClick={() => onClickPage(maxPage)} disabled={page === maxPage} className='cards__btn'>{'Last'}</button>
        <p className='cards__page'>{page} / {maxPage}</p>
      </div>

    </>
  )
}

export default ResidentsList
