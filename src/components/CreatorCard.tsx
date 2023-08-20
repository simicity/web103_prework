import { Creator } from "../types"

function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <a href={`/view/${creator.id}`}>
      <article>
        <b>{creator.name}</b><br />
        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/link--v1.png" alt="link"/>
        <u><small>{creator.url}</small></u><br />
        <small>{creator.description}</small>
        {creator.imageURL && (
          <img src={creator.imageURL} alt="creator image" />
        )}
      </article>
    </a>
  )
}

export default CreatorCard
