export default function ThemeScript() {
    const code = `
    (function() {
      try {
        var now = new Date();
        var hour = now.getHours();
        var theme = (hour >= 21 || hour < 5) ? 'dark' : 'main';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (_) {}
    })();
  `;

    return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
