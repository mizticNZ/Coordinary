import { useParams } from "react-router-dom"
import useCharities from "../../hooks/useCharities"

export default function OurImpact() {

  const { charitySlug } = useParams() 
  const { data: charity, isPending, isError, error } = useCharities().get(charitySlug as string)

  if (isPending) {
    return (
      <p>Loading...</p>
    )
  }
  if (isError) {
    return (
      <p>{error.message}</p>
    )
  }

  return (
    <div className="relative h-[92%] w-[90%] overflow-y-scroll">
      <div className="fixed h-1/2 w-full overflow-x-hidden bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed object-cover"></div>
      <div className="absolute top-1/2 left-0 h-auto w-full bg-background p-6">
      <h1 className="mb-4 text-6xl font-medium font-display text-secondary capitalize">Latest <span className="text-primary font-semibold">News</span></h1>
      </div>
    </div>
  )
}