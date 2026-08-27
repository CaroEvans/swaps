# Swaps
A site that promotes making sustainable swaps for things that you use in your everyday life.

Some info on plastic:

- Some plastics may be recyclable in theory, but an estimated 10% of it is actually recycled. 
- Even if recycled, after the first or second time, it degrades to the point that it has to be downcycled into other products like carpets of park benches.
- Much of these downcycled products like clothing and carpets, shed microplastics, polluting our environment and potentially harming our bodies.

This site focused on swapping plastic items for:
- Aluminium, steel and glass 
  - infinitely recyclable and recoverable
- Paper and cardboard
  - renewable resources
  - biodegradable
  - can be recycled 5 to 7 times


## Project Setup

No build step, no dependencies — it's plain HTML, CSS and JavaScript.

```sh
cp .env.example .env
```

### Run locally

```sh
python3 -m http.server -d public 8000
```

Then open http://localhost:8000. You can also just open `public/index.html` in a browser.

### Add a swap

Edit the `swapData` array in `public/swaps.js`.

### Deploy

```sh
./deploy
```
