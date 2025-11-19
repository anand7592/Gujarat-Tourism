import  { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Pencil } from "lucide-react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// Mock Data for Hotels
const initialHotels = [
  {
    id: 1,
    hotelName: "The Fern",
    placeName: "Ahmedabad",
    hotelType: "5 Star",
    description: "Eco-friendly luxury hotel on SG Highway.",
    address: "SG Highway, Ahmedabad",
    contactNo: "9876543210",
    image: "https://placehold.co/100x60?text=Fern",
  },
  {
    id: 2,
    hotelName: "Gift City Club",
    placeName: "Gandhinagar",
    hotelType: "Resort",
    description: "Premium club and resort with modern amenities.",
    address: "Gift City, Gandhinagar",
    contactNo: "9988776655",
    image: "https://placehold.co/100x60?text=Gift",
  },
  {
    id: 3,
    hotelName: "Lords Plaza",
    placeName: "Surat",
    hotelType: "3 Star",
    description: "Business hotel located near the railway station.",
    address: "Delhi Gate, Surat",
    contactNo: "9123456789",
    image: "https://placehold.co/100x60?text=Lords",
  },
  {
    id: 4,
    hotelName: "Regenta Central",
    placeName: "Rajkot",
    hotelType: "4 Star",
    description: "Contemporary hotel offering fine dining.",
    address: "Kalavad Road, Rajkot",
    contactNo: "8899001122",
    image: "https://placehold.co/100x60?text=Regenta",
  },
  {
    id: 5,
    hotelName: "Tent City",
    placeName: "Kutch",
    hotelType: "Luxury Tent",
    description: "Experience the Rann Utsav in style.",
    address: "Dhordo, Kutch",
    contactNo: "7766554433",
    image: "https://placehold.co/100x60?text=Tent",
  },
];

