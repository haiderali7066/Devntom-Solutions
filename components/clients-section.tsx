"use client"

import Image from "next/image"

export default function ClientsSection() {
  const clients = [
    { name: "WordPress", logo: "/wordpress-logo.png" },
    { name: "Google Ads", logo: "/google-ads-logo.png" },
    { name: "VS Code", logo: "/visual-studio-code-logo.jpg" },
    { name: "AWS", logo: "/logos/aws.jpg" },
    { name: "Android", logo: "/android-logo.png" },
    { name: "GitHub", logo: "/github-logo.png" },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={80}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
