export default function ResourcesPage() {
  const categories = [
    {
      title: "🎨 Abstract Backgrounds & Shapes",
      description: "Generate SVG backgrounds, gradients, blobs, and modern visual assets.",
      resources: [
        {
          name: "Haikei",
          url: "https://haikei.app",
          use: "Generate SVG blobs, waves, and abstract backgrounds.",
        },
        {
          name: "BGJar",
          url: "https://bgjar.com",
          use: "Ready-made abstract SVG patterns and backgrounds.",
        },
        {
          name: "SVG Backgrounds",
          url: "https://www.svgbackgrounds.com",
          use: "Professional SVG backgrounds for landing pages.",
        },
        {
          name: "Mesh Gradient",
          url: "https://meshgradient.in",
          use: "Create modern mesh gradients.",
        },
        {
          name: "Paaatterns",
          url: "https://products.ls.graphics/paaatterns/",
          use: "Free seamless background patterns for Figma/Sketch.",
        },
      ],
    },
    {
      title: "✨ Animated Illustrations & GIFs",
      description: "Lightweight animations and motion assets.",
      resources: [
        {
          name: "LottieFiles",
          url: "https://lottiefiles.com",
          use: "Download JSON animations for React and Next.js.",
        },
        {
          name: "Lordicon",
          url: "https://lordicon.com",
          use: "Animated icons for websites and dashboards.",
        },
        {
          name: "Icons8 Animated Icons",
          url: "https://icons8.com/animated-icons",
          use: "Animated SVG and GIF icons.",
        },
      ],
    },
    {
      title: "🎥 Hero Section Videos",
      description: "Free stock videos for hero sections and product showcases.",
      resources: [
        {
          name: "Pexels Videos",
          url: "https://www.pexels.com/videos",
          use: "High-quality free stock videos.",
        },
        {
          name: "Pixabay Videos",
          url: "https://pixabay.com/videos",
          use: "Royalty-free video collection.",
        },
        {
          name: "Mixkit",
          url: "https://mixkit.co/free-stock-video",
          use: "Beautiful startup-style hero videos.",
        },
      ],
    },
    {
      title: "🖼️ Illustrations",
      description: "Customizable illustrations and animated artwork.",
      resources: [
        {
          name: "unDraw",
          url: "https://undraw.co",
          use: "Free SVG illustrations.",
        },
        {
          name: "Storyset",
          url: "https://storyset.com",
          use: "Animated illustrations for websites.",
        },
        {
          name: "ManyPixels",
          url: "https://www.manypixels.co/gallery",
          use: "Professional illustration library.",
        },
        {
          name: "Blush",
          url: "https://blush.design/",
          use: "Customizable, mix-and-match illustration graphics.",
        },
        {
          name: "DrawKit",
          url: "https://www.drawkit.com/",
          use: "Hand-crafted vector illustrations and icons.",
        },
        {
          name: "Pixels Market",
          url: "https://pixels.market/",
          use: "Marketplace for premium illustrations and design assets.",
        },
      ],
    },
    {
      title: "🔥 Icons",
      description: "Modern icon libraries for React and Next.js.",
      resources: [
        {
          name: "Lucide Icons",
          url: "https://lucide.dev",
          use: "Clean and lightweight React icons.",
        },
        {
          name: "Heroicons",
          url: "https://heroicons.com",
          use: "Official Tailwind CSS icon set.",
        },
        {
          name: "Tabler Icons",
          url: "https://tabler.io/icons",
          use: "Large open-source icon collection.",
        },
      ],
    },
    {
      title: "🌟 UI Inspiration",
      description: "Find inspiration for landing pages and SaaS websites.",
      resources: [
        {
          name: "Mobbin",
          url: "https://mobbin.com",
          use: "UI patterns from real products.",
        },
        {
          name: "Landingfolio",
          url: "https://www.landingfolio.com",
          use: "Landing page inspiration.",
        },
        {
          name: "Lapa Ninja",
          url: "https://www.lapa.ninja",
          use: "Beautiful website gallery.",
        },
        {
          name: "Godly Website",
          url: "https://godly.website",
          use: "Award-worthy web design inspiration.",
        },
        {
          name: "UI Design Daily",
          url: "https://www.uidesigndaily.com/",
          use: "Daily UI design challenge inspiration archive.",
        },
        {
          name: "Sketch App Sources",
          url: "https://www.sketchappsources.com/",
          use: "Free design resources and UI kits.",
        },
        {
          name: "FlyonUI",
          url: "https://flyonui.com/",
          use: "Tailwind CSS component library for fast UI building.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">
          Frontend Design Resources
        </h1>

        <p className="text-zinc-400 mb-10">
          Everything you need for SaaS, AI, EdTech, Startup and Portfolio websites.
        </p>

        <div className="grid gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {category.title}
              </h2>

              <p className="text-zinc-400 mb-6">
                {category.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-zinc-800 hover:bg-zinc-700 transition-all rounded-xl p-5 border border-zinc-700"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">
                        {resource.name}
                      </h3>

                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>

                    <p className="text-sm text-zinc-400 mt-3">
                      {resource.use}
                    </p>

                    <div className="mt-4 text-blue-400 text-sm">
                      Visit Resource
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}