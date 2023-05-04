import Canvas from "canvas";

/**
 * Proxy image and transform the image format to jpg at the backend,
 * so as to satisfy the format requirement of shotit
 * search api under certain scenarios.
 */
export default async (req, res) => {
  const { url = "" } = req.query;

  function error500(e, res) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }

  if (req.method === "GET") {
    if (!url) {
      res.status(403).send("No URL attached");
      return;
    }
    const width = 640;
    const height = 360;
    const canvas = Canvas.createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    const image = await Canvas.loadImage(url).catch((e) => {
      error500(e, res);
    });
    if (image) {
      ctx.drawImage(image, 0, 0, width, height);
      res.setHeader("Content-Type", "image/jpeg");
      canvas.createJPEGStream().pipe(res);
    } else {
      // loadImage has been error500 above
    }
  }
};
