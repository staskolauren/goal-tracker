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
          { title: 'Let God Sort Em Out', artist: 'Clipse', listened: { kevin: false, lauren: false } },
          { title: 'The Passionate Ones', artist: 'Nourished By Time', listened: { kevin: false, lauren: false } },
          { title: 'Getting Killed', artist: 'Geese', listened: { kevin: false, lauren: false } },
          { title: 'You\'re Weird Now', artist: 'Guerilla Toss', listened: { kevin: false, lauren: false } },
          { title: 'Goldstar', artist: 'Imperial Triumphant', listened: { kevin: false, lauren: false } },
          { title: 'Revengeseekerz', artist: 'Jane Remover', listened: { kevin: false, lauren: false } },
          { title: 'Viagr Aboys', artist: 'Viagra Boys', listened: { kevin: false, lauren: false } },
          { title: 'Portrait of My Heart', artist: 'Spellling', listened: { kevin: false, lauren: false } },
          { title: 'Magic, Alive!', artist: 'McKinley Dixon', listened: { kevin: false, lauren: false } },
          { title: 'Sinister Grift', artist: 'Panda Bear', listened: { kevin: false, lauren: false } },
          { title: 'Only Dust Remains', artist: 'Backxwash', listened: { kevin: false, lauren: false } },
          { title: 'Pirouette', artist: 'Model/Actriz', listened: { kevin: false, lauren: false } },
          { title: 'Lotus', artist: 'Little Simz', listened: { kevin: false, lauren: false } },
          { title: 'Femme Fatale', artist: 'Mon Laferte', listened: { kevin: false, lauren: false } },
          { title: 'Forever Howlong', artist: 'Black Country, New Road', listened: { kevin: false, lauren: false } },
          { title: 'goodbye, world!', artist: 'miffle', listened: { kevin: false, lauren: false } },
          { title: 'The Film', artist: 'Sumac and Moor Mother', listened: { kevin: false, lauren: false } },
          { title: 'I Love My Computer', artist: 'Ninajirachi', listened: { kevin: false, lauren: false } },
          { title: 'Snipe Hunter', artist: 'Tyler Childers', listened: { kevin: false, lauren: false } },
          { title: 'Tether', artist: 'Annahstasia', listened: { kevin: false, lauren: false } },
          { title: 'Vanisher, Horizon Scraper', artist: 'Quadeca', listened: { kevin: false, lauren: false } },
          { title: 'Rock Doido', artist: 'Gaby Amarantos', listened: { kevin: false, lauren: false } },
          { title: 'Fairyland Codex', artist: 'Tropical Fuck Storm', listened: { kevin: false, lauren: false } },
          { title: 'Cancionera', artist: 'Natalia Lafourcade', listened: { kevin: false, lauren: false } },
          { title: 'Lonely People with Power', artist: 'Deafheaven', listened: { kevin: false, lauren: false } },
          { title: 'Soft Spot', artist: 'Honningbarna', listened: { kevin: false, lauren: false } },
          { title: 'Something Beautiful', artist: 'Miley Cyrus', listened: { kevin: false, lauren: false } },
          { title: 'Worldwide', artist: 'Snõõper', listened: { kevin: false, lauren: false } },
          { title: 'The Spiritual Sound', artist: 'Agriculture', listened: { kevin: false, lauren: false } },
          { title: 'Eusexua', artist: 'FKA twigs', listened: { kevin: false, lauren: false } },
          { title: 'Tranquilizer', artist: 'Oneohtrix Point Never', listened: { kevin: false, lauren: false } },
          { title: 'The Sword & The Soaring', artist: 'Navy Blue', listened: { kevin: false, lauren: false } },
          { title: 'A City Drowned in God\'s Black Tears', artist: 'Infinity Knives & Brian Ennals', listened: { kevin: false, lauren: false } },
          { title: 'The Hives Forever Forever the Hives', artist: 'The Hives', listened: { kevin: false, lauren: false } },
          { title: 'Noble and Godlike in Ruin', artist: 'Deerhoof', listened: { kevin: false, lauren: false } },
          { title: 'DeBÍ TiRAR MáS FOToS', artist: 'Bad Bunny', listened: { kevin: false, lauren: false } },
          { title: 'Stardust', artist: 'Danny Brown', listened: { kevin: false, lauren: false } },
          { title: 'Pain to Power', artist: 'Maruja', listened: { kevin: false, lauren: false } },
          { title: 'Cabin in the Sky', artist: 'De La Soul', listened: { kevin: false, lauren: false } },
          { title: 'Don\'t Tap the Glass', artist: 'Tyler, The Creator', listened: { kevin: false, lauren: false } },
          { title: 'Black Hole Superette', artist: 'Aesop Rock', listened: { kevin: false, lauren: false } },
          { title: 'Nested in Tangles', artist: 'Hannah Frances', listened: { kevin: false, lauren: false } },
          { title: 'Balloonerism', artist: 'Mac Miller', listened: { kevin: false, lauren: false } },
          { title: 'God Does Like Ugly', artist: 'JID', listened: { kevin: false, lauren: false } },
          { title: 'In The Earth Again', artist: 'Chat Pile & Hayden Pedigo', listened: { kevin: false, lauren: false } },
          { title: 'Hurry Up Tomorrow', artist: 'The Weeknd', listened: { kevin: false, lauren: false } },
          { title: 'Phonetics On and On', artist: 'Horsegirl', listened: { kevin: false, lauren: false } },
          { title: 'Sable, Fable', artist: 'Bon Iver', listened: { kevin: false, lauren: false } },
          { title: 'Tomorrow We Escape', artist: 'Ho99o9', listened: { kevin: false, lauren: false } },
          { title: 'Live Laugh Love', artist: 'Earl Sweatshirt', listened: { kevin: false, lauren: false } }
        ]
      });
    }

    if (url.pathname.startsWith("/albums/") && method === "POST") {
      return new Response(null, { status: 204 });
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler;