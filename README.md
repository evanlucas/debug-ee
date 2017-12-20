# debug-ee

> Show what emitters emit what events

Ever wondered what events are being emitted by something?
This package makes it super easy to view that.

**Note:** Requires Node.js v8.x+

### Usage

```bash
# Instead of
$ node index.js

# Use (if you have installed the package globally)
$ debug-ee index.js

# If you do not want to install globally
$ npx -d debug-ee debug-ee index.js
```

### Example

Try it out by running:

```bash
$ npx -d debug-ee debug-ee example.js
```

![Screenshot](https://raw.githubusercontent.com/evanlucas/debug-ee/master/screenshot.png)

### Author

Evan Lucas

### License

MIT (See `LICENSE` for more info)
