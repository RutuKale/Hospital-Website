import FAQSection from "../../components/FAQSection";
import Layout from "../../components/Layout";

function DepartmentTemplate({
  title,
  breadcrumb,
  image,
  heading,
  paragraphs,
  img
}) {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[100vh] lg:min-h-[100vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div data-aos="zoom-in" className="absolute inset-0">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/80 via-blue-600/70 to-blue-300/60"></div>
          </div>

          {/* Content */}
          <div data-aos="fade-up" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
            {/* Breadcrumb */}
            <p className="text-blue-100 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 tracking-wide">
              Home <span className="mx-1 sm:mx-2">›</span> {breadcrumb}
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6 px-2">
              {title}
            </h1>

            {/* Subtitle (optional enhancement) */}
            <p className="text-blue-100 text-xs sm:text-sm md:text-md max-w-xl mx-auto mb-6 sm:mb-8 px-4">
              Providing advanced care with expert doctors and modern technology for your better health.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 500 80"
              preserveAspectRatio="none"
              className="w-full h-16 sm:h-20"
            >
              <path
                d="M0,40 C150,80 350,0 500,40 L500,80 L0,80 Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Image */}
            <div
              data-aos="fade-right"
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div
              data-aos="fade-left"
              className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 leading-tight">
                {heading}
              </h2>

              {paragraphs.map((para, index) => (
                <p key={index} className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-sm lg:text-sm">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </Layout>
  );
}

export default DepartmentTemplate;