


import { MapPin, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 2,
    title: "Modern Villa",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    area: "3500 sq. ft",
    price: "₹1,50,00,000",
    description:
      "A luxurious modern villa with private pool, 4 bedrooms, modular kitchen, and premium amenities located in the heart of Mumbai.",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
    amenities: ["Private Pool", "Garden", "Garage", "Smart Home Features"],
  },
  {
    id: 3,
    title: "Cozy Studio",
    location: "Nagpur, Maharashtra",
    city: "Nagpur",
    area: "800 sq. ft",
    price: "₹45,00,000",
    description:
      "Compact and comfortable studio apartment ideal for bachelors or small families. Close to shopping and transport.",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    amenities: ["Lift", "24x7 Water", "Power Backup"],
  },
  {
    id: 4,
    title: "Family House",
    location: "Delhi, NCR",
    city: "Delhi",
    area: "2200 sq. ft",
    price: "₹95,00,000",
    description:
      "Spacious family home with 3 bedrooms, 2 balconies, and lush surroundings. Perfect for a growing family.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    amenities: ["Parking", "Balcony", "Security", "Play Area"],
  },
  {
    id: 5,
    title: "Beachside Villa",
    location: "Goa",
    city: "Goa",
    area: "4000 sq. ft",
    price: "₹2,10,00,000",
    description:
      "Beautiful beach-facing villa with ocean views, private lawn, and open terrace. Ideal for vacation homes.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    amenities: ["Sea View", "Private Garden", "Terrace"],
  },
  {
    id: 6,
    title: "Mountain Retreat",
    location: "Manali, Himachal Pradesh",
    city: "Manali",
    area: "2700 sq. ft",
    price: "₹1,20,00,000",
    description:
      "Peaceful retreat located amidst mountains, offering scenic views and premium interiors.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    amenities: ["Fireplace", "Wooden Interior", "Mountain View"],
  },
  {
    id: 7,
    title: "Penthouse Suite",
    location: "Bangalore, Karnataka",
    city: "Bangalore",
    area: "3200 sq. ft",
    price: "₹3,50,00,000",
    description:
      "Exclusive penthouse suite with rooftop terrace, panoramic city views, and luxurious design.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    amenities: ["Rooftop Lounge", "Gym", "Private Elevator"],
  },
];

function PropertyPage() {
  const navigate = useNavigate();

  const handleBook = (id: number) => {
    navigate(`/book-property/${id}`);
  };

  const handleViewMore = (property: any) => {
    navigate(`/property/${property.id}`, { state: property });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-14">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Home className="text-slate-900" /> Available Properties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden relative"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />

              {/* Buttons overlay on image */}
              <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                <button
                  onClick={() => handleViewMore(property)}
                  className="bg-blue-600 text-white font-medium py-1 px-3 rounded-lg hover:bg-blue-700 transition"
                  
                >
                  View More
                </button>
                <button
                  onClick={() => handleBook(property.id)}
                  className="bg-blue-600 text-white font-medium py-1 px-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Property
                </button>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold text-slate-900">
                {property.title}
              </h2>
              <p className="text-gray-500 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-blue-600" />
                {property.location}
              </p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                {property.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyPage;