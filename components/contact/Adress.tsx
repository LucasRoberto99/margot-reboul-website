// components/contact/Adress.tsx

const AdressItem: React.FC<{
  number: string;
  title: string;
  address: string;
  mapUrl: string;
}> = ({ number, title, address, mapUrl }) => (
  <div className="flex items-center justify-between gap-8 max-md:flex-col">
    <div className="flex gap-5">
      <div className="flex h-8 w-8 items-center justify-center self-center rounded-full bg-custom-darkgreen p-5 font-tango text-xl text-white max-md:hidden">
        {number}
      </div>
      <div className="text-center">
        <p className="font-semibold">{title}</p>
        {address}
      </div>
    </div>
    <iframe
      src={mapUrl}
      className="h-60 w-72 rounded-lg object-cover"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
);

export default function Adress() {
  return (
    <div className="flex flex-2 flex-col gap-4 max-xl:items-center">
      <h3 className="text-center text-2xl font-bold max-md:text-lg">
        Adresses
      </h3>
      <div className="flex flex-col gap-10">
        <AdressItem
          number="1"
          title="Cabinet Toulouse :"
          address="25 rue Roquelaine, 31000 Toulouse"
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.778988077508!2d1.4433880763001066!3d43.611143171104224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebd88f52def43%3A0xa1d8b5cc2a12216a!2s25%20Rue%20Roquelaine%2C%2031000%20Toulouse!5e0!3m2!1sfr!2sfr!4v1731261992733!5m2!1sfr!2sfr"
        />
        <AdressItem
          number="2"
          title="Cabinet Plaisance-du-Touch, Association dominique :"
          address="18 rue Lorraine, 31830 Plaisance-du-Touch"
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.978989651612!2d1.2810160877969872!3d43.5653208966065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb3e3058f0011%3A0x279a65163dca6bde!2s18%20Rue%20Lorraine%2C%2031830%20Plaisance-du-Touch!5e0!3m2!1sfr!2sfr!4v1731262077840!5m2!1sfr!2sfr"
        />
      </div>
    </div>
  );
}
