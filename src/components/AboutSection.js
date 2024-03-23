import React  from 'react'

export default function AboutSection(props) {

    // const [myStyle, setMyStyle] = useState(
    // {
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle = {
        color:props.mode === 'dark'?'white':'#343a40',
        backgroundColor:props.mode=== 'dark'?'#343a40':'white'
    }
    

  return (
            <div className="container"  style={myStyle} >
                <h2 className='my-3'>About Us</h2>
                <div className="accordion" style={myStyle} id="accordionExample"  >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              <strong> BROWSE COMPATIBLE</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            TextUtils is compatible with various web browsers, including Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera. It ensures seamless functionality across different platforms, enhancing user experience and accessibility for a wide range of users.
                               </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                             <strong>TEXT ANALYSING</strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        "Utilizing advanced linguistic algorithms, our text analysis tool comprehensively examines content, identifying key themes, sentiment, readability, and linguistic patterns. It offers insights to enhance understanding, optimize communication, and streamline information processing efficiently." 
                         </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>FREE TO USE </strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        "TextUtils offers a suite of free-to-use text processing tools. From basic text manipulation to advanced analysis, it provides a versatile platform for developers and researchers. Simplify your text-related tasks with TextUtils today!"
                        </div>
                        </div>
                    </div>
                </div>
                    
                
            </div>
  )
}
