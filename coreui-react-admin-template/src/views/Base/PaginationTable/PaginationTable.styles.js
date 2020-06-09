import styled from 'styled-components';
import { Pagination } from 'reactstrap';

export const PaginationCenter = styled(Pagination)`
    & > ul{
        justify-content: center !important;
    }
`;
