const MapEmbed = () => {
  return (
    <div className="size-full rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.415670932776!2d110.72305679949231!3d-7.314079883101355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a0ac2524f15f1%3A0xdebee61b4b8459fe!2sBawu%2C%20Kec.%20Kemusu%2C%20Kabupaten%20Boyolali%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1749811770859!5m2!1sid!2sid"
        className="w-full h-[300px] md:[600px]  md:h-[450px]"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
