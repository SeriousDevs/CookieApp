import WithAuthRedirect from "HOC/WithAuthRedirect";

const Home = () => {
  return (
    <div>
      Home page
    </div>
  )
}

export default WithAuthRedirect(Home, '/login');
