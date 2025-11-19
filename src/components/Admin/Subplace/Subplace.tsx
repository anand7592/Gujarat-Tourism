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

// Mock Data based on your screenshot
const initialSubPlaces = [
  {
    id: 1,
    placeName: "Ahmedabad",
    subPlaceName: "Gandhi Ashram",
    city: "Ahmedabad",
    pic1: "https://placehold.co/50x50?text=P1",
    pic2: "https://placehold.co/50x50?text=P2",
    pic3: "https://placehold.co/50x50?text=P3",
    tagLine: "Sabarmati Ashram",
    desc: "On his return from South Africa, Gandhi's first Ashram in India was established...",
    transport: "Buses are run by Gujarat State Road Transport...",
    bestTime: "June - December",
    whatsGreat: "Our memorial museum contains a sizable collection...",
    localFood: "Gujarati Thali",
  },
  {
    id: 2,
    placeName: "Gandhinagar",
    subPlaceName: "Akshardham",
    city: "Gandhinagar",
    pic1: "https://placehold.co/50x50?text=P1",
    pic2: "https://placehold.co/50x50?text=P2",
    pic3: "https://placehold.co/50x50?text=P3",
    tagLine: "Best temple in gandhinagar",
    desc: "very nice place to visit",
    transport: "bus, amts, brts",
    bestTime: "Whole year",
    whatsGreat: "old monuments, greenery",
    localFood: "Gujarati Food",
  },
  {
    id: 3,
    placeName: "Rajkot",
    subPlaceName: "Fun World",
    city: "Rajkot",
    pic1: "https://placehold.co/50x50?text=P1",
    pic2: "https://placehold.co/50x50?text=P2",
    pic3: "https://placehold.co/50x50?text=P3",
    tagLine: "Fun Place with family",
    desc: "Fun rides and waterpark",
    transport: "Local Transport",
    bestTime: "anytime",
    whatsGreat: "Rides",
    localFood: "Gujarati",
  },
  {
    id: 4,
    placeName: "Surat",
    subPlaceName: "Gopi Talav",
    city: "Surat",
    pic1: "https://placehold.co/50x50?text=P1",
    pic2: "https://placehold.co/50x50?text=P2",
    pic3: "https://placehold.co/50x50?text=P3",
    tagLine: "Best view of surat with lake",
    desc: "Surrounded by water",
    transport: "Local",
    bestTime: "Sunset",
    whatsGreat: "Ambience",
    localFood: "gujarati food",
  },
  {
    id: 5,
    placeName: "Ahmedabad",
    subPlaceName: "Science City",
    city: "Ahmedabad",
    pic1: "https://placehold.co/50x50?text=P1",
    pic2: "https://placehold.co/50x50?text=P2",
    pic3: "https://placehold.co/50x50?text=P3",
    tagLine: "Fun activities with learn",
    desc: "Extraordinary science fictions",
    transport: "Local",
    bestTime: "Anytime",
    whatsGreat: "Aquarium",
    localFood: "Gujarati",
  },
  {
    id: 6,
    placeName: "Vadodara",
    subPlaceName: "Laxshmi Vilas Palace",
    city: "Vadodara",
    pic1: "https://placehold.co/50x50?text=P1",
    pic2: "https://placehold.co/50x50?text=P2",
    pic3: "https://placehold.co/50x50?text=P3",
    tagLine: "Extreme Infrastructure",
    desc: "Massive, 19th-century palace in landscaped grounds...",
    transport: "Local",
    bestTime: "Morning",
    whatsGreat: "Palace and side views",
    localFood: "Gujarati",
  },
];

