import { Instagram } from "lucide-react";
import { Card } from "antd";
import "./index.css";
export default function Component() {
  const cakes = [
    {
      name: "Torta SANTA LULADA",
      subtitle: "NUESTRA TORTA INSIGNIA",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Torta MARACUMANGO",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Torta CHONTADURO",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Torta FRUTOS ROJOS",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-8">
      <div className="mx-auto max-w-md space-y-4">
        {/* Profile Section */}
        <div className="text-center">
          <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-[#6B7D6A]">
            <div className="flex h-full items-center justify-center text-white">
              <span className="text-xl font-semibold">SANTA VERA</span>
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold">Santa Vera Pastelería</h1>
          <p className="mt-2 text-gray-600">📍 Cali - Colombia</p>
          <p className="mt-2 text-gray-800">
            Pastelería gourmet y natural con Sabores Colombianos 💛
            <span className="ml-1">💙❤️</span>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main CTA */}
        <a
          href="http://www.pasteleriasantavera.com"
          className="block rounded-lg border-2 border-gray-200 bg-white p-4 text-center font-semibold hover:bg-gray-50"
        >
          COMPRAR POR LA PÁGINA WEB
          <div className="text-sm text-gray-500">
            www.pasteleriasantavera.com
          </div>
        </a>

        {/* Cakes List */}
        <div className="space-y-3">
          {cakes.map((cake, index) => (
            <Card key={index} className="overflow-hidden">
              <a to="#" className="flex items-center gap-4 p-4">
                <img
                  src={cake.image}
                  alt={cake.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{cake.name}</h3>
                  {cake.subtitle && (
                    <p className="text-sm text-gray-600">{cake.subtitle}</p>
                  )}
                  <p className="text-sm text-primary">Comprar por página web</p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        {/* Customer Service */}
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">
            Atención en línea con un asesor
          </h3>
          <p className="text-sm text-gray-600">NO LLAMADAS (CRM)</p>
        </Card>

        {/* Terms */}
        <a
          href="#"
          className="block rounded-lg border-2 border-gray-200 bg-white p-4 text-center"
        >
          Términos & Condiciones
        </a>

        {/* Footer */}
        <div className="py-6 text-center">
          <img
            src="/placeholder.svg?height=50&width=150"
            alt="Beacons"
            width={150}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
