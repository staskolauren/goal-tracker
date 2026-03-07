import { useState } from "react";

type Album = {
  title: string;
  artist: string;
  year: number;
  listened: boolean;
};
export const Table = () => {
  const [albums, setAlbums] = useState([] as Album[]);
  const [complete, setComplete] = useState(false);

  const albumMessage = albums.length > 0 ? `Total albums from API are: ${albums.length}` : "Click to load albums from API";
  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            fetch("/albums/")
              .then((res) => res.json() as Promise<{ albums: Album[] }>)
              .then((data) => setAlbums(data.albums));
          }}
          aria-label="get albums"
        >
          {albumMessage}
        </button>
      </div>
      <table>
        <caption>
          Albums for 2026
        </caption>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Year</th>
            <th scope="col">Listened</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.title}>
              <th scope="row">{album.title}</th>
              <td>{album.artist}</td>
              <td>{album.year}</td>
              <td>
                <input
                  type="checkbox"
                  checked={album.listened || complete}
                  onChange={async () => {
                    const response = await fetch("/albums/*/markComplete/", {
                      method: "POST"
                    })
                    if (response.ok) {
                      setComplete(true);
                    } else {
                      console.error("Failed to mark album as complete", response);
                    }
                  }}
                  disabled={album.listened}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
