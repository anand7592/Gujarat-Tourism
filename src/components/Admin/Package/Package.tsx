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

// Mock Data for Packages
const initialPackages = [
  {
    id: 1,
    packageName: "Rann Utsav Special",
    placeName: "Kutch",
    subPlaceName: "White Desert",
    price: "15000",
    duration: "3 Days / 2 Nights",
    description: "Experience the full moon night at White Rann.",
    image: "https://placehold.co/100x60?text=Rann",
  },
  {
    id: 2,
    packageName: "Gir Lion Safari",
    placeName: "Junagadh",
    subPlaceName: "Sasan Gir",
    price: "12000",
    duration: "2 Days / 1 Night",
    description: "Jungle safari and stay in luxury tents.",
    image: "https://placehold.co/100x60?text=Gir",
  },
  {
    id: 3,
    packageName: "Statue of Unity Tour",
    placeName: "Narmada",
    subPlaceName: "Kevadia",
    price: "8500",
    duration: "1 Day",
    description: "Visit the world's tallest statue and valley of flowers.",
    image: "https://placehold.co/100x60?text=SOU",
  },
  {
    id: 4,
    packageName: "Somnath Darshan",
    placeName: "Somnath",
    subPlaceName: "Somnath Temple",
    price: "5000",
    duration: "1 Day / 1 Night",
    description: "Spiritual journey to the first Jyotirlinga.",
    image: "https://placehold.co/100x60?text=Somnath",
  },
  {
    id: 5,
    packageName: "Dwarka Pilgrimage",
    placeName: "Dwarka",
    subPlaceName: "Dwarkadhish Temple",
    price: "7000",
    duration: "2 Days",
    description: "Visit the kingdom of Lord Krishna.",
    image: "https://placehold.co/100x60?text=Dwarka",
  },
];

function Package() {
  const [packages] = useState(initialPackages);

  const handleDelete = (id: number) => {
    console.log(`Delete package ID: ${id}`);
    // API call logic here
  };

  const handleEdit = (id: number) => {
    console.log(`Edit package ID: ${id}`);
    // Edit logic here
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 w-full space-y-8 bg-gray-50 min-h-screen font-sans">
        {/* Page Title */}
        <h1 className="text-2xl text-teal-600 font-medium">Package</h1>

        {/* SECTION 1: INSERT PACKAGE FORM */}
        <div className="bg-white border rounded-sm shadow-sm">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Insert Package:</h2>
          </div>

          <div className="p-6 grid gap-4">
            {/* Package Name */}
            <div className="space-y-2">
              <Label htmlFor="pkgName" className="font-normal text-gray-800">
                Package Name
              </Label>
              <Input
                id="pkgName"
                placeholder="Package Name"
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
                  <SelectItem value="kutch">Kutch</SelectItem>
                  <SelectItem value="junagadh">Junagadh</SelectItem>
                  <SelectItem value="narmada">Narmada</SelectItem>
                  <SelectItem value="somnath">Somnath</SelectItem>
                  <SelectItem value="dwarka">Dwarka</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Subplace Name */}
            <div className="space-y-2">
              <Label
                htmlFor="subPlaceName"
                className="font-normal text-gray-800"
              >
                Subplace Name
              </Label>
              <Input
                id="subPlaceName"
                placeholder="Subplace Name"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Label htmlFor="price" className="font-normal text-gray-800">
                Price (₹)
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="e.g. 5000"
                className="max-w-xs border-gray-300 bg-white"
              />
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <Label htmlFor="duration" className="font-normal text-gray-800">
                Duration
              </Label>
              <Input
                id="duration"
                placeholder="e.g. 2 Days / 1 Night"
                className="max-w-xs border-gray-300 bg-white"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="font-normal text-gray-800"
              >
                Description
              </Label>
              <Input
                id="description"
                placeholder="Package Details"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Upload Image */}
            <div className="space-y-2">
              <Label className="font-normal text-gray-800">Package Image</Label>
              <div className="flex flex-col gap-1">
                <Input
                  type="file"
                  className="max-w-xs border-gray-300 cursor-pointer"
                />
                <span className="text-xs text-gray-500">
                  Upload Package Image here
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

        {/* SECTION 2: MANAGE PACKAGE TABLE */}
        <div className="bg-white border rounded-sm shadow-sm overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Manage Package:</h2>
          </div>

          <div className="overflow-x-auto">
            <Table className="min-w-[1000px]">
              <TableHeader>
                <TableRow className="border-b hover:bg-transparent">
                  <TableHead className="text-black font-bold w-[15%]">
                    Package Name
                  </TableHead>
                  <TableHead className="text-black font-bold w-[10%]">
                    Place
                  </TableHead>
                  <TableHead className="text-black font-bold w-[10%]">
                    Sub Place
                  </TableHead>
                  <TableHead className="text-black font-bold w-[10%]">
                    Price
                  </TableHead>
                  <TableHead className="text-black font-bold w-[15%]">
                    Duration
                  </TableHead>
                  <TableHead className="text-black font-bold w-[20%]">
                    Description
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
                {packages.map((pkg) => (
                  <TableRow key={pkg.id} className="hover:bg-gray-50 border-b">
                    <TableCell className="py-4 font-medium text-gray-700 align-middle">
                      {pkg.packageName}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600 align-middle">
                      {pkg.placeName}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600 align-middle">
                      {pkg.subPlaceName}
                    </TableCell>
                    <TableCell className="py-4 font-semibold text-green-600 align-middle">
                      ₹{pkg.price}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600 align-middle">
                      {pkg.duration}
                    </TableCell>
                    <TableCell className="py-4 text-gray-500 text-sm align-middle truncate max-w-[200px]">
                      {pkg.description}
                    </TableCell>
                    <TableCell className="py-4 align-middle">
                      <img
                        src={pkg.image}
                        alt={pkg.packageName}
                        className="w-20 h-12 object-cover border rounded-sm shadow-sm"
                      />
                    </TableCell>

                    {/* Delete Action */}
                    <TableCell className="py-4 text-center align-middle">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(pkg.id)}
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
                        onClick={() => handleEdit(pkg.id)}
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

export default Package;
