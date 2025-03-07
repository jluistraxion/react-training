import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

interface Props {
  currentPage: number
  pagination: {
    first: number
    prev: number | null
    next: number | null
    last: number
    pages: number
    items: number
  }
  onPageChange: (page: number) => void
}

export default function PaginationComponent({
  currentPage,
  pagination,
  onPageChange
}: Props) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={pagination.prev ? 'cursor-pointer' : 'cursor-not-allowed'}
        >
          <PaginationPrevious
            onClick={() => pagination.prev && onPageChange(pagination.prev)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem
          className={pagination.next ? 'cursor-pointer' : 'cursor-not-allowed'}
        >
          <PaginationNext
            onClick={() => pagination.next && onPageChange(pagination.next)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
