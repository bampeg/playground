const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const chalk = require('chalk')

const app = express()
const log = console.log

app.use(bodyParser.json())

massive(
  'postgres://rvgntwqcsfdqic:0734c1eda5a53dcb963fabc20c5eefeac921419a34ceaf3b35b5bc05d19810e8@ec2-54-243-137-182.compute-1.amazonaws.com:5432/d79pv2h8lq3aue?ssl=true'
)
  .then(() => log(chalk.gray('db connected')))

app.listen(5309, () => log(chalk.blue('So sublime on port 5309')))