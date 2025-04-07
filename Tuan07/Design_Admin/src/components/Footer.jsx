import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const getStatusClass = (status) => {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-600";
    case "In-progress":
      return "bg-yellow-100 text-yellow-600";
    case "Completed":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const columns = [
  {
    name: "",
    cell: () => <input type="checkbox" />,
    width: "60px",
  },
  {
    name: "CUSTOMER NAME",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => (
      <div className="flex items-center space-x-2">
        <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full" />
        <span className="font-semibold">{row.name}</span>
      </div>
    ),
  },
  {
    name: "COMPANY",
    selector: (row) => row.company,
    sortable: true,
  },
  {
    name: "ORDER VALUE",
    selector: (row) => row.order,
    sortable: true,
  },
  {
    name: "ORDER DATE",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "STATUS",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
          row.status
        )}`}
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "",
    cell: (row) => (
      <img
        src={row.img}
        alt="edit"
        className="w-4 h-4 cursor-pointer hover:opacity-75"
      />
    ),
    width: "60px",
  },
];

export default function Footer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/e01d737d-4866-48ca-a289-c630ddf44ce3")
      .then((res) => res.json()) 
      .then((data) => setCards(data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);
  

  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <img src="./public/File text 1.png" alt="icon" />
        <p className="text-lg font-bold">Detailed report</p>
      </div>

      <DataTable
        columns={columns}
        data={cards}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
}
