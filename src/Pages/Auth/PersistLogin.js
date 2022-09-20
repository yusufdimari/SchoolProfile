import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../components/Auth/use-auth";

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const {} = useAuth();
  return <div>PersistLogin</div>;
}
