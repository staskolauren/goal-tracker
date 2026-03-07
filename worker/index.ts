export default {
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "Cloudflare",
      });
    }

    if (url.pathname.startsWith("/albums/")) {
      return Response.json({
        albums: [
          {
            title: 'The Dark Side of the Moon',
            artist: 'Pink Floyd',
            year: 1973,
            listened: true
          },
          {
            title: 'Abbey Road',
            artist: 'The Beatles',
            year: 1969,
            listened: false
          },
          {
            title: 'Thriller',
            artist: 'Michael Jackson',
            year: 1982,
            listened: true
          },
          {
            title: 'Back in Black',
            artist: 'AC/DC',
            year: 1980,
            listened: true
          },
          {
            title: 'Rumours',
            artist: 'Fleetwood Mac',
            year: 1977,
            listened: true
          }
        ]
      });
    }

    if (url.pathname.startsWith("/albums/*/markComplete/")) {
      return new Response(null, { status: 204 });
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler;