import { useEffect, useState } from "react";
import { Creator } from "../types";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

function ShowCreators() {
  const [creators, setCreators] = useState([] as Creator[])

  useEffect(() => {
    async function getAllCreators() {
      const { data } = await supabase.from("creators").select()
      if(data && data.length > 0) setCreators(data as Creator[])
    }

    getAllCreators()
  }, []);

  return (
    <main className="grid">
      {creators && creators.length > 0 && (
        (creators as Creator[]).map(creator => 
          <CreatorCard key={creator.id} creator={creator} />
        )
      )}
    </main>
  )
}

export default ShowCreators
