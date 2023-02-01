const YEAR = new Date().getFullYear();

const theme = {
  darkMode: false,
  readMore: "Read More",
  navs: [
    {
      url: "/",
      name: "Home",
    },
  ],
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time>
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }

        small {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </footer>
  ),
};

export default theme;