function Subplace() {
  const [subPlaces, setSubPlaces] = useState(initialSubPlaces);

  const handleDelete = (id: number) => {
    // remove the subplace from state so the setter is used
    setSubPlaces((prev) => prev.filter((p) => p.id !== id));
    console.log(`Deleted subplace ID: ${id}`);
  };

  const handleEdit = (id: number) => {
    console.log(`Edit subplace ID: ${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 w-full space-y-8 bg-gray-50 min-h-screen font-sans">
        {/* Page Title */}
        <h1 className="text-2xl text-teal-600 font-medium">Place</h1>

        {/* SECTION 1: INSERT SUBPLACE FORM */}
        <div className="bg-white border rounded-sm shadow-sm">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Insert Place:</h2>
          </div>

          <div className="p-6 grid gap-4">
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
                  <SelectItem value="vadodara">Vadodara</SelectItem>
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
                placeholder="subplace name"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* City Name */}
            <div className="space-y-2">
              <Label htmlFor="cityName" className="font-normal text-gray-800">
                City Name
              </Label>
              <Input
                id="cityName"
                placeholder="City Name"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Upload Pics 1, 2, 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Pic 1 */}
              <div className="space-y-1">
                <Label className="font-normal text-gray-800">
                  Upload Pic 1
                </Label>
                <div className="flex flex-col">
                  <Input
                    type="file"
                    className="max-w-full border-gray-300 cursor-pointer text-xs"
                  />
                  <span className="text-[10px] text-gray-500 mt-1">
                    Upload Image here
                  </span>
                </div>
              </div>
              {/* Pic 2 */}
              <div className="space-y-1">
                <Label className="font-normal text-gray-800">
                  Upload Pic 2
                </Label>
                <div className="flex flex-col">
                  <Input
                    type="file"
                    className="max-w-full border-gray-300 cursor-pointer text-xs"
                  />
                  <span className="text-[10px] text-gray-500 mt-1">
                    Upload Image here
                  </span>
                </div>
              </div>
              {/* Pic 3 */}
              <div className="space-y-1">
                <Label className="font-normal text-gray-800">
                  Upload Pic 3
                </Label>
                <div className="flex flex-col">
                  <Input
                    type="file"
                    className="max-w-full border-gray-300 cursor-pointer text-xs"
                  />
                  <span className="text-[10px] text-gray-500 mt-1">
                    Upload Image here
                  </span>
                </div>
              </div>
            </div>

            {/* Tag Line */}
            <div className="space-y-2">
              <Label htmlFor="tagLine" className="font-normal text-gray-800">
                Tag Line
              </Label>
              <Input
                id="tagLine"
                placeholder="Tag line"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Subplace Description */}
            <div className="space-y-2">
              <Label
                htmlFor="subPlaceDesc"
                className="font-normal text-gray-800"
              >
                Subplace description
              </Label>
              <Input
                id="subPlaceDesc"
                placeholder="subplace des"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Modes of Transport */}
            <div className="space-y-2">
              <Label htmlFor="modes" className="font-normal text-gray-800">
                modes of transport
              </Label>
              <Input
                id="modes"
                placeholder="modes of transport"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Best Time to Visit */}
            <div className="space-y-2">
              <Label htmlFor="bestTime" className="font-normal text-gray-800">
                Best time to visit
              </Label>
              <Input
                id="bestTime"
                placeholder="Best time to visit"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Whats Great */}
            <div className="space-y-2">
              <Label htmlFor="whatsGreat" className="font-normal text-gray-800">
                whats great
              </Label>
              <Input
                id="whatsGreat"
                placeholder="whats great"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Local Food */}
            <div className="space-y-2">
              <Label htmlFor="localFood" className="font-normal text-gray-800">
                Local food
              </Label>
              <Input
                id="localFood"
                placeholder="Local food"
                className="border-gray-300 bg-white"
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 rounded-sm uppercase">
                Submit
              </Button>
            </div>
          </div>
        </div>

        {/* SECTION 2: MANAGE SUBPLACE TABLE */}
        <div className="bg-white border rounded-sm shadow-sm overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Manage Subplace:</h2>
          </div>

          <div className="overflow-x-auto">
            <Table className="min-w-[1400px]">
              <TableHeader>
                <TableRow className="border-b hover:bg-transparent">
                  <TableHead className="text-black font-bold min-w-[100px]">
                    Place Name
                  </TableHead>
                  <TableHead className="text-black font-bold min-w-[120px]">
                    Sub Place Name
                  </TableHead>
                  <TableHead className="text-black font-bold min-w-[100px]">
                    City
                  </TableHead>
                  <TableHead className="text-black font-bold w-[60px]">
                    Plc1
                  </TableHead>
                  <TableHead className="text-black font-bold w-[60px]">
                    Plc2
                  </TableHead>
                  <TableHead className="text-black font-bold w-[60px]">
                    Plc3
                  </TableHead>
                  <TableHead className="text-black font-bold min-w-[150px]">
                    Tag Line
                  </TableHead>
                  <TableHead className="text-black font-bold min-w-[200px]">
                    Subplace Desc
                  </TableHead>
                  <TableHead className="text-black font-bold min-w-[100px]">
                    Transport
                  </TableHead>
                  <TableHead className="text-black font-bold min-w-[100px]">
                    Best Time To Visit
                  </TableHead>
                  <TableHead className="text-black font-bold min-w-[150px]">
                    Whats Great
                  </TableHead>
                  <TableHead className="text-black font-bold min-w-[100px]">
                    Local Food
                  </TableHead>
                  <TableHead className="text-black font-bold text-center w-[60px]">
                    Delete
                  </TableHead>
                  <TableHead className="text-black font-bold text-center w-[60px]">
                    Edit
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subPlaces.map((place) => (
                  <TableRow
                    key={place.id}
                    className="hover:bg-gray-50 border-b align-top"
                  >
                    <TableCell className="py-4 align-top">
                      {place.placeName}
                    </TableCell>
                    <TableCell className="py-4 align-top">
                      {place.subPlaceName}
                    </TableCell>
                    <TableCell className="py-4 align-top">
                      {place.city}
                    </TableCell>
                    {/* Images */}
                    <TableCell className="py-4 align-top">
                      <img
                        src={place.pic1}
                        alt="p1"
                        className="w-8 h-8 object-cover border"
                      />
                    </TableCell>
                    <TableCell className="py-4 align-top">
                      <img
                        src={place.pic2}
                        alt="p2"
                        className="w-8 h-8 object-cover border"
                      />
                    </TableCell>
                    <TableCell className="py-4 align-top">
                      <img
                        src={place.pic3}
                        alt="p3"
                        className="w-8 h-8 object-cover border"
                      />
                    </TableCell>

                    <TableCell className="py-4 align-top text-sm">
                      {place.tagLine}
                    </TableCell>
                    <TableCell className="py-4 align-top text-sm">
                      {place.desc}
                    </TableCell>
                    <TableCell className="py-4 align-top text-sm">
                      {place.transport}
                    </TableCell>
                    <TableCell className="py-4 align-top text-sm">
                      {place.bestTime}
                    </TableCell>
                    <TableCell className="py-4 align-top text-sm">
                      {place.whatsGreat}
                    </TableCell>
                    <TableCell className="py-4 align-top text-sm">
                      {place.localFood}
                    </TableCell>

                    {/* Delete Action */}
                    <TableCell className="py-4 text-center align-top">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(place.id)}
                        className="hover:bg-blue-50 h-8 w-8"
                      >
                        <X className="h-5 w-5 text-blue-400" strokeWidth={4} />
                      </Button>
                    </TableCell>

                    {/* Edit Action */}
                    <TableCell className="py-4 text-center align-top">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(place.id)}
                        className="hover:bg-cyan-50 h-8 w-8"
                      >
                        <div className="bg-cyan-600 p-1.5 rounded-full shadow-sm">
                          <Pencil className="h-3 w-3 text-white" />
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

export default Subplace;
