import { useState } from "react";

type Album = {
  title: string;
  artist: string;
  year: number;
  listened: boolean;
};

interface TableProps {
  setAlbums: (albums: Album[]) => void;
  albums: Album[];
  setComplete: (complete: boolean) => void;
  complete: boolean;
}

const renderTable = ({ setAlbums, albums, setComplete, complete }: TableProps) => (
  <>
    <table className="table" style={{ margin: "20px 0" }}>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
          <th scope="col">Year</th>
          <th scope="col">Listened</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album, index) => (
          <tr key={album.title}>
            <th scope="row">{album.title}</th>
            <td>{album.artist}</td>
            <td>{album.year}</td>
            <td>
              <input
                type="checkbox"
                checked={album.listened || complete}
                onChange={async () => {
                  setAlbums(albums.map((album, i) => i === index ? { ...album, listened: true } : album));
                }}
                disabled={album.listened}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button
      onClick={async () => {
        async () => {
          const response = await fetch("/albums/", {
            method: "POST",
            body: JSON.stringify({ albums })
          })
          if (response.ok) {
            setComplete(true);
          } else {
            console.error("Failed to update album progress", response);
          }
        }
      }}
      aria-label="set album progress"
    >
      Submit Progress
    </button>
  </>
);
export const Table = () => {
  const [albums, setAlbums] = useState([] as Album[]);
  const [complete, setComplete] = useState(false);
  let albumMessage, table;
  if (albums.length === 0) {
    albumMessage = "Click to load albums from API";
  } else {
    albumMessage = `Albums remaining: ${albums.filter((a) => !a.listened).length}`;
    table = renderTable({ setAlbums, albums, setComplete, complete });
  }

  return (
    <>
      <div className="card">
        <button
          onClick={async () => {
            const res = await fetch("/albums/");
            const data = await res.json() as { albums: Album[] };
            setAlbums(data.albums);
          }}
          aria-label="get albums"
        >
          {albumMessage}
        </button>
      </div>
      {table}
    </>
  )
}
