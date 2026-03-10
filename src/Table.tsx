import { useEffect, useState } from "react";

type Album = {
  title: string;
  artist: string;
  listened: {
    kevin: boolean;
    lauren: boolean;
  };
};

interface TableProps {
  setAlbums: (albums: Album[]) => void;
  albums: Album[];
}

const checkbox = (albums: Album[], setAlbums: (albums: Album[]) => void, index: number, name: 'lauren' | 'kevin') => (<td>
  <input
    type="checkbox"
    checked={albums[index].listened[name]}
    onChange={async () => {
      setAlbums(albums.map((album, i) => i === index ? { ...album, listened: { ...album.listened, [name]: !album.listened[name] } } : album));
    }}
  />
</td>)

const renderTable = ({ setAlbums, albums, }: TableProps) => (
  <>
    <table className="table" style={{ margin: "20px 0" }}>
      <thead style={{ position: 'sticky', top: '2em', backgroundColor: '#242424', zIndex: 1, borderBottom: '1px solid #646cff' }}>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
          <th scope="col">Kevin</th>
          <th scope="col">Lauren</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album, index) => (
          <tr key={album.title}>
            <th scope="row">{album.title}</th>
            <td>{album.artist}</td>
            {checkbox(albums, setAlbums, index, 'kevin')}
            {checkbox(albums, setAlbums, index, 'lauren')}

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
  const count = {
    'kevin': albums.filter((a) => a.listened.kevin).length,
    'lauren': albums.filter((a) => a.listened.lauren).length,
  }

  let loadingMessage: string[], table;
  if (loading) {
    loadingMessage = ["Loading albums from API..."];
    table = null;
  } else {
    loadingMessage = [`Kevin Count: ${count.kevin}`, `Lauren Count: ${count.lauren}`];
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
    <div className="table-container">
      <div className="header-bar">
        {loadingMessage.map((msg: string) => (<span key={msg}>{msg}</span>))}
      </div>
      {table}
    </div>
  )
}