function Hotel() {
  const [hotels, setHotels] = useState(initialHotels);

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this hotel?")) return;
    setHotels((prev) => prev.filter((h) => h.id !== id));
    // API call logic here
  };

  const handleEdit = (id: number) => {
    console.log(`Edit hotel ID: ${id}`);
    // Edit logic here
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 w-full space-y-8 bg-gray-50 min-h-screen font-sans">
        {/* Page Title */}
        <h1 className="text-2xl text-teal-600 font-medium">Hotel</h1>

        {/* SECTION 1: INSERT HOTEL FORM */}
        <div className="bg-white border rounded-sm shadow-sm">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Insert Hotel:</h2>
          </div>

          <div className="p-6 grid gap-4">
            {/* Hotel Name */}
            <div className="space-y-2">
              <Label htmlFor="hotelName" className="font-normal text-gray-800">
                Hotel Name
              </Label>
              <Input
                id="hotelName"
                placeholder="Hotel Name"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Place Name Dropdown */}
            <div className="space-y-2">
              <Label className="font-normal text-gray-800">Place Name</Label>
              <Select>
                <SelectTrigger className="max-w-xs bg-white border-gray-300">
                  <SelectValue placeholder="Select Place Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                  <SelectItem value="gandhinagar">Gandhinagar</SelectItem>
                  <SelectItem value="surat">Surat</SelectItem>
                  <SelectItem value="rajkot">Rajkot</SelectItem>
                  <SelectItem value="kutch">Kutch</SelectItem>
                  <SelectItem value="vadodara">Vadodara</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Hotel Type Dropdown */}
            <div className="space-y-2">
              <Label className="font-normal text-gray-800">Hotel Type</Label>
              <Select>
                <SelectTrigger className="max-w-xs bg-white border-gray-300">
                  <SelectValue placeholder="Select Hotel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5star">5 Star</SelectItem>
                  <SelectItem value="4star">4 Star</SelectItem>
                  <SelectItem value="3star">3 Star</SelectItem>
                  <SelectItem value="resort">Resort</SelectItem>
                  <SelectItem value="tent">Luxury Tent</SelectItem>
                  <SelectItem value="budget">Budget</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="font-normal text-gray-800"
              >
                Hotel Description
              </Label>
              <Input
                id="description"
                placeholder="Hotel details..."
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address" className="font-normal text-gray-800">
                Hotel Address
              </Label>
              <Input
                id="address"
                placeholder="Full Address"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Contact No */}
            <div className="space-y-2">
              <Label htmlFor="contact" className="font-normal text-gray-800">
                Contact No
              </Label>
              <Input
                id="contact"
                type="tel"
                placeholder="e.g. 9876543210"
                className="max-w-xs border-gray-300 bg-white"
              />
            </div>

            {/* Upload Image */}
            <div className="space-y-2">
              <Label className="font-normal text-gray-800">Hotel Image</Label>
              <div className="flex flex-col gap-1">
                <Input
                  type="file"
                  className="max-w-xs border-gray-300 cursor-pointer"
                />
                <span className="text-xs text-gray-500">
                  Upload Hotel Image here
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 rounded-sm uppercase">
                Submit
              </Button>
            </div>
          </div>
        </div>

        {/* SECTION 2: MANAGE HOTEL TABLE */}
        <div className="bg-white border rounded-sm shadow-sm overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Manage Hotel:</h2>
          </div>

          <div className="overflow-x-auto">
            <Table className="min-w-[1200px]">
              <TableHeader>
                <TableRow className="border-b hover:bg-transparent">
                  <TableHead className="text-black font-bold w-[15%]">
                    Hotel Name
                  </TableHead>
                  <TableHead className="text-black font-bold w-[10%]">
                    Place Name
                  </TableHead>
                  <TableHead className="text-black font-bold w-[10%]">
                    Hotel Type
                  </TableHead>
                  <TableHead className="text-black font-bold w-[20%]">
                    Description
                  </TableHead>
                  <TableHead className="text-black font-bold w-[15%]">
                    Address
                  </TableHead>
                  <TableHead className="text-black font-bold w-[10%]">
                    Contact No
                  </TableHead>
                  <TableHead className="text-black font-bold w-[10%]">
                    Image
                  </TableHead>
                  <TableHead className="text-black font-bold text-center w-[5%]">
                    Delete
                  </TableHead>
                  <TableHead className="text-black font-bold text-center w-[5%]">
                    Edit
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hotels.map((hotel) => (
                  <TableRow
                    key={hotel.id}
                    className="hover:bg-gray-50 border-b"
                  >
                    <TableCell className="py-4 font-medium text-gray-700 align-middle">
                      {hotel.hotelName}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600 align-middle">
                      {hotel.placeName}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600 align-middle">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs border">
                        {hotel.hotelType}
                      </span>
                    </TableCell>
                    <TableCell className="py-4 text-gray-500 text-sm align-middle truncate max-w-[200px]">
                      {hotel.description}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600 text-sm align-middle">
                      {hotel.address}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600 align-middle">
                      {hotel.contactNo}
                    </TableCell>
                    <TableCell className="py-4 align-middle">
                      <img
                        src={hotel.image}
                        alt={hotel.hotelName}
                        className="w-20 h-12 object-cover border rounded-sm shadow-sm"
                      />
                    </TableCell>

                    {/* Delete Action */}
                    <TableCell className="py-4 text-center align-middle">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(hotel.id)}
                        className="hover:bg-blue-50"
                      >
                        <X className="h-6 w-6 text-blue-400" strokeWidth={4} />
                      </Button>
                    </TableCell>

                    {/* Edit Action */}
                    <TableCell className="py-4 text-center align-middle">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(hotel.id)}
                        className="hover:bg-cyan-50"
                      >
                        <div className="bg-cyan-600 p-1.5 rounded-full shadow-sm">
                          <Pencil className="h-4 w-4 text-white" />
                        </div>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
