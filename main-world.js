(function () {
  const put = () => {
    try {
      const d = document.documentElement;
      if (window._ftaa) d.dataset.cfxFtaa = window._ftaa;
      if (window._bfaa) d.dataset.cfxBfaa = window._bfaa;
    } catch (e) { /* ignore */ }
  };
  put(); setTimeout(put, 1000); setTimeout(put, 4000);
})();
