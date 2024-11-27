import { RdvButton } from "../exports";
// components/contact/MyContact.tsx

export default function MyContact() {
  return (
    <div className="flex h-full flex-1 flex-col gap-8">
      <h3 className="text-center text-2xl font-bold max-md:text-lg">Contact</h3>
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col">
          <h4 className="text-center text-xl font-bold max-md:text-base">
            Mail
          </h4>
          <p className="text-center font-semibold">
            margotreboul.psychologue@hotmail.com
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-center text-xl font-bold max-md:text-base">
            Téléphone
          </h4>
          <p className="text-center font-semibold">07 49 41 99 08</p>
        </div>
        <RdvButton
          href="https://www.doctolib.fr/psychologue/plaisance-du-touch/margot-reboul/booking/motives?specialityId=14&telehealth=false&placeId=practice-628639&bookingFunnelSource=profile"
          title="Prendre rendez-vous"
        />
      </div>
    </div>
  );
}
