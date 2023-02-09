import ReactLoading from "react-loading"
import { LoadingContainer } from "./styles"

export function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading type="spokes" height={"15%"} width={"15%"}></ReactLoading>
    </LoadingContainer>
  )
}
