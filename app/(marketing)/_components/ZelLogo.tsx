import Image from "next/image"

export default function ZelLogo() {
  return (
    <div className="flex items-center  gap-2.5">
      <Image src="/assets/logo-inverted.svg" width={40} height={40} alt="Zel Learn Logo" className="rounded-xl"/>
      <span className={`font-serif font-bold text-xl `}>
        Zel Learn
      </span>
    </div>
  )
}
