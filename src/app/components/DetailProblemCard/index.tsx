import Address from "@/components/Address";

type DetailProps ={
  detailProblem: DetailProblem
}

const DetailProblemCard = ({
  detailProblem
}:DetailProps) => {
  const {title, imgUrl, address, description} = detailProblem

  return (
    <>
      <div className="mt-[56px] mb-[48px]">
        <h1 className="text-[56px] text-black font-extrabold text-center">
          {title}
        </h1>
      </div>
      <img alt="" src={imgUrl} className="w-full aspect-card-image" />
          <div className="mt-6 flex flex-col gap-3">
            <Address city={address.city} neighborhood={address.neighborhood} uf={address.uf} />
            <p className="text-base">
              {description}
            </p>
          </div>
    </>
  );
};

export default DetailProblemCard;
