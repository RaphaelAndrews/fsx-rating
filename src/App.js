import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new

const getData = () => {
  const data = require('./name.json');
  return [...data]
}

function App() {

  const columns = React.useMemo(() => [
    {
      Header: "Posição",
      accessor: 'position',
    },
    {
      Header: "Nome",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      title: "title",
    },
    {
      Header: "Blitz",
      accessor: 'blitz',
    },
    {
      Header: "Rápido",
      accessor: 'rapid',
    },
    {
      Header: "Pensado",
      accessor: 'pensado',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-400">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Federação Sergipana de Xadrez - Rating Junho</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
