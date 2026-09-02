```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Digital Sound Shop</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #0d0d0d;
      color: #ffffff;
      line-height: 1.6;
    }

    /* Header */
    header {
      text-align: center;
      padding: 70px 20px 50px;
      background: linear-gradient(135deg, #111111, #1a1a1a);
    }

    header h1 {
      font-size: 48px;
      margin-bottom: 12px;
      letter-spacing: -1px;
    }

    header p {
      color: #aaa;
      font-size: 18px;
    }

    /* Products */
    .shop {
      max-width: 1000px;
      margin: 60px auto;
      padding: 0 20px;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .product {
      background: #171717;
      border: 1px solid #292929;
      border-radius: 16px;
      padding: 35px;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .product:hover {
      transform: translateY(-5px);
      border-color: #666;
    }

    .product-icon {
      width: 70px;
      height: 70px;
      border-radius: 12px;
      background: #252525;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      margin-bottom: 25px;
    }

    .product h2 {
      font-size: 27px;
      margin-bottom: 10px;
    }

    .description {
      color: #aaa;
      margin-bottom: 25px;
      min-height: 50px;
    }

    .price {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .buy-button {
      display: block;
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 8px;
      background: #ffffff;
      color: #000000;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .buy-button:hover {
      background: #dddddd;
      transform: scale(1.02);
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 40px 20px;
      border-top: 1px solid #222;
      color: #666;
      margin-top: 60px;
    }

    /* Mobile */
    @media (max-width: 700px) {
      header h1 {
        font-size: 36px;
      }

      .products {
        grid-template-columns: 1fr;
      }

      .product {
        padding: 28px;
      }
    }
  </style>
</head>

<body>

  <header>
    <h1>Digital Sound Shop</h1>
    <p>High-quality sounds for your next track.</p>
  </header>

  <main class="shop">

    <div class="products">

      <!-- Product 1 -->
      <div class="product">
        <div class="product-icon">🥁</div>

        <h2>Drum Kit</h2>

        <p class="description">
          A collection of punchy drums, kicks, snares, hats and percussion
          designed to give your productions more energy.
        </p>

        <div class="price">$1</div>

        <!-- Replace the # with your payment link -->
        <a
          href="#"
          class="buy-button"
          onclick="purchase('Drum Kit', 1)"
        >
          Buy Drum Kit — $1
        </a>
      </div>


      <!-- Product 2 -->
      <div class="product">
        <div class="product-icon">🎹</div>

        <h2>Serum Bank</h2>

        <p class="description">
          A collection of presets for Xfer Serum, made for modern electronic
          music, melodies, basses, leads and more.
        </p>

        <div class="price">$5</div>

        <!-- Replace the # with your payment link -->
        <a
          href="#"
          class="buy-button"
          onclick="purchase('Serum Bank', 5)"
        >
          Buy Serum Bank — $5
        </a>
      </div>

    </div>

  </main>

  <footer>
    © 2026 Digital Sound Shop. All rights reserved.
  </footer>


  <script>
    function purchase(product, price) {
      alert(
        "You selected " + product + " for $" + price + ".\n\n" +
        "Connect this button to your payment provider to complete the purchase."
      );
    }
  </script>

</body>
</html>
```

