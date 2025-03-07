import { useEffect, useState } from 'react'
import { getData } from '@/api/jsonServerAPI'
import SimpsonCard from '@/components/simpsons/SimpsonCard'
import SimpsonDrawer from '@/components/simpsons/SimpsonDrawer'
import Pagination from '@/components/Pagination'
import type { Simpson } from '@/interfaces/simpson.interface'

export default function Simpsons() {
  const [characters, setCharacters] = useState<Simpson[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState<Simpson | null>(
    null
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState({
    first: 1,
    prev: null,
    next: null,
    last: 1,
    pages: 1,
    items: 0
  })
  const perPage = 8

  useEffect(() => {
    async function getSimpsons() {
      const data = await getData(
        `simpsons?_page=${currentPage}&_per_page=${perPage}`
      )
      setCharacters(data.data)
      setPagination(data)
    }

    getSimpsons()
  }, [currentPage])

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Lista de personajes
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {characters.map((character: Simpson) => (
          <SimpsonCard
            character={character}
            key={character._id}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </div>
      <SimpsonDrawer
        character={selectedCharacter}
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
      <Pagination
        currentPage={currentPage}
        pagination={pagination}
        onPageChange={setCurrentPage}
      />
    </>
  )
}
