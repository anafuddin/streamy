import { Logo } from "./_components/logo";

const AuthLayout = ({
  children 
} : {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="flex flex-col space-y-2 justify-center items-center h-full">
      <Logo />
      {children}
    </div>
   );
}

export default AuthLayout;