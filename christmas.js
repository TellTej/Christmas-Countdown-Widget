// This is a simple widget that tells you how many days there are until christmas
// Change the color "green" to "red" in line 22 for a different color widget
// Merry Christmas!
let gdate = new Date(Date.now())
let gy = gdate.getFullYear()
let gdate1 = new Date('jan 1 ' + gy + ' 00:00:00')
let red = "#801008"
let green = "#014202"
let progress = (1-(gdate - gdate1)/31536000000)*365  - 6

let christmas = Math.round(progress)

let widget = createWidget(christmas)

if (!config.runsInWidget) {}
Script.setWidget(widget)
Script.complete()
  
function createWidget(christmas) {
  let w = new ListWidget()
  w.backgroundColor = new Color(green)
  let only = w.addText("Only")
  only.textColor = Color.white()
  only.textOpacity = 0.8
  only.font = Font.systemFont(17)
  w.addSpacer(5)
  let titleTxt = w.addText(christmas.toString())
  titleTxt.textColor = Color.white()
  titleTxt.font = Font.systemFont(35)
  w.addSpacer(5)
  let subTxt = w.addText("Days Until Christmas!")
  subTxt.textColor = Color.white()
  subTxt.textOpacity = 0.8
  subTxt.font = Font.systemFont(16)
  return w
}
