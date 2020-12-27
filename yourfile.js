// TLDR: I name this cuz I want it to be fun. If you foud it is annoying please ignore!
const puppeteer = require('puppeteer')

const getNavByFundCode = async (fundcode) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://codequiz.azurewebsites.net/')
  await page.click('input[type="button"]')
  await page.waitForSelector('table', {
    visible: true,
  })
  const html = await page.content()
  const nav = html.match(new RegExp(`<tr> <td>${fundcode}</td><td>([\\d\\.]*?)</td>`))[1]
  
  console.log(nav)

  await browser.close()
}


const fundcode = process.argv[2] || ''

getNavByFundCode(fundcode)
