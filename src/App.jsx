import DataImage from "./data"
import { listTools, listProyek } from './data'
function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.fahreja} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <p>TJKT Student • Tech Enthusiast • Always Learning</p>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">Hi, Saya Fahreja Ahmad Sanjaya</h1>
          <p className="text-base/loose mb-
        6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming dan Networking, terutama pada pembuatan Website dan Infrastruktur Jaringan, Mikrotik serta Cisco, ketertarikan pada bidang ini sudah berlangsung lebih dari 3 Tahun untuk semua Bidang.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="/cv.pdf" download="cv-Fahreja" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Project <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[320px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy" />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.fahreja} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10">Hi, perkenalkan saya Fahreja Ahmad Sanjaya, pelajar TJKT yang tertarik di bidang jaringan komputer, infrastruktur IT, dan web development. Saya senang mempelajari konfigurasi jaringan, instalasi perangkat, troubleshooting, serta membuat website sederhana dengan tampilan modern menggunakan HTML dan CSS. Saya juga suka mengeksplorasi teknologi baru dan terus mengembangkan kemampuan agar dapat membangun sistem yang tidak hanya berjalan dengan baik, tetapi juga terlihat profesional.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.fahreja} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6 ">
              <div>
                <h1 className="text-4xl mb-1 ">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1 ">
                  6<span className="text-violet-500">+</span>
                </h1>
                Bulan Pengalaman
              </div>
            </div>
          </div>
        </div>
        <div className=" tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai </h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut ini beberapa tools yang bisa saya pakai untuk pembuatan website ataupun Networking</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map(tool => (
              <div className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id} data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}



          </div>
        </div>
      </div>
      {/* tentang */}

      {/* project */}
      <div className="project mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000">Project</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="text-base/loose text-center opacity-50">Berikut ini beberapa Project yang telah saya Buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={proyek.dad}>
                <img src={proyek.gambar} alt="project image" loading="lazy"/>
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border-zinc-500 rounded-md bg-zinc-600 font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href="#" className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-600">lihat Website</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* project */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos-once="true" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="300" className="text-base/loose text-center mb-10 opacity-50">Mari terhubung dengan saya</p>
        <form data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="500" action="https://api.web3forms.com/submit" method="POST" className="bg-zinc-800 p-10 w-full sm:w-fit mx-auto rounded-md " autoComplete="off">
        <input type="hidden" name="access_key" value="15b4f03c-16b7-4dc3-8d58-9eda25db31a4"></input>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
             <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
             <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-600">kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>
  );
}

export default App;
