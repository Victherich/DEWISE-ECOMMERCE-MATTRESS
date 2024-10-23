import React from 'react'

const FooterDown = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        ^50% OFF promotion is valid on selected Piping Rock brand items. All products are subject to availability. Offer cannot be applied to prior purchases. 
      </p>
      <p style={styles.text}>
        Privacy Policy | Terms of Use
      </p>
      <p style={styles.text2}>
        These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.
      </p>
      <p style={styles.text}>
        All products sold on this site are for personal use and are not for resale.
      </p>
      <p style={styles.text}>
        Copyright Heovin.com.ng
      </p>
    </div>
  )
}

const styles = {
  container: {
    borderTop:"1px solid lightgray",
    textAlign: 'center',   // Centers the text
    padding: '20px',       // Adds padding for spacing
    width: '100%',         // Makes it responsive to screen width
    boxSizing: 'border-box',
    backgroundColor:"#F9F9F9" // Ensures padding doesn't break the layout
  },
  text: {
    margin: '15px 0',      // Adds space between each paragraph
    fontSize: '0.8rem',      // Sets base font size, responsive
    lineHeight: '1.5',     // Improves readability
  
    marginLeft: 'auto',    // Centers the text container horizontally
    marginRight: 'auto', 
    color:"rgba(0,0,0,0.8)"  // Centers the text container horizontally
  },
  text2: {
    margin: '10px 0',      // Adds space between each paragraph
    fontSize: '0.8rem',      // Sets base font size, responsive
    lineHeight: '1.5',     // Improves readability

    marginLeft: 'auto',    // Centers the text container horizontally
    marginRight: 'auto', 
    color:"rgba(0,0,0,0.8)",  // Centers the text container horizontally
    padding:"2px",
    border:"1px solid gray"

  }
}

export default FooterDown
