import "../../Styles/Lootbox.scss"
import { UseDataItems } from "../UseDataItems"
import { useState } from "react"

// import Five_Seven_Contractor from "../../Assets/Imgs/Five-Seven_Contractor.png";

export const Lootbox = () => {
  const [isActive, setIsActive] = useState(false)
  const [getLootBoxItem] = UseDataItems()

  const yikes = (array: Array<any>) => {
    return (
      <div
        className={`lootbox-overflow-slider ${
          isActive ? "is-active" : "is-not-active"
        }`}
      >
        {array.map((item, index) => (
          <div className="items">
            <div className="items-img">
              <img src={item.imgPath} />
            </div>
            <div
              className="items-title"
              style={{
                background: `linear-gradient(273.16deg, ${item.color[0]} 0%, ${item.color[1]} 100%)`,
                borderTop: `1px solid ${item.color[2]}`,
              }}
            >
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const myTest = () => {
    console.log("test")
    setIsActive(!isActive)
  }

  return (
    <div>
      <div className="lootbox">
        <div className={`lootbox-overflow`}>{yikes(getLootBoxItem)}</div>
      </div>
      <button onClick={() => myTest()}>Test</button>
    </div>
  )
}
