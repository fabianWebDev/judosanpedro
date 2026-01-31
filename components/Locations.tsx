export default function Location() {
  return (
    <section id="ubicacion" className="w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <h1 className="text-2xl font-bold mb-3 sm:text-3xl sm:mb-4 md:text-4xl">
        Ubicación
      </h1>

      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base sm:mb-6 md:mb-8">
        Nos encontramos en nuestras instalaciones, listas para recibirte en el tatami.
      </p>

      <div className="w-full aspect-[4/3] min-h-[250px] sm:min-h-[300px] md:min-h-[350px] md:aspect-video lg:h-[400px] lg:aspect-auto rounded-lg sm:rounded-xl overflow-hidden shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.897392885823!2d-84.01102759999999!3d9.9424948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e5ba9d6fcc9b%3A0xde49d61d8892419b!2sJudo%20San%20Pedro!5e0!3m2!1ses!2scr!4v1769889607983!5m2!1ses!2scr"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Judo San Pedro"
        />
      </div>
    </section>
  )
}
  