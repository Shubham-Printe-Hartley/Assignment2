export const COLUMNS = [
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
    Cell: ({cell: {value}}) => (
      // background colour can be manipulated here
      <div onClick={() => showPopUp(value)} className=""> 
        {value}
      </div>
    )
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
      <img src={value} width={60} alt="img" />
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

const showPopUp = (value) => {
  console.log(value);
}