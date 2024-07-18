import React from "react"
import Headers from "./component/Headers"
import MainContent from "./component/MainContent"
import Footer from "./component/Footer"

function ParentChild () {
    return(
        <div>
            <Headers />
            <MainContent />
            <Footer />
        </div>
    )
}
export default ParentChild;