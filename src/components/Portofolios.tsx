"use client";
import { motion } from "framer-motion";
import { data } from "@/data/portofolio";

const Portofolios = () => {
  return (
    <div className="flex flex-col items-center px-4 py-1 bg-white min-h-screen w-full">
      {/* Judul Halaman */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-black text-4xl text-center font-bold mb-10 mt-8" // Menambahkan mt-8 untuk jarak atas
      >
        Portfolio
      </motion.h1>

      {/* Daftar Portofolio */}
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }} // Menyesuaikan amount viewport
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          className="backdrop-blur-sm text-black m-4 p-6 w-full max-w-6xl 
                       transition-transform hover:scale-[1.02] duration-300 h-auto rounded-xl" // Menambahkan lebar max dan styling
        >
          {/* Judul Project */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left text-black italic">
            {item.title}
          </h2>

          {/* Isi Utama: Deskripsi + Gambar (Perubahan utama di sini) */}
          {/* Mengubah flex-row menjadi flex-col by default, dan md:flex-row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Bagian Deskripsi */}
            {/* Mengubah w-2/3 menjadi w-full by default, dan md:w-2/3 */}
            <div className="flex flex-col items-center md:items-start md:justify-between gap-6 w-full md:w-2/3 order-2 md:order-1">
              <div className="flex flex-col items-center md:items-start md:justify-between gap-6">
                <p className="flex-1 text-base md:text-lg leading-relaxed text-black text-justify">
                  {item.description}
                </p>
                <p className="flex-1 text-base md:text-lg leading-relaxed text-black text-justify">
                  {item.secondary_description}
                </p>
              </div>
              {/* Fitur Utama */}
              {item.key_features?.length > 0 && (
                <div className="mt-6 w-full">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Key Features:
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 text-black">
                    {item.key_features.map((feature, i) => (
                      <li key={i}>
                        <strong>{feature.title}:</strong> {feature.description}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Bagian Gambar */}
            {/* Mengubah w-1/2 menjadi w-full by default, dan md:w-1/3 */}
            <div className="my-6 flex justify-center relative w-full md:w-1/3 order-1 md:order-2">
              <motion.img
                src={item.images1}
                alt={item.title}
                className="rounded-lg w-full h-auto object-cover max-h-96" // Menambahkan object-cover
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Manfaat */}
          {item.benefits?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Benefits:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-black">
                {item.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Portofolios;