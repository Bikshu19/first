import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://first-85us.onrender.com/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, [token]);

  return user ? <div>Welcome {user.name} ({user.email})</div> : <div>Loading...</div>;
}
