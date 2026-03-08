export default {
  fetch(request) {
    const url = new URL(request.url);
    const method = request.method;

    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "Cloudflare",
      });
    }

    if (url.pathname.startsWith("/albums/") && method === "GET") {
      return Response.json({
        albums: [
          { title: 'Let God Sort Em Out', artist: 'Clipse', listened: false },
          { title: 'The Passionate Ones', artist: 'Nourished By Time', listened: false },
          { title: 'Getting Killed', artist: 'Geese', listened: false },
          { title: 'You\'re Weird Now', artist: 'Guerilla Toss', listened: false },
          { title: 'Goldstar', artist: 'Imperial Triumphant', listened: false },
          { title: 'Revengeseekerz', artist: 'Jane Remover', listened: false },
          { title: 'Viagr Aboys', artist: 'Viagra Boys', listened: false },
          { title: 'Portrait of My Heart', artist: 'Spellling', listened: false },
          { title: 'Magic, Alive!', artist: 'McKinley Dixon', listened: false },
          { title: 'Sinister Grift', artist: 'Panda Bear', listened: false },
          { title: 'Only Dust Remains', artist: 'Backxwash', listened: false },
          { title: 'Pirouette', artist: 'Model/Actriz', listened: false },
          { title: 'Lotus', artist: 'Little Simz', listened: false },
          { title: 'Femme Fatale', artist: 'Mon Laferte', listened: false },
          { title: 'Forever Howlong', artist: 'Black Country, New Road', listened: false },
          { title: 'goodbye, world!', artist: 'miffle', listened: false },
          { title: 'The Film', artist: 'Sumac and Moor Mother', listened: false },
          { title: 'I Love My Computer', artist: 'Ninajirachi', listened: false },
          { title: 'Snipe Hunter', artist: 'Tyler Childers', listened: false },
          { title: 'Tether', artist: 'Annahstasia', listened: false },
          { title: 'Vanisher, Horizon Scraper', artist: 'Quadeca', listened: false },
          { title: 'Rock Doido', artist: 'Gaby Amarantos', listened: false },
          { title: 'Fairyland Codex', artist: 'Tropical Fuck Storm', listened: false },
          { title: 'Cancionera', artist: 'Natalia Lafourcade', listened: false },
          { title: 'Lonely People with Power', artist: 'Deafheaven', listened: false },
          { title: 'Soft Spot', artist: 'Honningbarna', listened: false },
          { title: 'Something Beautiful', artist: 'Miley Cyrus', listened: false },
          { title: 'Worldwide', artist: 'Snõõper', listened: false },
          { title: 'The Spiritual Sound', artist: 'Agriculture', listened: false },
          { title: 'Eusexua', artist: 'FKA twigs', listened: false },
          { title: 'Tranquilizer', artist: 'Oneohtrix Point Never', listened: false },
          { title: 'The Sword & The Soaring', artist: 'Navy Blue', listened: false },
          { title: 'A City Drowned in God\'s Black Tears', artist: 'Infinity Knives & Brian Ennals', listened: false },
          { title: 'The Hives Forever Forever the Hives', artist: 'The Hives', listened: false },
          { title: 'Noble and Godlike in Ruin', artist: 'Deerhoof', listened: false },
          { title: 'DeBÍ TiRAR MáS FOToS', artist: 'Bad Bunny', listened: false },
          { title: 'Stardust', artist: 'Danny Brown', listened: false },
          { title: 'Pain to Power', artist: 'Maruja', listened: false },
          { title: 'Cabin in the Sky', artist: 'De La Soul', listened: false },
          { title: 'Don\'t Tap the Glass', artist: 'Tyler, The Creator', listened: false },
          { title: 'Black Hole Superette', artist: 'Aesop Rock', listened: false },
          { title: 'Nested in Tangles', artist: 'Hannah Frances', listened: false },
          { title: 'Balloonerism', artist: 'Mac Miller', listened: false },
          { title: 'God Does Like Ugly', artist: 'JID', listened: false },
          { title: 'In The Earth Again', artist: 'Chat Pile & Hayden Pedigo', listened: false },
          { title: 'Hurry Up Tomorrow', artist: 'The Weeknd', listened: false },
          { title: 'Phonetics On and On', artist: 'Horsegirl', listened: false },
          { title: 'Sable, Fable', artist: 'Bon Iver', listened: false },
          { title: 'Tomorrow We Escape', artist: 'Ho99o9', listened: false },
          { title: 'Live Laugh Love', artist: 'Earl Sweatshirt', listened: false }
        ]
      });
    }

    if (url.pathname.startsWith("/albums/") && method === "POST") {
      return new Response(null, { status: 204 });
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler;