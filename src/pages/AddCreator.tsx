import { useState } from "react"
import { supabase } from "../client"
import { useNavigate } from "react-router-dom"

function AddCreator() {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [imageURL, setimageURL] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const { data, error } = await supabase.from('creators').insert(
        { name, url, imageURL, description },
      )

      if (error) {
        console.error('Error inserting creator:', error)
      } else {
        console.log('Creator inserted:', data)
        navigate("/")
      }
    } catch (error) {
      console.error('Error inserting creator:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input type="url" name="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input type="url" name="imageURL" value={imageURL} onChange={(e) => setimageURL(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default AddCreator
