import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 p-6">
      {/* Header */}
      <header className="flex flex-col items-center mb-10">
        <Image
          src="/logo.jpg"
          alt="Baby Eats & Treats Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4 text-blue-800">Baby Eats & Treats</h1>
        <p className="text-gray-600 mt-2">Healthy recipes for your little one</p>
      </header>

      {/* Recipes Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">🥕 Carrot Purée</h2>
            <p className="text-gray-700 mb-2"><strong>Ingredients:</strong> 2 carrots, ½ cup water</p>
            <p className="text-gray-700"><strong>Instructions:</strong> Peel and chop the carrots. Steam until soft. Blend with water until smooth.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">🍌 Banana Mash</h2>
            <p className="text-gray-700 mb-2"><strong>Ingredients:</strong> 1 ripe banana</p>
            <p className="text-gray-700"><strong>Instructions:</strong> Mash banana with a fork until smooth. Serve fresh.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">🍎 Apple & Oatmeal</h2>
            <p className="text-gray-700 mb-2"><strong>Ingredients:</strong> 1 apple, 2 tbsp oats, ½ cup water</p>
            <p className="text-gray-700"><strong>Instructions:</strong> Peel and chop apple. Cook with oats and water until soft. Blend until smooth.</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500">
        © {new Date().getFullYear()} Baby Eats & Treats. All rights reserved.
      </footer>
    </main>
  );
}