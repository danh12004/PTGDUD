import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    name: "Elizabeth Lee",
    company: "AvatarSystems",
    order: "$359",
    date: "10/07/2023",
    status: "New",
    avatar: "./public/Avatar.png",
    img: "./public/create.png",
  },
  {
    id: 2,
    name: "Carlos Garcia",
    company: "SmoozeShift",
    order: "$747",
    date: "24/07/2023",
    status: "New",
    avatar: "./public/Avatar (1).png",
    img: "./public/create.png",
  },
  {
    id: 3,
    name: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    order: "$564",
    date: "08/08/2023",
    status: "In-progress",
    avatar: "./public/Avatar (2).png",
    img: "./public/create.png",
  },
  {
    id: 4,
    name: "Ryan Brown",
    company: "OmniTech Corporation",
    order: "$541",
    date: "31/08/2023",
    status: "In-progress",
    avatar: "./public/Avatar (3).png",
    img: "./public/create.png",
  },
  {
    id: 5,
    name: "Ryan Young",
    company: "DataStream Inc.",
    order: "$769",
    date: "01/05/2023",
    status: "Completed",
    avatar: "./public/Avatar (4).png",
    img: "./public/create.png",
  },
  {
    id: 6,
    name: "Hailey Adams",
    company: "FlowRush",
    order: "$922",
    date: "10/06/2023",
    status: "Completed",
    avatar: "./public/Avatar (5).png",
    img: "./public/create.png",
  },
];

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
        <img
          src={row.avatar}
          alt={row.name}
          className="w-8 h-8 rounded-full"
        />
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
  }
];

export default function Footer() {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <img src="./public/File text 1.png" alt="icon" />
        <p className="text-lg font-bold">Detailed report</p>
      </div>

      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
}
