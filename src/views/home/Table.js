import React, {useMemo, useState, useEffect} from 'react'
import { useTable, usePagination, useExpanded } from 'react-table'
import MockData from '../../assets/Assignment2_MOCK_DATA.json';
import {PopUp} from '../../components/tableEditors/popUp';

export const Table = ({mockData, setMockData}) => {

  // Pop-up to change code
  const [showPopUp, setShowPopUp] = useState(false);
  const closeModal = () => {
    setShowPopUp(false);
  }
  const openModal = () => {
    setShowPopUp(true);
  }
  // opening modal from button click
  const handlePopUp = (row, column, value) => {
    setStatusData({
      rowIndex: row.index,
      columnId: column.id,
      value: value
    });
    openModal();
  }

  

  // custom cell for updating status values
  const customCell = ({
    value,
    row,
    column,
    updateStatus // custom function to update status
  }) => {
    return (
      <button onClick={() => handlePopUp(row, column, value)} className=""> 
        {value}
      </button>
    )
  }

  //initializing tableData state 
  const [tableData, setTableData] = useState(MockData);
  const [render, setRender] = useState(true);
  // maintianing state to grab row data
  const [statusData, setStatusData] = useState({
    rowIndex: '',
    columnId: "",
    value: ""
  });

  // defining status updating function
  const updateStatus = (rowIndex, columnId, value) => {
    // console.log(rowIndex, columnId, value);
    setRender(false); // seting render to false before data update

    setTableData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    );
    setRender(true); // setting render to true after data has been updated
  }

  // re-rendering the table if data gets changed
  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  // defining columns
  const COLUMNS = [
    // {
    //   Header: () => null,
    //   id: 'expander',
    //   Cell: ({row}) => {
    //     <span {...row.getToggleRowExpandedProps()}>
    //         {row.isExpanded ? 'v' : '>'}
    //       </span>
    //   }
    // },
    {
      Header: 'Client ID',
      Footer: 'Client ID',
      accessor: 'Client ID',
    },
    {
      Header: 'Lead Name',
      Footer: 'Lead Name',
      accessor: 'Lead Name',
    },
    {
      Header: 'Campaign Name',
      Footer: 'Campaign Name',
      accessor: 'Campaign Name',
    },
    {
      Header: 'Interest Level',
      Footer: 'Interest Level',
      accessor: 'Interest Level',
    },
    {
      Header: 'Status',
      Footer: 'Status',
      accessor: 'Status',
      minWidth: 100,
      maxWidth: 100,
      Cell: customCell
    },
    {
      Header: 'Lead Source',
      Footer: 'Lead Source',
      accessor: 'Lead Source',
    },
    {
      Header: 'Opener',
      Footer: 'Opener',
      accessor: 'Opener',
      minWidth: 70,
      maxWidth: 70,
      Cell: ({cell:{value}}) => (
        <div>
          <img src={value} width={60} alt="img" />
        </div>
      )
    },
    {
      Header: 'C2C',
      Footer: 'C2C',
      accessor: 'C2C',
    },
    {
      Header: 'FICO',
      Footer: 'FICO',
      accessor: 'FICO',
    },
    {
      Header: 'Contact',
      Footer: 'Contact',
      accessor: 'Contact',
    },
    {
      Header: 'Verified',
      Footer: 'Verified',
      accessor: 'Verified',
    },
    {
      Header: 'Total Debt',
      Footer: 'Total Debt',
      accessor: 'Total Debt',
    },
    {
      Header: 'CC Debt',
      Footer: 'CC Debt',
      accessor: 'CC Debt',
    },
  ];

  // fetching columns and data files
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, []);
 
  // using useTable hook to get destructured values of a table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
  } = useTable({columns, data, updateStatus}, useExpanded, usePagination);
  const {pageIndex} = state;

  return (
    <>
      {showPopUp && <PopUp updateStatus={updateStatus} statusData={statusData} setStatusData={setStatusData} closeModal={closeModal} />}
      <div className="text-right">
        <span >
          Page {' '}
          <strong>
            {pageIndex+1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button disabled={!canPreviousPage} className="" onClick={() => previousPage()} >{'< '}</button>
        <button disabled={!canNextPage} className="" onClick={() => nextPage()} >{' >'}</button>
      </div>
      {render
      ?<table className="table table-hover table-bordered table-light" {...getTableProps()}>
        <thead className="text-center" >
          {
            headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>

        <tbody {...getTableBodyProps()}>
          {
            page.map((row, i) => {
              prepareRow(row)
              return(
                <>
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map(cell => {
                        console.log(cell)
                        return (
                          <td className="table-info" {...cell.getCellProps()}>
                            {
                              cell.render('Cell')
                            }
                          </td>
                        )
                      })
                    }           
                  </tr>
                  {/* {row.isExpanded
                    ?<tr {...row.getRowProps()}>
                    {
                      row.cells.map(cell => {
                        return (
                          <td className="table-info" {...cell.getCellProps()}>
                            {
                              cell.render('Cell')
                            }
                          </td>
                        )
                      })
                    }           
                  </tr>
                  :null
                  } */}
                </>
              )
            })
          }
        </tbody>
      </table>
      :console.log("here")
      }
    </>
  )
}
