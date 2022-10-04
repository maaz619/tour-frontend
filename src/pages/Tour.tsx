import { _getOneTour } from "../services/service"
import React from "react"
import Overview from "../components/Overview"

const Tour = ({ location }) => {
  const [tour, setTour] = React.useState<{}>({})
  const { state = {} } = location
  const { id } = state.prop
  React.useEffect(() => {
    const getTour = async () => {
      try {
        let result = await _getOneTour(id)
        if (result.status === "success") setTour({ ...result.data.doc })
      } catch (error) {
        alert(error.message)
      }
    }
    getTour()
  }, [])
  console.log(tour)
  return (
    <div>
      <Overview state={tour} id={id} />
    </div>
  )
}

export default Tour
