import { data } from "@/data/portofolio"

const Portofolios = () => {
  return (
    <div className="w-screen flex flex-col ">
      <div className='text-white text-4xl text-center p-2 font-bold'>Portofolio</div>
      {data.map((item) => (
        <div key={item.id} className="m-4 p-4 rounded-lg text-white flex flex-col">
          <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
          <div className="flex justify-evenly">
          <p className="mb-4 max-w-5xl">{item.description}</p>
          <img src={item.images1} alt={item.title} className="w-1/3 h-auto rounded-lg ml-72"/>
          </div>
          {item.key_features && item.key_features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside mb-4">
                {item.key_features.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.title}:</strong> {feature.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.benefits && item.benefits.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
              <ul className="list-disc list-inside">
                {item.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Portofolios