import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // Using Lucide icon for the Delete button
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Mock Data based on your screenshot
const usersData = [
  {
    id: 1,
    firstName: "chetan",
    middleName: "pravinbhai",
    lastName: "soni",
    email: "soni@gmail.com",
    address: "tirupati metro mall near shahbaugh society",
    contactNo: "9898989898",
  },
  {
    id: 2,
    firstName: "ravi",
    middleName: "radhe",
    lastName: "soni",
    email: "ravi@gmail.com",
    address: "35 sai bungalows visnagar",
    contactNo: "9898989898",
  },
  {
    id: 3,
    firstName: "Anand",
    middleName: "abcd",
    lastName: "efghi",
    email: "anand@gmail.com",
    address: "vastral",
    contactNo: "9999888877",
  },
  {
    id: 4,
    firstName: "test",
    middleName: "test",
    lastName: "test",
    email: "test@gmail.com",
    address: "ka",
    contactNo: "8596747485",
  },
];

function Users() {
  // Handler for delete action (log to console for now)
  const handleDelete = (id:number) => {
    console.log(`Delete user with ID: ${id}`);
    // Add your API delete logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="p-6 w-full space-y-4">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800">Manage User:</h2>

        {/* Table Container with Border */}
        <div className="border rounded-md shadow-sm bg-white overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-bold text-black">
                  First Name
                </TableHead>
                <TableHead className="font-bold text-black">
                  Middle Name
                </TableHead>
                <TableHead className="font-bold text-black">
                  Last Name
                </TableHead>
                <TableHead className="font-bold text-black">Email</TableHead>
                <TableHead className="font-bold text-black w-1/3">
                  Address
                </TableHead>
                <TableHead className="font-bold text-black">
                  Contact No
                </TableHead>
                <TableHead className="font-bold text-black text-center">
                  Delete
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50">
                  <TableCell className="py-3">{user.firstName}</TableCell>
                  <TableCell className="py-3">{user.middleName}</TableCell>
                  <TableCell className="py-3">{user.lastName}</TableCell>
                  <TableCell className="py-3 text-blue-600 underline cursor-pointer">
                    {/* Added simple style to make email look interactive */}
                    {user.email}
                  </TableCell>
                  <TableCell className="py-3">{user.address}</TableCell>
                  <TableCell className="py-3">{user.contactNo}</TableCell>
                  <TableCell className="py-3 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(user.id)}
                      className="hover:bg-blue-50"
                    >
                      {/* The Blue X Icon */}
                      <X
                        className="h-8 w-8 text-blue-400 font-bold"
                        strokeWidth={4}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer */}
       <Footer />
      </div>
    </div>
  );
}

export default Users;
