import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
  return (
    <div className="z-[999]">
        <AnimatedCursor 
        innerSize={6}
        outerSize={55}
        outerAlpha={0}
        innerScale={2}
        outerScale={1}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#D1D5DB"
        }}
        outerStyle={{
          border: '2px solid #D1D5DB'
        }}
        clickables={[
          'a',  
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  )
}

export default Cursor
