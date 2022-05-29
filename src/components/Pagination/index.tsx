import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: any;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      pageRangeDisplayed={4}
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageCount={3}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  );
};

export { Pagination };
