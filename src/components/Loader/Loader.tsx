import { Backdrop, CircularProgress } from "@mui/material"

export const Loader: React.FC = () => {

  return (
    <Backdrop
      sx={{ backgroundColor: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress />
    </Backdrop>
  )
}