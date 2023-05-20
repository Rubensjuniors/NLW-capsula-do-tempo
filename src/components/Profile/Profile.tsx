import { getUser } from "@/lib/auth";
import Image from "next/image";

const Profile = () => {
  const { name, avatarUrl } = getUser();

  return (
    <div className="flex items-center gap-3 text-left transition-colors">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
        <Image
          src={avatarUrl}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
      </div>

      <p className="max-w-[140px] text-sm leading-snug ">
        {name}
        <a href="#" className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  );
};

export default Profile;
