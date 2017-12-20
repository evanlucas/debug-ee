#!/usr/bin/env node

'use strict'

const {spawn} = require('child_process')
const path = require('path')
const node = process.execPath
const args = process.argv.splice(2)
const path_to_debug_ee = path.dirname(require.resolve('../'))

if (!args.length) {
  console.error('Replace "node" in the command used to run your node process')
  console.error('with "debug-ee".')
  console.error()
  console.error('example: node index.js -> debug-ee index.js')
  process.exitCode = 1
  return
}

spawn(node, [
  '-r'
, path_to_debug_ee
, ...args
], {
  cwd: process.cwd()
, env: process.env
, stdio: 'inherit'
}).on('close', (code, signal) => {
  if (code) process.exitCode = code
})
