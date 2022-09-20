import { Link } from "gatsby"
import React from "react"

const Card: any = ({ prop, timer }): any => {
  return (
    <>
      {timer && (
        <div className="px-4 hover:scale-110 transition ease-in-out hover:-translate-y-2 duration-300 h-full sm:w-1/4 md:w-1/2 lg:w-1/4 py-4">
          <Link
            to={`overView/?${prop.slug}`}
            partiallyActive={true}
            state={{ name: prop.slug }}
          >
            <div className=" relative flex h-80 shadow-lg border">
              <span className="absolute bottom-0 w-full py-3 text-center">
                $ {prop.price}
              </span>
              <div className=" absolute text-center w-full capitalize py-3 bottom-6">
                <p>{prop.name}</p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  )
}

export default Card
