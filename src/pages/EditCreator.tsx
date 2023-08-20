import { useEffect, useState } from "react"
import { supabase } from "../client"
import { useNavigate, useParams } from "react-router-dom"
import { Creator } from "../types"

function EditCreator() {
  const { creatorId } = useParams()
  const navigate = useNavigate()
  
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [imageURL, setimageURL] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const { data, error } = await supabase.from('creators').update(
        { name, url, imageURL, description },
      )
      .eq('id', creatorId)

      if (error) {
        console.error('Error updating creator:', error)
      } else {
        console.log('Creator updated:', data)
        navigate("/")
      }
    } catch (error) {
      console.error('Error updating creator:', error)
    }
  }

  useEffect(() => {
    async function getCreator() {
      if(!creatorId) return
      const { data } = await supabase.from("creators").select().eq('id', parseInt(creatorId))
      if(data && data.length > 0) {
        const creator = data[0] as Creator
        setName(creator.name)
        setUrl(creator.url)
        setimageURL(creator.imageURL ?? "")
        setDescription(creator.description)
      }
    }

    getCreator()
  }, [creatorId])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input type="url" value={imageURL} onChange={(e) => setimageURL(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
      </div>
      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  )
}

export default EditCreator
