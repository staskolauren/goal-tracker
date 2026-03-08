import { useEffect, useState } from "react";

type Album = {
  title: string;
  artist: string;
  listened: boolean;
};

interface TableProps {
  setAlbums: (albums: Album[]) => void;
  albums: Album[];
}

const renderTable = ({ setAlbums, albums, }: TableProps) => (
  <>
    <table className="table" style={{ margin: "20px 0" }}>
      <thead style={{ position: 'sticky', top: 0, backgroundColor: '#242424', zIndex: 1, borderBottom: '1px solid #646cff' }}>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
          <th scope="col">Listened</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album, index) => (
          <tr key={album.title}>
            <th scope="row">{album.title}</th>
            <td>{album.artist}</td>
            <td>
              <input
                type="checkbox"
                checked={album.listened}
                onChange={async () => {
                  setAlbums(albums.map((album, i) => i === index ? { ...album, listened: !album.listened } : album));
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button
      onClick={async () => {
        async () => {
          try {
            await fetch("/albums/", {
              method: "POST",
              body: JSON.stringify({ albums })
            })
          } catch (error) {
            console.error("Failed to update album progress", error);
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
  const [loading, setLoading] = useState(true);
  let loadingMessage, table;
  if (loading) {
    loadingMessage = "Loading albums from API...";
    table = null;
  } else {
    loadingMessage = `Albums remaining: ${albums.filter((a) => !a.listened).length}`;
    table = renderTable({ setAlbums, albums });
  }
  useEffect(() => {
    // 1. Define the async function inside useEffect
    const fetchData = async () => {
      try {
        const res = await fetch("/albums/");
        const data = await res.json() as { albums: Album[] };
        setAlbums(data.albums);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      <p>{loadingMessage}</p>
      {table}
    </>
  )
}
