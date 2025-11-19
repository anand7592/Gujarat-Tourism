import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { X, Star } from "lucide-react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// Mock Data for Ratings
const initialRatings = [
  {
    id: 1,
    userName: "chetan",
    placeName: "Ahmedabad",
    subPlaceName: "Gandhi Ashram",
    rating: 5,
    message: "Very peaceful place. Must visit for history lovers.",
  },
  {
    id: 2,
    userName: "ravi",
    placeName: "Surat",
    subPlaceName: "Gopi Talav",
    rating: 4,
    message: "Nice lake view, good for evening walks.",
  },
  {
    id: 3,
    userName: "Anand",
    placeName: "Rajkot",
    subPlaceName: "Fun World",
    rating: 3,
    message: "Good for kids, but rides need maintenance.",
  },
  {
    id: 4,
    userName: "Priya",
    placeName: "Gandhinagar",
    subPlaceName: "Akshardham",
    rating: 5,
    message: "Absolutely stunning architecture and light show.",
  },
  {
    id: 5,
    userName: "Rahul",
    placeName: "Vadodara",
    subPlaceName: "Laxshmi Vilas Palace",
    rating: 4,
    message: "Grand palace, but entry fee is a bit high.",
  },
];

function Rating() {
  const [ratings, setRatings] = useState(initialRatings);

  const handleDelete = (id: number) => {
    console.log(`Delete rating ID: ${id}`);
    // API call to delete rating would go here
    // Optimistically remove rating from local state
    setRatings((prev) => prev.filter((r) => r.id !== id));
  };

  // Helper function to render stars
  const renderStars = (count:number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 w-full space-y-8 bg-gray-50 min-h-screen font-sans">
        {/* Page Title */}
        <h1 className="text-2xl text-teal-600 font-medium">Rating</h1>

        {/* SECTION: MANAGE RATING TABLE */}
        <div className="bg-white border rounded-sm shadow-sm">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h2 className="text-gray-700 font-medium">Manage Rating:</h2>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b hover:bg-transparent">
                  <TableHead className="text-black font-bold">
                    User Name
                  </TableHead>
                  <TableHead className="text-black font-bold">
                    Place Name
                  </TableHead>
                  <TableHead className="text-black font-bold">
                    Sub Place Name
                  </TableHead>
                  <TableHead className="text-black font-bold">Rating</TableHead>
                  <TableHead className="text-black font-bold w-1/3">
                    Message
                  </TableHead>
                  <TableHead className="text-black font-bold text-center">
                    Delete
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ratings.map((item) => (
                  <TableRow key={item.id} className="hover:bg-gray-50 border-b">
                    <TableCell className="py-4 font-medium text-gray-700">
                      {item.userName}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600">
                      {item.placeName}
                    </TableCell>
                    <TableCell className="py-4 text-gray-600">
                      {item.subPlaceName}
                    </TableCell>

                    {/* Rating Stars */}
                    <TableCell className="py-4">
                      {renderStars(item.rating)}
                    </TableCell>

                    <TableCell className="py-4 text-gray-600 text-sm">
                      {item.message}
                    </TableCell>

                    {/* Delete Action */}
                    <TableCell className="py-4 text-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(item.id)}
                        className="hover:bg-blue-50"
                      >
                        <X className="h-6 w-6 text-blue-400" strokeWidth={4} />
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

export default Rating;
