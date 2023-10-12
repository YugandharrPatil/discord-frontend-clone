type infoSec = {imagePath: string, altText: string, heading: string, paragraph: string, orderImage: string, orderText: string, bgColor?: string}

export default function InfoSection({imagePath, altText, heading, paragraph, orderImage, orderText, bgColor}: infoSec ) {
  return (
    <>
      <section className={`h-screen ${bgColor}`}>
        <div className="container mx-auto h-full flex justify-around items-center ">
        <div className={`order-${orderText} pl-10 w-1/4`}>
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="mt-5 text-lg">{paragraph}</p>
        </div>
        <img src={imagePath} alt={altText} className={`w-7/12 order-${orderImage}`}/>
        </div>
      </section>
    </>
  )
}
