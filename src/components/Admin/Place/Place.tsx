import { useState } from "react";
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
import { X, Pencil } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Mock Data for the table (Placeholders for images)
const initialPlaces = [
  {
    id: 1,
    name: "Ahmedabad",
    image: "https://placehold.co/100x60?text=Ahmedabad",
  },
  {
    id: 2,
    name: "Gandhinagar",
    image: "https://placehold.co/100x60?text=Gandhinagar",
  },
  { id: 3, name: "surat", image: "https://placehold.co/100x60?text=Surat" },
  { id: 4, name: "Rajkot", image: "https://placehold.co/100x60?text=Rajkot" },
  {
    id: 5,
    name: "Vadodara",
    image: "https://placehold.co/100x60?text=Vadodara",
  },
  {
    id: 6,
    name: "saputara",
    image: "https://placehold.co/100x60?text=Saputara",
  },
  {
    id: 7,
    name: "Statue of unity",
    image: "https://placehold.co/100x60?text=SOU",
  },
];

function Place() {
  const [places, setPlaces] = useState(initialPlaces);

  const handleDelete = (id: number) => {
    // remove the place from state
    setPlaces((prev) => prev.filter((p) => p.id !== id));
    console.log("Deleted place ID:", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit place ID:", id);
    // Add edit logic here (e.g. open modal or navigate to edit page)
  };

  return (
    <div>
      <Navbar/>
      <div className="p-6 w-full space-y-8 bg-gray-50 min-h-screen font-sans">
        {/* Page Title */}
        <h1 className="text-2xl text-teal-600 font-medium">Place</h1>

        {/* SECTION 1: INSERT PLACE FORM */}
        <div className="bg-white border rounded-sm shadow-sm">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Insert Place:</h2>
          </div>
          <div className="p-6 space-y-4">
            {/* Place Name Input */}
            <div className="space-y-2">
              <Label htmlFor="placeName" className="font-normal text-gray-800">
                Place Name
              </Label>
              <Input
                id="placeName"
                placeholder="Place Name"
                type="text"
                className="max-w-full border-gray-300 bg-white"
              />
            </div>

            {/* Place Image Input */}
            <div className="space-y-2">
              <Label htmlFor="placeImage" className="font-normal text-gray-800">
                Place Image
              </Label>
              <div className="flex flex-col gap-1">
                <Input
                  id="placeImage"
                  type="file"
                  className="max-w-xs border-gray-300 cursor-pointer"
                />
                <span className="text-xs text-gray-500">
                  Upload Place Image here
                </span>
              </div>
            </div>

            {/* Submit Button - Orange/Yellow Style */}
            <Button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 rounded-sm mt-2">
              SUBMIT
            </Button>
          </div>
        </div>

        {/* SECTION 2: MANAGE PLACE TABLE */}
        <div className="bg-white border rounded-sm shadow-sm">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Manage Place:</h2>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="border-b hover:bg-transparent">
                <TableHead className="text-black font-semibold w-1/3">
                  Place Name
                </TableHead>
                <TableHead className="text-black font-semibold w-1/3">
                  Place Image
                </TableHead>
                <TableHead className="text-black font-semibold text-center">
                  Delete
                </TableHead>
                <TableHead className="text-black font-semibold text-center">
                  Edit
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {places.map((place) => (
                <TableRow key={place.id} className="hover:bg-gray-50 border-b">
                  <TableCell className="py-4 font-medium text-gray-700">
                    {place.name}
                  </TableCell>
                  <TableCell className="py-4">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-20 h-12 object-cover border rounded-sm shadow-sm"
                    />
                  </TableCell>

                  {/* Delete Action */}
                  <TableCell className="py-4 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(place.id)}
                      className="hover:bg-blue-50"
                    >
                      <X className="h-6 w-6 text-blue-400" strokeWidth={4} />
                    </Button>
                  </TableCell>

                  {/* Edit Action */}
                  <TableCell className="py-4 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(place.id)}
                      className="hover:bg-cyan-50"
                    >
                      <div className="bg-cyan-600 p-1.5 rounded-full">
                        <Pencil className="h-4 w-4 text-white" />
                      </div>
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

export default Place;
