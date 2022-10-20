export const UseDataItems = () => {
  class Items {
    color: Array<string>
    rate: number
    imgPath: string
    name: string

    constructor(color: Array<string>, rate: number, imgPath: string, name: string) {
      this.color = color
      this.rate = rate
      this.imgPath = imgPath
      this.name = name
    }
  }
  //////////////////////////LIGHT///////DARK//////BORDER///
  const yellowTierColor = ["#FCAA36", "#FF9800", "#FFC777"]
  const redTierColor = ["#E32C2C", "#980000", "#FF6A6A"]
  const pinkTierColor = ["#FF00D6", "#651062", "#E963FF"]
  const purpleTierColor = ["#6908CA", "#5D006C", "#A950FF"]
  const blueTierColor = ["#2C75E3", "#0833CA", "#609DFF"]
  const greyTierColor = ["#C9C9C9", "#3E4250", "#D0E2FF"]

  const karambitLore = new Items(yellowTierColor, 1.4, "/Imgs/Karambit_Lore.png", "★ Karambit Lore")
  const akAsiimov = new Items(pinkTierColor, 7.2, "/Imgs/AK-47_Asiimov.png", "AK-47 Asiimov")
  const awpGungir = new Items(redTierColor, 0.8, "/Imgs/AWP_Gungnir.png", "AWP Gungnir")
  const five7Contractor = new Items(blueTierColor, 20, "/Imgs/Five-Seven_Contractor.png", "Five Seven Contractor")
  const g3sg1SafariM = new Items(greyTierColor, 22.6, "/Imgs/G3SG1_Safari Mesh.png", "G3SG1 Safari Mesh")
  const negevAnodilizedNavy = new Items(greyTierColor, 22.2, "/Imgs/Negev_Anodized Navy.png", "Negev Anodilized Navy")
  const mp7WhiteOut = new Items(blueTierColor, 14.6, "/Imgs/MP7_Whiteout.png", "MP7 White Out")
  const m4a1sCyrex = new Items(purpleTierColor, 7, "/Imgs/M4A1-S_Cyrex.png", "M4A1S Cyrex")
  const m4a1sPrintStream = new Items(redTierColor, 4, "/Imgs/M4A1-S_Printstream.png", "M4A1S Printstream")

  const allItems = [
    karambitLore,
    akAsiimov,
    awpGungir,
    five7Contractor,
    g3sg1SafariM,
    negevAnodilizedNavy,
    mp7WhiteOut,
    m4a1sCyrex,
    m4a1sPrintStream,
  ]

  const setRateInBox = () => {
    let allItemsInBox: any[] = []
    while (allItemsInBox.length <= 99) {
      allItems.forEach((element) => {
        if (element.rate >= Math.floor(Math.random() * 99) && allItemsInBox.length <= 99) {
          allItemsInBox.push(element)
        }
      })
    }
    return allItemsInBox
  }

  return [setRateInBox()]
}
