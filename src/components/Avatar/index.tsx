import Image from 'next/image';

type AvatarProps = {
  imgUrl: string;
}

const Avatar = ({imgUrl}: AvatarProps) => {
  return (
    <div>
        <Image
          src={imgUrl}
          alt=""
          className="w-full rounded-[50px] max-w-[50px]"
        />
    </div>
  )
}

export default Avatar;