import { useState } from 'react'

function usePagination(itemsPerPage,totalItems,residents) {
    const [page, setPage] = useState(1)

    const maxPage = Math.ceil(totalItems / itemsPerPage)

    const onPrev = () => {
        if (page > 1) {
          setPage(page - 1)
        }
      }

      const onNext = () => {
        if (page < maxPage) {
          setPage(page + 1)
        }
      }

      const itemBtn = []

      for (let i = 1; i <= maxPage; i++) {
        itemBtn.push(i)
      }

      const currentPageItems = residents ? residents?.slice((page - 1) * itemsPerPage, page * itemsPerPage) : []


      const onClickPage = (newPage) => {
        setPage(newPage)
      }

    return (
       [page,maxPage,onPrev, onNext, currentPageItems, itemBtn, onClickPage]
    )
}

export default usePagination
