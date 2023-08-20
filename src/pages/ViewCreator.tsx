import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Creator } from "../types"
import { supabase } from "../client"

function ViewCreator() {
  const navigate = useNavigate()
  const { creatorId } = useParams()
  const [creator, setCreator] = useState("" as unknown as Creator)
  
  const handleDelete = async() => {
    if(!creatorId) {
      console.error("Error deleting creator: invalid creator id")
      return
    }
    const { error } = await supabase.from("creators").delete().eq('id', parseInt(creatorId))
    if(error) {
      console.error("Error deleting creator: ", error)
      return
    }
    navigate("/")
  }

  useEffect(() => {
    async function getCreator() {
      if(!creatorId) {
        console.error("invalid creator id")
        return
      }
      const { data } = await supabase.from("creators").select().eq('id', parseInt(creatorId))
      if(data && data.length > 0) setCreator(data[0] as Creator)
    }

    getCreator()
  })

  return (
    <>
      <main>
        <h4>{creator.name} </h4>
        <a target="_blank" href={creator.url}><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/link--v1.png" alt="link"/></a>
        <section>{creator.description}</section>
        {creator.imageURL && (
          <img src={creator.imageURL} alt="creator image" />
        )}
      </main>
      <section className="grid">
        <a href={`/edit/${creator.id}`}><button>Edit</button></a>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </>
  )
}

export default ViewCreator
