

const EmptyMemories = () => {
  return (
    <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
      <div className="flex flex-1 items-center justify-center">
        <p className="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, comece a{" "}
          <a className="underline hover:text-gray-50" href="">
            criar agora!
          </a>
        </p>
      </div>
    </div>
  );
};

export default EmptyMemories;
