import { memo } from "react"
import { WelcomeText } from "./Welcome.styled"

const Welcome = () => {
  return (
    <WelcomeText>Wecome to Cookie App</WelcomeText>
  )
}
export default memo(Welcome)
