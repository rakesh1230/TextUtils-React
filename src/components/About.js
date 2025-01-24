
export default function About(props) {

    let Mystle = {
        color: props.mode === "dark" ? "white":"#2f2f66",
        backgroundColor: props.mode === "dark" ? "#2f2f66" : "white"
    }
    return (
        <div className="container">
        <h1 className="my-3" style={{color: props.mode === "dark" ? "white":"#2f2f66",}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={Mystle}>
            <div className="accordion-item" style={Mystle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" style={Mystle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyse Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={Mystle}>
                        <strong>With TextUtils, you can analyze your text for word count, character count, and reading time. It provides an efficient way to understand the structure of your text and optimize it for better readability and presentation.</strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={Mystle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Convert to Uppercase</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={Mystle}>
                        <strong>Easily transform your text to uppercase with a single click. This feature is perfect for highlighting important sections or formatting your content for headlines and titles.</strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={Mystle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Convert to Lowercase</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={Mystle}>
                        <strong>Convert your text to lowercase to ensure consistency or for specific formatting needs. This feature is great for creating content that adheres to case-sensitive requirements.</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}