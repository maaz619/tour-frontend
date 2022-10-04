import { Link } from "gatsby"
import React from "react"
import logo from "../static/card-top.jpg"
import { _getOneTour } from "../services/service"

const Card: any = ({ prop }): any => {
  return (
    <>
      <div className="px-4  hover:scale-80 transition ease-in-out hover:-translate-y-2 duration-300 h-full sm:w-1/4 md:w-1/2 lg:w-1/4 py-4">
        <div className=" rounded-md bg-white relative flex h-80 shadow-lg border">
          <div className="">
            <img src={logo} alt="tour" />
          </div>
          <div className=" absolute text-center w-full capitalize pt-3 pb-1.5 bottom-0">
            <Link
              to={`/Tour/#${prop.slug}`}
              partiallyActive={true}
              state={{ prop }}
            >
              <p className="mb-2">
                <span className="w-fit font-semibold text-transparent text-sm bg-clip-text bg-gradient-to-r from-rose-600 to-indigo-400 p-2">
                  {prop.name}
                </span>
              </p>
            </Link>
            <span className="w-full py-3 text-center">$ {prop.price}</span>
            <div className="px-3 flex pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
