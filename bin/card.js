#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('Garth Kidd /'),
  'handle': chalk.cyan('garthk'),
  'work': chalk.white('Senior Software Engineer at Amplified'),
  'twitter': chalk.cyan('https://twitter.com/garthk'),
  'github': chalk.cyan('https://github.com/garthk'),
  'linkedin': chalk.cyan('https://linkedin.com/in/garthk'),
  'web': chalk.cyan('https://example.com'),
  'npx': chalk.white('npx garthk'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = [
  heading,
  '',
  working,
  twittering,
  githubing,
  linkedining,
  // webing,
  '',
  carding
].join(newline)
console.log(chalk.green(boxen(output, options)))
